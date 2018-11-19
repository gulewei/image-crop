# Image crop solution demo

[demo address](https://venecy.github.io/image-crop/)


Inspired by [`AlloyCrop`](https://github.com/AlloyTeam/AlloyCrop), really thanks a lot !

## hacks

    -  image orientation: you need correct display orientation when use iOS camera take an image, this require reading EXIF image metadata, there is `exif-js` to do that.

    -  compress image size: render a smaller image with `CanvasHTMLElement.drawImage` to load.