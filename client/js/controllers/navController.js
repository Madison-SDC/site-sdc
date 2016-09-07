angular.module('sdc')

.controller('navController', function($scope) {
  $scope.goTo = function(location) {
    window.location = location;
  };
});
