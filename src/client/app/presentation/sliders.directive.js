(function() {
    'use strict';
    angular
        .module('app.sliders')
        .directive('impressDirSliders', impressDirSliders);

    /* @ngInject */
    function impressDirSliders($timeout) {
        var directive = {
            link: link,
            restrict: 'EA',
            controller: 'SlidersCtrl',
            controllerAs: 'sliders'
        };
        return directive;

        function link(scope, element, attrs) {
            console.log($('pre code'));
        }
    }
})();
