
import { loadPage } from './pages';
import { css } from './domHelpers';
import { transformImage, renderCover, calculateRect, drawCrop, fixOrientation, compress } from '../helpers';

// helpers

/**
 * 创建一个容器元素
 */
function createBox() {
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

function styleImage(imgEl) {
    const naturalWidth = imgEl.naturalWidth;
    const naturalHeight = imgEl.naturalHeight;

    css(imgEl, {
        position: 'fixed',
        zIndex: '99',
        left: '50%',
        top: window.innerHeight / 2 + 'px',
        marginLeft: naturalWidth / -2 + 'px',
        marginTop: naturalHeight / -2 + 'px'
    });
}

function styleCover(cover) {
    cover.width = window.innerWidth;
    cover.height = window.innerHeight;
    css(cover, {
        position: 'fixed',
        zIndex: '100',
        left: '0px',
        top: '0px'
    });
}


const rect = {
    height: 200,
    width: 200
};

// 首页

const onFileChange = (e) => {
    const currentFiles = e.target.files;
    if (currentFiles.length > 0) {
        fixOrientation(currentFiles[0])
            .then(compress)
            .then(
                file => loadPage(crop, { imageSrc: window.URL.createObjectURL(file) })
            );
    }
};

const home = {
    pageName: 'home',
    container: document.body.querySelector('[data-page=home]'),
    events() {
        return {
            // TODO: 处理选择同样图片的情况，同样图片不触发事件
            '#imageSelector:change': onFileChange,
            '#imageLoader:change': onFileChange,
            // hack: 在微信中不能点label调起相机，直接使用input或触发click事件才行
            '#imageLoaderButton:click': () => {
                const imageLoader = document.getElementById('imageLoader');
                imageLoader.click();
            }
        };
    },
    render() {
    },
    cached() {
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
    events(container) {
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
    render(container, { imageSrc }) {
        const cropBox = createBox();

        // 加载图片
        const imgEl = document.createElement('img');
        imgEl.className = 'crop-image';
        imgEl.src = imageSrc;
        imgEl.onload = () => {
            styleImage(imgEl);
            transformImage(imgEl, rect, cropBox);
        };
        cropBox.appendChild(imgEl);

        // 创建canvas遮罩
        const cover = document.createElement('canvas');
        styleCover(cover);
        renderCover(cover, rect);
        cropBox.appendChild(cover);

        container.querySelector('.page-content').appendChild(cropBox);
    },
    /**
     * 
     * @param {HTMLElement} container 
     */
    cached(container) {
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
    events() {
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
    render(container, { imgEl, cropRect }) {
        const resultCanvas = container.querySelector('#resultCanvas');
        drawCrop(resultCanvas.getContext('2d'), imgEl, cropRect, 1.5);
    }
};

loadPage(home);
