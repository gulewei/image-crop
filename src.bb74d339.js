parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"Aqh5":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.qsa=t,exports.addClass=o,exports.removeClass=n,exports.on=r,exports.css=s;var e=Function.prototype.bind.call(Function.prototype.call,[].slice);function t(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return e(o.querySelectorAll(t))}function o(e,t){e.classList.add(t)}function n(e,t){e.classList.remove(t)}function r(e,t,o){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e.addEventListener(t,o),function(){e.removeEventListener(t,o,n)}}function s(e,t){for(var o in t)e.style[o]=t[o]}
},{}],"DCTx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.loadPage=c;var n=require("./domHelpers");function e(n,e){return a(n)||t(n,e)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function t(n,e){var r=[],t=!0,a=!1,o=void 0;try{for(var i,c=n[Symbol.iterator]();!(t=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);t=!0);}catch(u){a=!0,o=u}finally{try{t||null==c.return||c.return()}finally{if(a)throw o}}return r}function a(n){if(Array.isArray(n))return n}var o="cached";function i(r){var t=r.container,a=(0,r.events)(t);return a?Object.entries(a).map(function(r){var a=e(r,2),o=a[0],i=a[1],c=e(o.split(":"),2),u=c[0],s=c[1];return(0,n.on)(t.querySelector(u),s,i)}):[]}function c(e,r){(0,n.qsa)(".page:not(.cached)").map(function(e){(0,n.addClass)(e,o),e._unlistens&&(e._unlistens.forEach(function(n){return n()}),e._unlistens=null),e._onCached&&e._onCached(e)}),(0,n.removeClass)(e.container,o),e.container._unlistens=i(e),e.render(e.container,r),e.container._onCached=e.cached}
},{"./domHelpers":"Aqh5"}],"SPav":[function(require,module,exports) {
!function(){var t=function(t,e,s,i,r,n,a,o,l,h,c,m,u,d,_,p){this.elements=window.Float32Array?new Float32Array(16):[];var f=this.elements;f[0]=void 0!==t?t:1,f[4]=e||0,f[8]=s||0,f[12]=i||0,f[1]=r||0,f[5]=void 0!==n?n:1,f[9]=a||0,f[13]=o||0,f[2]=l||0,f[6]=h||0,f[10]=void 0!==c?c:1,f[14]=m||0,f[3]=u||0,f[7]=d||0,f[11]=_||0,f[15]=void 0!==p?p:1};function e(t,e,i){for(var r=0,n=e.length;r<n;r++){s(t,e[r],i)}}function s(t,e,s){Object.defineProperty(t,e,{get:function(){return this["__"+e]},set:function(t){t!==this["__"+e]&&(this["__"+e]=t,s())}})}t.DEG_TO_RAD=Math.PI/180,t.prototype={set:function(t,e,s,i,r,n,a,o,l,h,c,m,u,d,_,p){var f=this.elements;return f[0]=t,f[4]=e,f[8]=s,f[12]=i,f[1]=r,f[5]=n,f[9]=a,f[13]=o,f[2]=l,f[6]=h,f[10]=c,f[14]=m,f[3]=u,f[7]=d,f[11]=_,f[15]=p,this},identity:function(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this},multiplyMatrices:function(t,e){var s=t.elements,i=this.elements,r=s[0],n=s[4],a=s[8],o=s[12],l=s[1],h=s[5],c=s[9],m=s[13],u=s[2],d=s[6],_=s[10],p=s[14],f=s[3],y=s[7],M=s[11],D=s[15],T=e[0],v=e[1],w=e[2],X=e[3],Y=e[4],A=e[5],Z=e[6],g=e[7],O=e[8],k=e[9],E=e[10],G=e[11],R=e[12],x=e[13],b=e[14],j=e[15];return i[0]=r*T+n*Y+a*O+o*R,i[4]=r*v+n*A+a*k+o*x,i[8]=r*w+n*Z+a*E+o*b,i[12]=r*X+n*g+a*G+o*j,i[1]=l*T+h*Y+c*O+m*R,i[5]=l*v+h*A+c*k+m*x,i[9]=l*w+h*Z+c*E+m*b,i[13]=l*X+h*g+c*G+m*j,i[2]=u*T+d*Y+_*O+p*R,i[6]=u*v+d*A+_*k+p*x,i[10]=u*w+d*Z+_*E+p*b,i[14]=u*X+d*g+_*G+p*j,i[3]=f*T+y*Y+M*O+D*R,i[7]=f*v+y*A+M*k+D*x,i[11]=f*w+y*Z+M*E+D*b,i[15]=f*X+y*g+M*G+D*j,this},_rounded:function(t,e){return e=Math.pow(10,e||15),Math.round(t*e)/e},appendTransform:function(e,s,i,r,n,a,o,l,h,c,m,u,d,_){var p=o*t.DEG_TO_RAD,f=this._rounded(Math.cos(p)),y=this._rounded(Math.sin(p)),M=l*t.DEG_TO_RAD,D=this._rounded(Math.cos(M)),T=this._rounded(Math.sin(M)),v=h*t.DEG_TO_RAD,w=this._rounded(Math.cos(-1*v)),X=this._rounded(Math.sin(-1*v));return this.multiplyMatrices(this,[1,0,0,e,0,f,y,s,0,-y,f,i,0,0,0,1]),this.multiplyMatrices(this,[D,0,T,0,0,1,0,0,-T,0,D,0,0,0,0,1]),this.multiplyMatrices(this,[w*r,X*n,0,0,-X*r,w*n,0,0,0,0,1*a,0,0,0,0,1]),(c||m)&&this.multiplyMatrices(this,[this._rounded(Math.cos(c*t.DEG_TO_RAD)),this._rounded(Math.sin(c*t.DEG_TO_RAD)),0,0,-1*this._rounded(Math.sin(m*t.DEG_TO_RAD)),this._rounded(Math.cos(m*t.DEG_TO_RAD)),0,0,0,0,1,0,0,0,0,1]),(u||d||_)&&(this.elements[12]-=u*this.elements[0]+d*this.elements[4]+_*this.elements[8],this.elements[13]-=u*this.elements[1]+d*this.elements[5]+_*this.elements[9],this.elements[14]-=u*this.elements[2]+d*this.elements[6]+_*this.elements[10]),this}},window.Transform=function(s){e(s,["translateX","translateY","translateZ","scaleX","scaleY","scaleZ","rotateX","rotateY","rotateZ","skewX","skewY","originX","originY","originZ"],function(){var t=s.matrix3D.identity().appendTransform(s.translateX,s.translateY,s.translateZ,s.scaleX,s.scaleY,s.scaleZ,s.rotateX,s.rotateY,s.rotateZ,s.skewX,s.skewY,s.originX,s.originY,s.originZ);s.style.transform=s.style.msTransform=s.style.OTransform=s.style.MozTransform=s.style.webkitTransform="perspective("+s.perspective+"px) matrix3d("+Array.prototype.slice.call(t.elements).join(",")+")"}),e(s,["perspective"],function(){s.style.transform=s.style.msTransform=s.style.OTransform=s.style.MozTransform=s.style.webkitTransform="perspective("+s.perspective+"px) matrix3d("+Array.prototype.slice.call(s.matrix3D.elements).join(",")+")"}),s.matrix3D=new t,s.perspective=500,s.scaleX=s.scaleY=s.scaleZ=1,s.translateX=s.translateY=s.translateZ=s.rotateX=s.rotateY=s.rotateZ=s.skewX=s.skewY=s.originX=s.originY=s.originZ=0}}();
},{}],"5a/q":[function(require,module,exports) {
!function(){function t(t){return Math.sqrt(t.x*t.x+t.y*t.y)}function e(e,i){var s=function(e,i){var s=t(e)*t(i);if(0===s)return 0;var h=function(t,e){return t.x*e.x+t.y*e.y}(e,i)/s;return h>1&&(h=1),Math.acos(h)}(e,i);return function(t,e){return t.x*e.y-e.x*t.y}(e,i)>0&&(s*=-1),180*s/Math.PI}var i=function(t){this.handlers=[],this.el=t};function s(t,e){var s=new i(t);return s.add(e),s}i.prototype.add=function(t){this.handlers.push(t)},i.prototype.del=function(t){t||(this.handlers=[]);for(var e=this.handlers.length;e>=0;e--)this.handlers[e]===t&&this.handlers.splice(e,1)},i.prototype.dispatch=function(){for(var t=0,e=this.handlers.length;t<e;t++){var i=this.handlers[t];"function"==typeof i&&i.apply(this.el,arguments)}};var h=function(t,e){this.element="string"==typeof t?document.querySelector(t):t,this.start=this.start.bind(this),this.move=this.move.bind(this),this.end=this.end.bind(this),this.cancel=this.cancel.bind(this),this.element.addEventListener("touchstart",this.start,!1),this.element.addEventListener("touchmove",this.move,!1),this.element.addEventListener("touchend",this.end,!1),this.element.addEventListener("touchcancel",this.cancel,!1),this.preV={x:null,y:null},this.pinchStartLen=null,this.zoom=1,this.isDoubleTap=!1;var i=function(){};this.rotate=s(this.element,e.rotate||i),this.touchStart=s(this.element,e.touchStart||i),this.multipointStart=s(this.element,e.multipointStart||i),this.multipointEnd=s(this.element,e.multipointEnd||i),this.pinch=s(this.element,e.pinch||i),this.swipe=s(this.element,e.swipe||i),this.tap=s(this.element,e.tap||i),this.doubleTap=s(this.element,e.doubleTap||i),this.longTap=s(this.element,e.longTap||i),this.singleTap=s(this.element,e.singleTap||i),this.pressMove=s(this.element,e.pressMove||i),this.twoFingerPressMove=s(this.element,e.twoFingerPressMove||i),this.touchMove=s(this.element,e.touchMove||i),this.touchEnd=s(this.element,e.touchEnd||i),this.touchCancel=s(this.element,e.touchCancel||i),this._cancelAllHandler=this.cancelAll.bind(this),window.addEventListener("scroll",this._cancelAllHandler),this.delta=null,this.last=null,this.now=null,this.tapTimeout=null,this.singleTapTimeout=null,this.longTapTimeout=null,this.swipeTimeout=null,this.x1=this.x2=this.y1=this.y2=null,this.preTapPosition={x:null,y:null}};h.prototype={start:function(e){if(e.touches){this.now=Date.now(),this.x1=e.touches[0].pageX,this.y1=e.touches[0].pageY,this.delta=this.now-(this.last||this.now),this.touchStart.dispatch(e,this.element),null!==this.preTapPosition.x&&(this.isDoubleTap=this.delta>0&&this.delta<=250&&Math.abs(this.preTapPosition.x-this.x1)<30&&Math.abs(this.preTapPosition.y-this.y1)<30,this.isDoubleTap&&clearTimeout(this.singleTapTimeout)),this.preTapPosition.x=this.x1,this.preTapPosition.y=this.y1,this.last=this.now;var i=this.preV;if(e.touches.length>1){this._cancelLongTap(),this._cancelSingleTap();var s={x:e.touches[1].pageX-this.x1,y:e.touches[1].pageY-this.y1};i.x=s.x,i.y=s.y,this.pinchStartLen=t(i),this.multipointStart.dispatch(e,this.element)}this._preventTap=!1,this.longTapTimeout=setTimeout(function(){this.longTap.dispatch(e,this.element),this._preventTap=!0}.bind(this),750)}},move:function(i){if(i.touches){var s=this.preV,h=i.touches.length,n=i.touches[0].pageX,o=i.touches[0].pageY;if(this.isDoubleTap=!1,h>1){var l=i.touches[1].pageX,a=i.touches[1].pageY,u={x:i.touches[1].pageX-n,y:i.touches[1].pageY-o};null!==s.x&&(this.pinchStartLen>0&&(i.zoom=t(u)/this.pinchStartLen,this.pinch.dispatch(i,this.element)),i.angle=e(u,s),this.rotate.dispatch(i,this.element)),s.x=u.x,s.y=u.y,null!==this.x2&&null!==this.sx2?(i.deltaX=(n-this.x2+l-this.sx2)/2,i.deltaY=(o-this.y2+a-this.sy2)/2):(i.deltaX=0,i.deltaY=0),this.twoFingerPressMove.dispatch(i,this.element),this.sx2=l,this.sy2=a}else{if(null!==this.x2){i.deltaX=n-this.x2,i.deltaY=o-this.y2;var p=Math.abs(this.x1-this.x2),c=Math.abs(this.y1-this.y2);(p>10||c>10)&&(this._preventTap=!0)}else i.deltaX=0,i.deltaY=0;this.pressMove.dispatch(i,this.element)}this.touchMove.dispatch(i,this.element),this._cancelLongTap(),this.x2=n,this.y2=o,h>1&&i.preventDefault()}},end:function(t){if(t.changedTouches){this._cancelLongTap();var e=this;t.touches.length<2&&(this.multipointEnd.dispatch(t,this.element),this.sx2=this.sy2=null),this.x2&&Math.abs(this.x1-this.x2)>30||this.y2&&Math.abs(this.y1-this.y2)>30?(t.direction=this._swipeDirection(this.x1,this.x2,this.y1,this.y2),this.swipeTimeout=setTimeout(function(){e.swipe.dispatch(t,e.element)},0)):(this.tapTimeout=setTimeout(function(){e._preventTap||e.tap.dispatch(t,e.element),e.isDoubleTap&&(e.doubleTap.dispatch(t,e.element),e.isDoubleTap=!1)},0),e.isDoubleTap||(e.singleTapTimeout=setTimeout(function(){e.singleTap.dispatch(t,e.element)},250))),this.touchEnd.dispatch(t,this.element),this.preV.x=0,this.preV.y=0,this.zoom=1,this.pinchStartLen=null,this.x1=this.x2=this.y1=this.y2=null}},cancelAll:function(){this._preventTap=!0,clearTimeout(this.singleTapTimeout),clearTimeout(this.tapTimeout),clearTimeout(this.longTapTimeout),clearTimeout(this.swipeTimeout)},cancel:function(t){this.cancelAll(),this.touchCancel.dispatch(t,this.element)},_cancelLongTap:function(){clearTimeout(this.longTapTimeout)},_cancelSingleTap:function(){clearTimeout(this.singleTapTimeout)},_swipeDirection:function(t,e,i,s){return Math.abs(t-e)>=Math.abs(i-s)?t-e>0?"Left":"Right":i-s>0?"Up":"Down"},on:function(t,e){this[t]&&this[t].add(e)},off:function(t,e){this[t]&&this[t].del(e)},destroy:function(){return this.singleTapTimeout&&clearTimeout(this.singleTapTimeout),this.tapTimeout&&clearTimeout(this.tapTimeout),this.longTapTimeout&&clearTimeout(this.longTapTimeout),this.swipeTimeout&&clearTimeout(this.swipeTimeout),this.element.removeEventListener("touchstart",this.start),this.element.removeEventListener("touchmove",this.move),this.element.removeEventListener("touchend",this.end),this.element.removeEventListener("touchcancel",this.cancel),this.rotate.del(),this.touchStart.del(),this.multipointStart.del(),this.multipointEnd.del(),this.pinch.del(),this.swipe.del(),this.tap.del(),this.doubleTap.del(),this.longTap.del(),this.singleTap.del(),this.pressMove.del(),this.twoFingerPressMove.del(),this.touchMove.del(),this.touchEnd.del(),this.touchCancel.del(),this.preV=this.pinchStartLen=this.zoom=this.isDoubleTap=this.delta=this.last=this.now=this.tapTimeout=this.singleTapTimeout=this.longTapTimeout=this.swipeTimeout=this.x1=this.x2=this.y1=this.y2=this.preTapPosition=this.rotate=this.touchStart=this.multipointStart=this.multipointEnd=this.pinch=this.swipe=this.tap=this.doubleTap=this.longTap=this.singleTap=this.pressMove=this.touchMove=this.touchEnd=this.touchCancel=this.twoFingerPressMove=null,window.removeEventListener("scroll",this._cancelAllHandler),null}},"undefined"!=typeof module&&"object"==typeof exports?module.exports=h:window.AlloyFinger=h}();
},{}],"zn/I":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createBox=a,exports.transformImage=o,exports.renderCover=r,exports.calculateRect=l,exports.drawCrop=h;var t=require("./domHelpers");require("./transform");var e=i(require("alloyfinger"));function i(t){return t&&t.__esModule?t:{default:t}}var n=window.Transform;function a(){var e=document.createElement("div");return e.className="crop-box",(0,t.css)(e,{color:"white",textAlign:"center",fontSize:"18px",textDecoration:"none",visibility:"visible"}),e}function o(i,a,o){var r=i.naturalWidth,l=i.naturalHeight;n(i,!0);var c=window.innerWidth/r,h=c,s=c;i.scaleX=i.scaleY=c;var d=1;new e.default(o,{multipointStart:function(t){var e=(t.touches[0].pageX+t.touches[1].pageX)/2,n=(t.touches[0].pageY+t.touches[1].pageY)/2,a=i.getBoundingClientRect(),o=e-(a.left+a.width/2),r=n-(a.top+a.height/2),l=i.originX,c=i.originY;i.originX=o/i.scaleX,i.originY=r/i.scaleY,i.translateX+=o-l*i.scaleX,i.translateY+=r-c*i.scaleX,1==d&&(i.scaleX=i.scaleY=1.1*h,++d),h=i.scaleX},rotate:function(t){console.log("TODO: rotate ",t)},pinch:function(t){var e=i.getBoundingClientRect(),n=(document.documentElement.clientHeight-a.height)/2,o=t.zoom,r=(e.width*o-e.width)/2,l=(e.height-e.height*o)/2;h*o<=1.6&&h*o>=s&&r>=e.left&&-r<=e.right-a.width&&l<=n-e.top&&l<=e.bottom-n-a.height&&(i.scaleX=i.scaleY=h*o)},pressMove:function(t){var e=i.getBoundingClientRect(),n=(document.documentElement.clientHeight-a.height)/2;n-e.top-t.deltaY>=0&&e.bottom+t.deltaY-n>=a.height&&(i.translateY+=t.deltaY);var o=(document.documentElement.clientWidth-a.width)/2;e.left+t.deltaX<=o&&e.right+t.deltaX-o>=a.width&&(i.translateX+=t.deltaX),t.preventDefault()}}),(0,t.css)(i,{position:"fixed",zIndex:"99",left:"50%",top:window.innerHeight/2+"px",marginLeft:r/-2+"px",marginTop:l/-2+"px"})}function r(e,i){var n=e.getContext("2d"),a=e.width,o=e.height,r=i.width,l=i.height;n.save(),n.fillStyle="black",n.globalAlpha=.7,n.fillRect(0,0,a,o),n.restore(),n.save(),n.globalCompositeOperation="destination-out",n.beginPath(),n.rect(a/2-r/2,o/2-l/2,r,l),n.fill(),n.restore(),n.save(),n.beginPath(),n.strokeStyle="white",n.rect(a/2-r/2,o/2-l/2,r,l),n.stroke(),(0,t.css)(e,{position:"fixed",zIndex:"100",left:"0px",top:"0px"})}function l(t,e){var i=t.getBoundingClientRect(),n=window.innerWidth/2-e.width/2,a=window.innerHeight/2-e.height/2,o=[n,a,e.width+n,e.height+a],r=[i.left,i.top,i.width+i.left,i.height+i.top],l=c.apply(null,o.concat(r)),h=(l[0]-r[0])/t.scaleX,s=(l[1]-r[1])/t.scaleY,d=l[2]/t.scaleX,u=l[3]/t.scaleY;return h<0&&(h=0),s<0&&(s=0),h+d>t.naturalWidth&&(d=t.naturalWidth-h),s+u>t.naturalHeight&&(u=t.naturalHeight-s),[h,s,d,u]}function c(t,e,i,n,a,o,r,l){if(i<a||n<o||t>r||e>l)return[0,0,0,0];var c=Math.max(t,a),h=Math.max(e,o);return[c,h,Math.min(i,r)-c,Math.min(n,l)-h]}function h(t,e,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1.5;t.drawImage(e,i[0],i[1],i[2],i[3],0,0,i[2]*e.scaleX*n,i[3]*e.scaleY*n)}
},{"./domHelpers":"Aqh5","./transform":"SPav","alloyfinger":"5a/q"}],"TbKc":[function(require,module,exports) {
var define;
var e;(function(){var t=!1,r=function(e){return e instanceof r?e:this instanceof r?void(this.EXIFwrapped=e):new r(e)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=r),exports.EXIF=r):this.EXIF=r;var o=r.Tags={36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubsecTime",37521:"SubsecTimeOriginal",37522:"SubsecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:"OECF",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRation",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",40965:"InteroperabilityIFDPointer",42016:"ImageUniqueID"},i=r.TiffTags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright"},a=r.GPSTags={0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential"},s=r.IFD1Tags={256:"ImageWidth",257:"ImageHeight",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",273:"StripOffsets",274:"Orientation",277:"SamplesPerPixel",278:"RowsPerStrip",279:"StripByteCounts",282:"XResolution",283:"YResolution",284:"PlanarConfiguration",296:"ResolutionUnit",513:"JpegIFOffset",514:"JpegIFByteCount",529:"YCbCrCoefficients",530:"YCbCrSubSampling",531:"YCbCrPositioning",532:"ReferenceBlackWhite"},l=r.StringValues={ExposureProgram:{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},Components:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"}};function u(e){return!!e.exifdata}function c(e,n){function o(o){var i=d(o);e.exifdata=i||{};var a=function(e){var n=new DataView(e);t&&console.log("Got file of length "+e.byteLength);if(255!=n.getUint8(0)||216!=n.getUint8(1))return t&&console.log("Not a valid JPEG"),!1;var r=2,o=e.byteLength,i=function(e,t){return 56===e.getUint8(t)&&66===e.getUint8(t+1)&&73===e.getUint8(t+2)&&77===e.getUint8(t+3)&&4===e.getUint8(t+4)&&4===e.getUint8(t+5)};for(;r<o;){if(i(n,r)){var a=n.getUint8(r+7);a%2!=0&&(a+=1),0===a&&(a=4);var s=r+8+a,l=n.getUint16(r+6+a);return g(e,s,l)}r++}}(o);if(e.iptcdata=a||{},r.isXmpEnabled){var s=function(e){if(!("DOMParser"in self))return;var n=new DataView(e);t&&console.log("Got file of length "+e.byteLength);if(255!=n.getUint8(0)||216!=n.getUint8(1))return t&&console.log("Not a valid JPEG"),!1;var r=2,o=e.byteLength,i=new DOMParser;for(;r<o-4;){if("http"==h(n,r,4)){var a=r-1,s=n.getUint16(r-2)-1,l=h(n,a,s),u=l.indexOf("xmpmeta>")+8,c=(l=l.substring(l.indexOf("<x:xmpmeta"),u)).indexOf("x:xmpmeta")+10;l=l.slice(0,c)+'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tiff="http://ns.adobe.com/tiff/1.0/" xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" xmlns:exif="http://ns.adobe.com/exif/1.0/" xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" '+l.slice(c);var d=i.parseFromString(l,"text/xml");return F(d)}r++}}(o);e.xmpdata=s||{}}n&&n.call(e)}if(e.src)if(/^data\:/i.test(e.src))o(function(e,t){t=t||e.match(/^data\:([^\;]+)\;base64,/im)[1]||"",e=e.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var n=atob(e),r=n.length,o=new ArrayBuffer(r),i=new Uint8Array(o),a=0;a<r;a++)i[a]=n.charCodeAt(a);return o}(e.src));else if(/^blob\:/i.test(e.src)){(a=new FileReader).onload=function(e){o(e.target.result)},function(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="blob",n.onload=function(e){200!=this.status&&0!==this.status||t(this.response)},n.send()}(e.src,function(e){a.readAsArrayBuffer(e)})}else{var i=new XMLHttpRequest;i.onload=function(){if(200!=this.status&&0!==this.status)throw"Could not load image";o(i.response),i=null},i.open("GET",e.src,!0),i.responseType="arraybuffer",i.send(null)}else if(self.FileReader&&(e instanceof self.Blob||e instanceof self.File)){var a;(a=new FileReader).onload=function(e){t&&console.log("Got file of length "+e.target.result.byteLength),o(e.target.result)},a.readAsArrayBuffer(e)}}function d(e){var n=new DataView(e);if(t&&console.log("Got file of length "+e.byteLength),255!=n.getUint8(0)||216!=n.getUint8(1))return t&&console.log("Not a valid JPEG"),!1;for(var r,o=2,i=e.byteLength;o<i;){if(255!=n.getUint8(o))return t&&console.log("Not a valid marker at offset "+o+", found: "+n.getUint8(o)),!1;if(r=n.getUint8(o+1),t&&console.log(r),225==r)return t&&console.log("Found 0xFFE1 marker"),S(n,o+4,n.getUint16(o+2));o+=2+n.getUint16(o+2)}}var f={120:"caption",110:"credit",25:"keywords",55:"dateCreated",80:"byline",85:"bylineTitle",122:"captionWriter",105:"headline",116:"copyright",15:"category"};function g(e,t,n){for(var r,o,i,a,s=new DataView(e),l={},u=t;u<t+n;)28===s.getUint8(u)&&2===s.getUint8(u+1)&&(a=s.getUint8(u+2))in f&&((i=s.getInt16(u+3))+5,o=f[a],r=h(s,u+5,i),l.hasOwnProperty(o)?l[o]instanceof Array?l[o].push(r):l[o]=[l[o],r]:l[o]=r),u++;return l}function m(e,n,r,o,i){var a,s,l,u=e.getUint16(r,!i),c={};for(l=0;l<u;l++)a=r+12*l+2,!(s=o[e.getUint16(a,!i)])&&t&&console.log("Unknown tag: "+e.getUint16(a,!i)),c[s]=p(e,a,n,r,i);return c}function p(e,t,n,r,o){var i,a,s,l,u,c,d=e.getUint16(t+2,!o),f=e.getUint32(t+4,!o),g=e.getUint32(t+8,!o)+n;switch(d){case 1:case 7:if(1==f)return e.getUint8(t+8,!o);for(i=f>4?g:t+8,a=[],l=0;l<f;l++)a[l]=e.getUint8(i+l);return a;case 2:return h(e,i=f>4?g:t+8,f-1);case 3:if(1==f)return e.getUint16(t+8,!o);for(i=f>2?g:t+8,a=[],l=0;l<f;l++)a[l]=e.getUint16(i+2*l,!o);return a;case 4:if(1==f)return e.getUint32(t+8,!o);for(a=[],l=0;l<f;l++)a[l]=e.getUint32(g+4*l,!o);return a;case 5:if(1==f)return u=e.getUint32(g,!o),c=e.getUint32(g+4,!o),(s=new Number(u/c)).numerator=u,s.denominator=c,s;for(a=[],l=0;l<f;l++)u=e.getUint32(g+8*l,!o),c=e.getUint32(g+4+8*l,!o),a[l]=new Number(u/c),a[l].numerator=u,a[l].denominator=c;return a;case 9:if(1==f)return e.getInt32(t+8,!o);for(a=[],l=0;l<f;l++)a[l]=e.getInt32(g+4*l,!o);return a;case 10:if(1==f)return e.getInt32(g,!o)/e.getInt32(g+4,!o);for(a=[],l=0;l<f;l++)a[l]=e.getInt32(g+8*l,!o)/e.getInt32(g+4+8*l,!o);return a}}function h(e,t,r){var o="";for(n=t;n<t+r;n++)o+=String.fromCharCode(e.getUint8(n));return o}function S(e,n){if("Exif"!=h(e,n,4))return t&&console.log("Not valid EXIF data! "+h(e,n,4)),!1;var r,u,c,d,f,g=n+6;if(18761==e.getUint16(g))r=!1;else{if(19789!=e.getUint16(g))return t&&console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"),!1;r=!0}if(42!=e.getUint16(g+2,!r))return t&&console.log("Not valid TIFF data! (no 0x002A)"),!1;var p=e.getUint32(g+4,!r);if(p<8)return t&&console.log("Not valid TIFF data! (First offset less than 8)",e.getUint32(g+4,!r)),!1;if((u=m(e,g,g+p,i,r)).ExifIFDPointer)for(c in d=m(e,g,g+u.ExifIFDPointer,o,r)){switch(c){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":d[c]=l[c][d[c]];break;case"ExifVersion":case"FlashpixVersion":d[c]=String.fromCharCode(d[c][0],d[c][1],d[c][2],d[c][3]);break;case"ComponentsConfiguration":d[c]=l.Components[d[c][0]]+l.Components[d[c][1]]+l.Components[d[c][2]]+l.Components[d[c][3]]}u[c]=d[c]}if(u.GPSInfoIFDPointer)for(c in f=m(e,g,g+u.GPSInfoIFDPointer,a,r)){switch(c){case"GPSVersionID":f[c]=f[c][0]+"."+f[c][1]+"."+f[c][2]+"."+f[c][3]}u[c]=f[c]}return u.thumbnail=function(e,t,n,r){var o=function(e,t,n){var r=e.getUint16(t,!n);return e.getUint32(t+2+12*r,!n)}(e,t+n,r);if(!o)return{};if(o>e.byteLength)return{};var i=m(e,t,t+o,s,r);if(i.Compression)switch(i.Compression){case 6:if(i.JpegIFOffset&&i.JpegIFByteCount){var a=t+i.JpegIFOffset,l=i.JpegIFByteCount;i.blob=new Blob([new Uint8Array(e.buffer,a,l)],{type:"image/jpeg"})}break;case 1:console.log("Thumbnail image format is TIFF, which is not implemented.");break;default:console.log("Unknown thumbnail image format '%s'",i.Compression)}else 2==i.PhotometricInterpretation&&console.log("Thumbnail image format is RGB, which is not implemented.");return i}(e,g,p,r),u}function P(e){var t={};if(1==e.nodeType){if(e.attributes.length>0){t["@attributes"]={};for(var n=0;n<e.attributes.length;n++){var r=e.attributes.item(n);t["@attributes"][r.nodeName]=r.nodeValue}}}else if(3==e.nodeType)return e.nodeValue;if(e.hasChildNodes())for(var o=0;o<e.childNodes.length;o++){var i=e.childNodes.item(o),a=i.nodeName;if(null==t[a])t[a]=P(i);else{if(null==t[a].push){var s=t[a];t[a]=[],t[a].push(s)}t[a].push(P(i))}}return t}function F(e){try{var t={};if(e.children.length>0)for(var n=0;n<e.children.length;n++){var r=e.children.item(n),o=r.attributes;for(var i in o){var a=o[i],s=a.nodeName,l=a.nodeValue;void 0!==s&&(t[s]=l)}var u=r.nodeName;if(void 0===t[u])t[u]=P(r);else{if(void 0===t[u].push){var c=t[u];t[u]=[],t[u].push(c)}t[u].push(P(r))}}else t=e.textContent;return t}catch(d){console.log(d.message)}}r.enableXmp=function(){r.isXmpEnabled=!0},r.disableXmp=function(){r.isXmpEnabled=!1},r.getData=function(e,t){return!((self.Image&&e instanceof self.Image||self.HTMLImageElement&&e instanceof self.HTMLImageElement)&&!e.complete)&&(u(e)?t&&t.call(e):c(e,t),!0)},r.getTag=function(e,t){if(u(e))return e.exifdata[t]},r.getIptcTag=function(e,t){if(u(e))return e.iptcdata[t]},r.getAllTags=function(e){if(!u(e))return{};var t,n=e.exifdata,r={};for(t in n)n.hasOwnProperty(t)&&(r[t]=n[t]);return r},r.getAllIptcTags=function(e){if(!u(e))return{};var t,n=e.iptcdata,r={};for(t in n)n.hasOwnProperty(t)&&(r[t]=n[t]);return r},r.pretty=function(e){if(!u(e))return"";var t,n=e.exifdata,r="";for(t in n)n.hasOwnProperty(t)&&("object"==typeof n[t]?n[t]instanceof Number?r+=t+" : "+n[t]+" ["+n[t].numerator+"/"+n[t].denominator+"]\r\n":r+=t+" : ["+n[t].length+" values]\r\n":r+=t+" : "+n[t]+"\r\n");return r},r.readFromBinaryFile=function(e){return d(e)},"function"==typeof e&&e.amd&&e("exif-js",[],function(){return r})}).call(this);
},{}],"ovVa":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.fixOrientation=i,exports.compress=n;var e=t(require("exif-js"));function t(e){return e&&e.__esModule?e:{default:e}}function i(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.92;return new Promise(function(n,r){var a=new Image;a.src=window.URL.createObjectURL(t),a.onerror=function(){return r(t)},a.onload=function(){e.default.getData(a,function(){var r=e.default.getTag(this,"Orientation");if(3!==r&&6!==r&&8!==r)return n(t);var o=document.createElement("canvas"),h=o.getContext("2d");switch(r){case 3:o.width=a.width,o.height=a.height,h.rotate(180*Math.PI/180),h.drawImage(a,-a.width,-a.height,a.width,a.height);break;case 6:o.width=a.height,o.height=a.width,h.rotate(90*Math.PI/180),h.drawImage(a,0,-a.height,a.width,a.height);break;case 8:o.width=a.height,o.height=a.width,h.rotate(-90*Math.PI/180),h.drawImage(a,-a.width,0,a.width,a.height)}o.toBlob(function(e){return n(e)},"image/jpeg",i)})}})}function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.92;return new Promise(function(i,n){var r=new Image;r.src=window.URL.createObjectURL(e),r.onerror=function(){return n(e)},r.onload=function(){var e=r.width,n=r.height,a=window.innerWidth*window.devicePixelRatio,o=window.innerHeight*window.devicePixelRatio,h=e,d=n;(e>a||n>o)&&(e/n>a/o?(h=a,d=Math.round(a*(n/e))):(d=o,h=Math.round(o*(e/n))));var c=document.createElement("canvas"),w=c.getContext("2d");c.width=h,c.height=d,w.clearRect(0,0,h,d),w.drawImage(r,0,0,h,d),c.toBlob(function(e){return i(e)},"image/jpeg",t)}})}
},{"exif-js":"TbKc"}],"H99C":[function(require,module,exports) {
"use strict";var e=require("./pages"),t=require("./cropBox"),n=require("./compressor"),r={height:200,width:200},c=function(t){var r=t.target.files;r.length>0&&(0,n.fixOrientation)(r[0]).then(n.compress).then(function(t){return(0,e.loadPage)(a,{imageSrc:window.URL.createObjectURL(t)})})},o={pageName:"home",container:document.body.querySelector("[data-page=home]"),events:function(){return{"#imageSelector:change":c,"#imageLoader:change":c,"#imageLoaderButton:click":function(){document.getElementById("imageLoader").click()}}},render:function(){},cached:function(){}},a={pageName:"crop",container:document.body.querySelector("[data-page=crop]"),events:function(n){return{".button-cancel:click":function(){(0,e.loadPage)(o)},".button-ok:click":function(){var c=n.querySelector(".crop-image");(0,e.loadPage)(i,{imgEl:c,cropRect:(0,t.calculateRect)(c,r)})}}},render:function(e,n){var c=n.imageSrc,o=(0,t.createBox)(),a=document.createElement("img");a.className="crop-image",a.src=c,a.onload=function(){(0,t.transformImage)(a,r,o)},o.appendChild(a);var i=document.createElement("canvas");i.width=window.innerWidth,i.height=window.innerHeight,(0,t.renderCover)(i,r),o.appendChild(i),e.querySelector(".page-content").appendChild(o)},cached:function(e){var t=e.querySelector(".crop-box");t&&e.querySelector(".page-content").removeChild(t)}},i={pageName:"result",container:document.body.querySelector("[data-page=result]"),events:function(){return{".button:click":function(){location.reload()}}},render:function(e,n){var r=n.imgEl,c=n.cropRect,o=e.querySelector("#resultCanvas");(0,t.drawCrop)(o.getContext("2d"),r,c,1.5)}};(0,e.loadPage)(o);
},{"./pages":"DCTx","./cropBox":"zn/I","./compressor":"ovVa"}]},{},["H99C"], null)
//# sourceMappingURL=src.bb74d339.map