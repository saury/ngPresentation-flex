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

            function getExampleThreeItemWidth() {
                scope.sliders.changeFlex.colWidth[0] = $('.example_3 .item_1').outerWidth()
                scope.sliders.changeFlex.colWidth[1] = $('.example_3 .item_2').outerWidth()
                scope.sliders.changeFlex.colWidth[2] = $('.example_3 .item_3').outerWidth()
            }

            $timeout(getExampleThreeItemWidth, 0)

            scope.$watch('sliders.changeFlex', function(o, n) {
                getExampleThreeItemWidth();
            }, true)
            
        }
    }
})();
