(function() {
    'use strict';
    // impress plugin init
    impress().init();
    
    angular.module('app.splash', []);
    
    // angular init
    angular.module('app', [
        'app.splash'
    ]);

})();
