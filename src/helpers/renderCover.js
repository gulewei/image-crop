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
