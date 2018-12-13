
import urlFace from './face.png';
// import urlCat from './mao.jpg';
import urlCat from './viszo.jpg';

const faceRect = {
    width: 110,
    height: 126
};

const canvasEl = document.createElement('canvas');
canvasEl.width = faceRect.width;
canvasEl.height = faceRect.height;
const ctx = canvasEl.getContext('2d');
document.body.appendChild(canvasEl);

const loadImage = (url) => new Promise((resolve, reject) => {
    const image = document.createElement('img');
    image.src = url;
    image.onload = () => resolve(image);
    image.onerror = reject;
});

Promise.all(
    [urlFace, urlCat].map(loadImage)
).then(([face, cat]) => {
    const catRect = {
        width: cat.naturalWidth,
        height: cat.naturalHeight
    };

    ctx.drawImage(face, 0, 0, face.naturalWidth, face.naturalHeight);
    ctx.globalCompositeOperation = 'source-in';
    const offset = {
        // x: 0,
        // y: -140,
        // zoom: 2.6
        // x: -3,
        // y: -10,
        // zoom: 1.2
        x: 0,
        y: 0,
        zoom: 1
    };
    const rato = faceRect.height / catRect.height * offset.zoom;
    const pictureRect = {
        width: catRect.width * rato,
        height: catRect.height * rato
    };
    ctx.drawImage(cat, (pictureRect.width - faceRect.width) / -2 + offset.x, offset.y, pictureRect.width, pictureRect.height);

    canvasEl.toBlob(file => {
        const buttonEl = document.createElement('a');
        buttonEl.textContent = 'download';
        buttonEl.download = 'croped-face.png';
        buttonEl.href = window.URL.createObjectURL(file);
        document.body.appendChild(buttonEl);
    }, 'image/png', 0.92);
});

