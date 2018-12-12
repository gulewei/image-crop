import EXIF from 'exif-js';

/**
 * 修正图片旋转角度问题
 * @param {File| string} file 原图片
 * @param {number} quality 输出质量
 * @return {Promise<File>} resolved promise 返回纠正后的新图片
 */
export function fixOrientation(file, quality = 0.92) {
    return new Promise((resolve, reject) => {
        // 获取图片
        const img = new Image();
        img.src = typeof file === 'string' ? file : window.URL.createObjectURL(file);
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

