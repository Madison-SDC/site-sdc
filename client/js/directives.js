angular.module('directives', [])

// Top Navbar
.directive('topnav', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/topnav.html',
    controller: 'navController'
  }
});
