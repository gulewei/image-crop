# Image Crop Solution

[Demo Address](https://venecy.github.io/image-crop/)


Inspired by [`AlloyCrop`](https://github.com/AlloyTeam/AlloyCrop), really thanks a lot !

## Hacks

    -  Image orientation: 
    You need correct display orientation when use iOS camera take an image, this require reading EXIF image metadata, there is `exif-js` to do that.

    -  Compress image size: 
    Render a smaller image with `CanvasHTMLElement.drawImage` to load.
    