angular.module('sdc', [
  'ngRoute',
  'ui.bootstrap',
  'ngAnimate'
])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'modules/main/templates/main.html',
    //controller: 'mainController',
    //controllerAs: 'main'
  });
});
