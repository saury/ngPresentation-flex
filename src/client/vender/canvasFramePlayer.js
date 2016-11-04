// polyfil for RAF
if (!Date.now)
    Date.now = function() {
        return new Date().getTime();
    };

(function() {
    'use strict';

    var vendors = ['webkit', 'moz'];
    for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
        var vp = vendors[i];
        window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = (window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame']);
    }
    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) // iOS6 is buggy
        || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
        var lastTime = 0;
        window.requestAnimationFrame = function(callback) {
            var now = Date.now();
            var nextTime = Math.max(lastTime + 16, now);
            return setTimeout(function() { callback(lastTime = nextTime); }, nextTime - now);
        };
        window.cancelAnimationFrame = clearTimeout;
    }
}());

(function(document, window) {
    'use strict';
    var body = document.querySelector('body');
    var width = 640;
    var height = 1136;
    //canvas
    var demo = document.querySelector('#demo');
    var demoContext = demo.getContext('2d');
    // get img frames
    var yearImg = new Image();
    yearImg.src = '../images/three/spritesheet.png';
    yearImg.onload = function() {
        console.log('pooque');
        var initImageData = demoContext.getImageData(0, 0, width, height);
        console.log(initImageData);
        // getFrame('year',2,initImageData,yearImg,0,yearPosition,yearDiffHeight,yearFillLength,31);
    };
})(document, window);
