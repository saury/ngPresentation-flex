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

            function getExampleFourItemWidth() {
                scope.sliders.changeFlexGrow.colWidth[0] = $('.example_4 .item_1').outerWidth()
                scope.sliders.changeFlexGrow.colWidth[1] = $('.example_4 .item_2').outerWidth()
                scope.sliders.changeFlexGrow.colWidth[2] = $('.example_4 .item_3').outerWidth()
            }

            $timeout(getExampleThreeItemWidth, 0)

            scope.$watch('sliders.changeFlex', function(o, n) {
                getExampleThreeItemWidth();
            }, true)

            scope.$watch('sliders.changeFlexGrow', function(o, n) {
                getExampleFourItemWidth();
            }, true)

            var rootElement = document.getElementById("impress");
            rootElement.addEventListener("impress:stepenter", function() {
                var currentStep = document.querySelector(".present");
                if (currentStep.id === 'overview') {
                    var tar = $('.step');
                    for (var i = 0, len = tar.length; i < (len - 1); i++) {
                        (function(i) {
                            setTimeout(function() {
                                $('.step').eq(i).addClass('bounceOut');
                            }, i * 100)
                        })(i)
                    }
                }
                else {
                    $('.step').removeClass('bounceOut');
                }
            });

        }
    }
})();
