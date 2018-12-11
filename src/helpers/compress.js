/**
 * 图片压缩
 * @param {File} file 输入图片
 * @param {number} quality
 * @returns {Promise<File>}
 */
export function compress(file, quality = 0.92) {
    return new Promise((resolve, reject) => {
        const imgEl = new Image();
        imgEl.src = window.URL.createObjectURL(file);
        imgEl.onerror = () => reject(file);
        imgEl.onload = () => {
            const originWidth = imgEl.width;
            const originHeight = imgEl.height;
            const maxWidth = window.innerWidth * window.devicePixelRatio;
            const maxHeight = window.innerHeight * window.devicePixelRatio;
            let targetWidth = originWidth;
            let targetHeight = originHeight;
            if (originWidth > maxWidth || originHeight > maxHeight) {
                if (originWidth / originHeight > maxWidth / maxHeight) {
                    targetWidth = maxWidth;
                    targetHeight = Math.round(maxWidth * (originHeight / originWidth));
                }
                else {
                    targetHeight = maxHeight;
                    targetWidth = Math.round(maxHeight * (originWidth / originHeight));
                }
            }
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = targetWidth;
            canvas.height = targetHeight;
            ctx.clearRect(0, 0, targetWidth, targetHeight); // 清除画布
            ctx.drawImage(imgEl, 0, 0, targetWidth, targetHeight); // 图片压缩
            canvas.toBlob(file => resolve(file), 'image/jpeg', quality);
        };
    });
}