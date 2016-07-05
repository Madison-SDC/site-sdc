angular.module('sdc', [
  'ngRoute',
  'ui.bootstrap',
  'ngAnimate'
])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'templates/main.html',
    controller: 'mainController',                     // controllers/main.js
    controllerAs: 'main'
  });
});



