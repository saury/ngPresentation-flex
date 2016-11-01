(function() {
    'use strict';
    angular
        .module('app.splash')
        .controller('SplashCtrl', SplashCtrl);

    /* @ngInject */
    function SplashCtrl($scope, $timeout) {
        var vm = this;
        var timer;
        // class name to hide the splash page
        vm.dropDown = '';
        vm.isLoading = true;
        vm.hide = function () {
        	vm.dropDown = 'drop-down';
        }
        console.warn('too young too simple 1');
        $timeout(function() {
            vm.isLoading = false;
            $scope.$digest();
        }, 2000, false);
        $scope.$on('$destroy', function(e) {
            $timeout.cancel(timer);
        })
    }
})();
