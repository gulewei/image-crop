
import Transform from './_transform';
import Finger from 'alloyfinger';

/**
 * 使图片可拖拽、缩放
 * @param {HTMLImageElement} imgEl
 * @param {{height: number, width: number}} rect 裁剪框尺寸，用于计算拖拽边界
 */
export function transformImage(imgEl, rect, cropBox) {
    const naturalWidth = imgEl.naturalWidth;
    // const naturalHeight = imgEl.naturalHeight;

    Transform(imgEl, true);

    const scaling_x = window.innerWidth / naturalWidth;
    let initScale = scaling_x;
    const originScale = scaling_x;
    imgEl.scaleX = imgEl.scaleY = scaling_x;
    let first = 1;

    // touch事件必须绑定到容器元素上，img在布局上被canvas遮挡; Finger配置参考: https://github.com/AlloyTeam/AlloyCrop/blob/master/alloy-crop.js
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
        rotate: () => {
            // console.log('TODO: rotate ');
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
}


/**
 * 遮罩和裁剪框采用一个canvas绘制
 * @param {HTMLCanvasElement} cover
 * @param {{height: number, width: number}} rect
 * @param {boolean} [rectangle=true]
 */
export function renderCover(cover, rect, rectangle = true) {
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
    rectangle
        ? ctx.rect(w / 2 - cw / 2, h / 2 - ch / 2, cw, ch) // rect
        : ctx.arc(w / 2, h / 2, cw / 2 - 4, 0, Math.PI * 2, false); // circle
    ctx.fill();
    ctx.restore();
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = 'white';
    rectangle
        ? ctx.rect(w / 2 - cw / 2, h / 2 - ch / 2, cw, ch) // rect
        : ctx.arc(w / 2, h / 2, cw / 2 - 4, 0, Math.PI * 2, false); // circle
    ctx.stroke();
}
