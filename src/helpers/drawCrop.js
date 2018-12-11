/**
 * 绘制裁剪区域
 * @param {CanvasRenderingContext2D} ctx 绘制裁剪结果的context
 * @param {HTMLImageElement} imgEl
 * @param {number[]} cropRect
 * @param {number} [output=1.5]
 */
export function drawCrop(ctx, imgEl, cropRect, output = 1.5) {
    ctx.drawImage(imgEl, cropRect[0], cropRect[1], cropRect[2], cropRect[3], 0, 0, cropRect[2] * imgEl.scaleX * output, cropRect[3] * imgEl.scaleY * output);
}