(function() {
    'use strict';
    angular
        .module('app.splash')
        .directive('impressDirSplash', impressDirSplash);

    /* @ngInject */
    function impressDirSplash() {
        var directive = {
            link: link,
            restrict: 'EA',
            controller: 'SplashCtrl',
            controllerAs: 'splash'
        };
        return directive;

        function link(scope, element, attrs) {

            function canvas() {
                var canvas = document.getElementById("demo");
                var stage = new createjs.Stage(canvas);

                // canvas width and height
                var w = stage.canvas.width;
                var h = stage.canvas.height;

                // sky
                var skyImg = new Image();
                skyImg.src = '/src/client/images/sky.png';

                // hill
                var hillImg = new Image();
                hillImg.src = '/src/client/images/hill1.png';

                // hill2
                var hillImg2 = new Image();
                hillImg2.src = '/src/client/images/hill2.png';

                // groud
                var groundImg = new Image();
                groundImg.src = '/src/client/images/ground.png';


                groundImg.onload = function () {
                    console.log(groundImg.width);
                    console.log(groundImg.height);
                    var ground = new createjs.Shape();
                    ground.graphics.beginBitmapFill(groundImg).drawRect(0, 0, w + 81, 79);
                    ground.tileW = groundImg.width;
                    ground.y = h - groundImg.height;

                    var sky = new createjs.Shape();
                    sky.graphics.beginBitmapFill(skyImg).drawRect(0, 0, w, h);

                    var hill = new createjs.Bitmap(hillImg);
                    hill.setTransform(Math.random() * w, h - hill.image.height * 4 - groundImg.height, 4, 4);
                    hill.alpha = 0.5;

                    var hill2 = new createjs.Bitmap(hillImg);
                    hill2.setTransform(Math.random() * w, h - hill2.image.height * 3 - groundImg.height, 3, 3);

                    // running guy
                    var running = new createjs.SpriteSheet({
                        "frames": {"regX": 88 - w/2, "height": 292, "count": 64, "regY": 292 + groundImg.height - 3 - h, "width": 165},
                        // define two animations, run (loops, 1.5x speed) and jump (returns to run):
                        "animations": {
                            "run": [0, 25, "run", 1.5],
                            "jump": [26, 63],
                            "lu": [4,6]
                        },
                        framerate: 60,
                        images: ["/src/client/images/runningGrant.png"]
                    });

                    var sprite = new createjs.Sprite(running);
                    // sprite.scaleY = sprite.scaleX = 0.5;
                    // sprite.regX = -292;
                    stage.addChild(sky, ground, hill, hill2, sprite);

                    sprite.on("mousedown", function(e) { 
                        sprite.gotoAndPlay("run");
                    });
                    sprite.on("dblclick", function(e) { 
                        sprite.gotoAndPlay("lu");
                    });
                    sprite.on("pressup", function(e) { 
                        sprite.stop();
                    });

                    createjs.Ticker.on("tick", stage);
                    createjs.Ticker.framerate  = 60;

                    function tick(event) {
                        var deltaS = event.delta / 1000;
                        // var position = grant.x + 150 * deltaS;

                        // var grantW = grant.getBounds().width * grant.scaleX;
                        // grant.x = (position >= w + grantW) ? -grantW : position;

                        ground.x = (ground.x - deltaS * 150) % ground.tileW;
                        hill.x = (hill.x - deltaS * 30);
                        if (hill.x + hill.image.width * hill.scaleX <= 0) {
                            hill.x = w;
                        }
                        hill2.x = (hill2.x - deltaS * 45);
                        if (hill2.x + hill2.image.width * hill2.scaleX <= 0) {
                            hill2.x = w;
                        }

                        stage.update(event);
                    }
                }
            }
            

        }
    }
})();
