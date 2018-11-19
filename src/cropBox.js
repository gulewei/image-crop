/**
 * 此文件大部分代码引用自https://github.com/AlloyTeam/AlloyCrop/blob/master/alloy-crop.js
 */

import { css } from './domHelpers';
import './transform';
import Finger from 'alloyfinger';


const Transform = window.Transform;

/**
 * 创建一个容器元素
 */
export function createBox () {
    const cropBox = document.createElement('div');
    cropBox.className = 'crop-box';

    css(cropBox, {
        color: 'white',
        textAlign: 'center',
        fontSize: '18px',
        textDecoration: 'none',
        visibility: 'visible'
    });

    return cropBox;
}

/**
 * 使图片可拖拽、缩放
 * @param {HTMLImageElement} imgEl
 * @param {{height: number, width: number}} rect 裁剪框尺寸，用于计算拖拽边界
 */
export function transformImage (imgEl, rect, cropBox) {
    const naturalWidth = imgEl.naturalWidth;
    const naturalHeight = imgEl.naturalHeight;

    Transform(imgEl, true);

    const scaling_x = window.innerWidth / naturalWidth;
    let initScale = scaling_x;
    const originScale = scaling_x;
    imgEl.scaleX = imgEl.scaleY = scaling_x;
    let first = 1;

    // touch事件必须绑定到容器元素上，img在布局上被canvas遮挡
    new Finger(cropBox, {
        multipointStart: (evt) => {
            var centerX = (evt.touches[0].pageX + evt.touches[1].pageX) / 2;
            var centerY = (evt.touches[0].pageY + evt.touches[1].pageY) / 2;
            var cr = imgEl.getBoundingClientRect();
            var img_centerX = cr.left + cr.width / 2;
            var img_centerY = cr.top + cr.height / 2;
            var offX = centerX - img_centerX;
            var offY = centerY - img_centerY;
            var preOriginX = imgEl.originX;
            var preOriginY = imgEl.originY;
            imgEl.originX = offX / imgEl.scaleX;
            imgEl.originY = offY / imgEl.scaleY;
            //reset translateX and translateY

            imgEl.translateX += offX - preOriginX * imgEl.scaleX;
            imgEl.translateY += offY - preOriginY * imgEl.scaleX;


            if (first == 1) {
                imgEl.scaleX = imgEl.scaleY = initScale * 1.1;
                ++first;
            }

            initScale = imgEl.scaleX;
        },
        rotate: (e) => {
            console.log('TODO: rotate ', e);
        },
        pinch: (evt) => {
            var cr = imgEl.getBoundingClientRect();
            var boxOffY = (document.documentElement.clientHeight - rect.height) / 2;

            var tempo = evt.zoom;
            var dw = (cr.width * tempo - cr.width) / 2;
            var dh = (cr.height - cr.height * tempo) / 2;
            if ((initScale * tempo <= 1.6) && (initScale * tempo >= originScale) && (dw >= cr.left) && (-dw <= (cr.right - rect.width)) && (dh <= (boxOffY - cr.top)) && (dh <= (cr.bottom - boxOffY - rect.height))) {
                imgEl.scaleX = imgEl.scaleY = initScale * tempo;
            }
        },
        pressMove: (evt) => {
            var cr = imgEl.getBoundingClientRect();
            var boxOffY = (document.documentElement.clientHeight - rect.height) / 2;
            if ((boxOffY - cr.top - evt.deltaY >= 0) && (cr.bottom + evt.deltaY - boxOffY >= rect.height)) {
                imgEl.translateY += evt.deltaY;
            }
            var boxOffX = (document.documentElement.clientWidth - rect.width) / 2;
            if ((cr.left + evt.deltaX <= boxOffX) && (cr.right + evt.deltaX - boxOffX >= rect.width)) {
                imgEl.translateX += evt.deltaX;
            }
            evt.preventDefault();
        }
    });

    css(imgEl, {
        position: 'fixed',
        zIndex: '99',
        left: '50%',
        top: window.innerHeight / 2 + 'px',
        marginLeft: naturalWidth / -2 + 'px',
        marginTop: naturalHeight / -2 + 'px'
    });
}

/**
 * 遮罩和裁剪框采用一个canvas绘制
 * @param {HTMLCanvasElement} cover 
 */
export function renderCover (cover, rect) {
    const ctx = cover.getContext('2d');
    const w = cover.width;
    const h = cover.height;
    const cw = rect.width;
    const ch = rect.height;
    ctx.save();
    ctx.fillStyle = 'black';
    ctx.globalAlpha = 0.7;
    ctx.fillRect(0, 0, w, h);
    ctx.restore();
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.rect(w / 2 - cw / 2, h / 2 - ch / 2, cw, ch); // rect
    // ctx.arc(w / 2, h / 2, cw / 2 - 4, 0, Math.PI * 2, false); // circle
    ctx.fill();
    ctx.restore();
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = 'white';
    ctx.rect(w / 2 - cw / 2, h / 2 - ch / 2, cw, ch); // rect
    // ctx.arc(w / 2, h / 2, cw / 2 - 4, 0, Math.PI * 2, false); // circle
    ctx.stroke();

    css(cover, {
        position: 'fixed',
        zIndex: '100',
        left: '0px',
        top: '0px'
    });

}

/**
 * 
 * @param {HTMLImageElement} imgEl 
 * @param {{height: number, width: number}} rect 
 */
export function calculateRect (imgEl, rect) {
    var cr = imgEl.getBoundingClientRect();
    var c_left = window.innerWidth / 2 - rect.width / 2;
    var c_top = window.innerHeight / 2 - rect.height / 2;
    var cover_rect = [c_left, c_top, rect.width + c_left, rect.height + c_top];
    var img_rect = [cr.left, cr.top, cr.width + cr.left, cr.height + cr.top];
    var intersect_rect = getOverlap.apply(null, cover_rect.concat(img_rect));
    var left = (intersect_rect[0] - img_rect[0]) / imgEl.scaleX;
    var top = (intersect_rect[1] - img_rect[1]) / imgEl.scaleY;
    var width = intersect_rect[2] / imgEl.scaleX;
    var height = intersect_rect[3] / imgEl.scaleY;

    if (left < 0) left = 0;
    if (top < 0) top = 0;
    if (left + width > imgEl.naturalWidth) width = imgEl.naturalWidth - left;
    if (top + height > imgEl.naturalHeight) height = imgEl.naturalHeight - top;

    return [left, top, width, height];
}

function getOverlap (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    if (ax2 < bx1 || ay2 < by1 || ax1 > bx2 || ay1 > by2) return [0, 0, 0, 0];

    var left = Math.max(ax1, bx1);
    var top = Math.max(ay1, by1);
    var right = Math.min(ax2, bx2);
    var bottom = Math.min(ay2, by2);
    return [left, top, right - left, bottom - top];
}

/**
 * 
 * @param {CanvasRenderingContext2D} ctx 绘制裁剪结果的context
 * @param {HTMLImageElement} imgEl 
 * @param {number[]} cropRect
 * @param {number} [output=1.5] 
 */
export function drawCrop (ctx, imgEl, cropRect, output = 1.5) {
    ctx.drawImage(
        imgEl,
        cropRect[0],
        cropRect[1],
        cropRect[2],
        cropRect[3],
        0,
        0,
        cropRect[2] * imgEl.scaleX * output,
        cropRect[3] * imgEl.scaleY * output
    );
}
