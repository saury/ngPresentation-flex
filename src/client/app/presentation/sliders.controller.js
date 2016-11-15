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
                if(order > 1) return
                else if(order === 1) {this.quaters.shift(); return}
                this.quaters[order] = 'long long long long'
            },
            appendChild: function(){
                this.quaters.push('quarter')
            }
        }

        vm.changeAIJA = {
            AIVal: 'center',
            ASVal: 'center',
            JAVal: 'center',
            FDVal: 'row',
            FWVal: 'wrap',
            AIList: ['center','flex-start','flex-end','baseline','stretch'],
            ASList: ['center','flex-start','flex-end','baseline','stretch'],
            JAList: ['center','flex-start','flex-end','space-between','space-around'],
            FDList: ['row', 'row-reverse', 'column', 'column-reverse'],
            FWList: ['nowrap', 'wrap', 'wrap-reverse'],
            mode: 'noedit',
            editMode: function() {
                if(this.mode === 'noedit'){
                    this.mode = 'edit'
                }
                else this.mode = 'noedit'
            }
        }
    }
})();
