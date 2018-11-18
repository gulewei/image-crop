
import { loadPage } from './pages';
import { transformImage, renderCover, createBox, calculateRect, drawCrop } from './cropBox';

const rect = {
    height: 200,
    width: 100
};

// 首页

const home = {
    pageName: 'home',
    container: document.body.querySelector('[data-page=home]'),
    events () {
        return {
            // TODO: 处理选择同样图片的情况，同样图片不触发事件
            '#imageLoader:input': (e) => {
                const currentFiles = e.target.files;
                if (currentFiles.length > 0) {
                    loadPage(crop, { imageSrc: window.URL.createObjectURL(currentFiles[0]) });
                }
            }
        };
    },
    render () {
    },
    cached () {
    }
};

// 裁剪

const crop = {
    pageName: 'crop',
    container: document.body.querySelector('[data-page=crop]'),
    /**
     * 
     * @param {HTMLElement} container 
     */
    events (container) {
        return {
            '.button-cancel:click': () => {
                loadPage(home);
            },
            '.button-ok:click': () => {
                const imgEl = container.querySelector('.crop-image');
                loadPage(result, { imgEl, cropRect: calculateRect(imgEl, rect) });
            }
        };
    },
    /**
     * 
     * @param {HTMLElement} container 
     * @param {*} param1 
     */
    render (container, { imageSrc }) {
        const cropBox = createBox();

        // 加载图片
        const imgEl = document.createElement('img');
        imgEl.className = 'crop-image';
        cropBox.appendChild(imgEl);
        imgEl.src = imageSrc;
        imgEl.onload = () => {
            transformImage(imgEl, rect, cropBox);
        };

        // 创建canvas遮罩
        const cover = document.createElement('canvas');
        cover.width = window.innerWidth;
        cover.height = window.innerHeight;
        cropBox.appendChild(cover);
        renderCover(cover, rect);

        container.querySelector('.page-content').appendChild(cropBox);
    },
    /**
     * 
     * @param {HTMLElement} container 
     */
    cached (container) {
        const prevBox = container.querySelector('.crop-box');
        if (prevBox) {
            container.querySelector('.page-content').removeChild(prevBox);
        }
    }
};

// result

const result = {
    pageName: 'result',
    container: document.body.querySelector('[data-page=result]'),
    events () {
        return {
            '.button:click': () => {
                location.reload();
            }
        };
    },
    /**
     * 
     * @param {HTMLElement} container 
     * @param {{imgEl: HTMLElement, cropRect: number[]}} param1 
     */
    render (container, { imgEl, cropRect }) {
        const resultCanvas = container.querySelector('#resultCanvas');
        drawCrop(resultCanvas.getContext('2d'), imgEl, cropRect, 1.5);
    }
};

loadPage(home);
