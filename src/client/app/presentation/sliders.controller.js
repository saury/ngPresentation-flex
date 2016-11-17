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
                else if(order === 1) {this.quaters.pop(); return}
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
            flexOrder: 0,
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

        vm.changeFlex = {
            FSFB1: {
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: 200
            },
            FSFB2: {
                flexGrow: 1,
                flexShrink: 2,
                flexBasis: 300
            },
            FSFB3: {
                flexGrow: 1,
                flexShrink: 3,
                flexBasis: 500
            },
            colWidth: []
        }

        vm.changeFlexGrow = {
            FSFB1: {
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: 100
            },
            FSFB2: {
                flexGrow: 1,
                flexShrink: 2,
                flexBasis: 100
            },
            FSFB3: {
                flexGrow: 1,
                flexShrink: 3,
                flexBasis: 100
            },
            colWidth: []
        }
    }
})();
