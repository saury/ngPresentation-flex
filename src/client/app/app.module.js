(function() {
    'use strict';
    // impress plugin init
    impress().init();
	hljs.initHighlightingOnLoad();

    angular.module('app.splash', []);
    angular.module('app.sliders', []);
    
    // angular init
    angular.module('app', [
        'app.splash',
        'app.sliders'
    ]);

})();
