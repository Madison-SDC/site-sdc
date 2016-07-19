angular.module('sdc')

.controller("mainController", function($scope, $http) {
});


(function() {
    'use strict';
    angular.module('navBarDemoBasicUsage', ['ngMaterial'])
        .controller('AppCtrl', AppCtrl);
    function AppCtrl($scope) {
        $scope.currentNavItem = 'page1';
    }
})();


