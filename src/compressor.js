import EXIF from 'exif-js';

/**
 * 修正图片旋转角度问题
 * @param {File} file 原图片
 * @param {number} quality 输出质量
 * @return {Promise<File>} resolved promise 返回纠正后的新图片
 */
export function fixOrientation(file, quality = 0.92) {
    return new Promise((resolve, reject) => {
        // 获取图片
        const img = new Image();
        img.src = window.URL.createObjectURL(file);
        img.onerror = () => reject(file);
        img.onload = () => {
            // 获取图片元数据（EXIF 变量是引入的 exif-js 库暴露的全局变量）
            EXIF.getData(img, function () {
                // 获取图片旋转标志位
                var orientation = EXIF.getTag(this, 'Orientation');
                // 根据旋转角度，在画布上对图片进行旋转
                if (orientation === 3 || orientation === 6 || orientation === 8) {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    switch (orientation) {
                    case 3: // 旋转180°
                        canvas.width = img.width;
                        canvas.height = img.height;
                        ctx.rotate((180 * Math.PI) / 180);
                        ctx.drawImage(img, -img.width, -img.height, img.width, img.height);
                        break;
                    case 6: // 旋转90°
                        canvas.width = img.height;
                        canvas.height = img.width;
                        ctx.rotate((90 * Math.PI) / 180);
                        ctx.drawImage(img, 0, -img.height, img.width, img.height);
                        break;
                    case 8: // 旋转-90°
                        canvas.width = img.height;
                        canvas.height = img.width;
                        ctx.rotate((-90 * Math.PI) / 180);
                        ctx.drawImage(img, -img.width, 0, img.width, img.height);
                        break;
                    }
                    // 返回新图片
                    canvas.toBlob(file => resolve(file), 'image/jpeg', quality);
                } else {
                    return resolve(file);
                }
            });
        };
    });
}

/**
 * 压缩图片
 * @param {File} file 输入图片
 * @param {number} quality
 * @returns {Promise<File>} resolved promise 返回压缩后的新图片
 */
export function compress(file, quality = 0.92) {
    return new Promise((resolve, reject) => {
        // 获取图片（加载图片是为了获取图片的宽高）
        const img = new Image();
        img.src = window.URL.createObjectURL(file);
        img.onerror = error => reject(error);
        img.onload = () => {
            // 画布宽高
            const canvasWidth = document.documentElement.clientWidth * window.devicePixelRatio;
            const canvasHeight = document.documentElement.clientHeight * window.devicePixelRatio;

            // 计算缩放因子
            // 这里我取水平和垂直方向缩放因子较大的作为缩放因子，这样可以保证图片内容全部可见
            const scaleX = canvasWidth / img.width;
            const scaleY = canvasHeight / img.height;
            const scale = Math.min(scaleX, scaleY);

            // 将原始图片按缩放因子缩放后，绘制到画布上
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = canvasWidth;
            canvas.height = canvasHeight;
            const imageWidth = img.width * scale;
            const imageHeight = img.height * scale;
            const dx = (canvasWidth - imageWidth) / 2;
            const dy = (canvasHeight - imageHeight) / 2;
            ctx.drawImage(img, dx, dy, imageWidth, imageHeight);
            // 导出新图片
            // 指定图片 MIME 类型为 'image/jpeg', 通过 quality 控制导出的图片质量，进行实现图片的压缩
            canvas.toBlob(file => resolve(file), 'image/jpeg', quality);
        };
    });
}

/**
 * 图片压缩
 * @param {string} imageSrc 
 * @param {(url: string) => void} callback
 */
export function compressor(imageSrc, callback) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const imgEl = document.createElement('img');
    imgEl.src = imageSrc;
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
            } else {
                targetHeight = maxHeight;
                targetWidth = Math.round(maxHeight * (originWidth / originHeight));
            }
        }

        canvas.width = targetWidth;
        canvas.height = targetHeight;

        // 清除画布
        ctx.clearRect(0, 0, targetWidth, targetHeight);
        // 图片压缩
        ctx.drawImage(imgEl, 0, 0, targetWidth, targetHeight);

        callback(canvas.toDataURL());
    };
}
