function getOverlap(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    if (ax2 < bx1 || ay2 < by1 || ax1 > bx2 || ay1 > by2) return [0, 0, 0, 0];

    var left = Math.max(ax1, bx1);
    var top = Math.max(ay1, by1);
    var right = Math.min(ax2, bx2);
    var bottom = Math.min(ay2, by2);
    return [left, top, right - left, bottom - top];
}

/**
 * 计算图片与裁剪框重叠区域
 * @param {HTMLImageElement} imgEl
 * @param {{height: number, width: number}} rect
 */
export function calculateRect(imgEl, rect) {
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
    if (left < 0)
        left = 0;
    if (top < 0)
        top = 0;
    if (left + width > imgEl.naturalWidth)
        width = imgEl.naturalWidth - left;
    if (top + height > imgEl.naturalHeight)
        height = imgEl.naturalHeight - top;
    return [left, top, width, height];
}
