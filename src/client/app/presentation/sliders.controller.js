(function() {
    'use strict';
    angular
        .module('app.sliders')
        .controller('SlidersCtrl', SlidersCtrl);

    /* @ngInject */
    function SlidersCtrl($scope, $timeout) {
        var vm = this;
        var timer;

        vm.oldTime = {
            quaters: [
                'quarter #1',
                'quarter #2',
                'quarter #3',
                'quarter #4'
            ],
            showLong: function(order){
                if(order > 0) return
                this.quaters[order] = 'long long long long'
            },
            appendChild: function(){
                console.log('pooque');
                this.quaters.push('quarter #n')
            }
        }
    }
})();
