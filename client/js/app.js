angular.module('sdc', [
  'ngRoute',
  'ui.bootstrap',
  'directives'
])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'templates/main.html',
    controller: 'mainController',                     // controllers/main.js
    controllerAs: 'main'
  });
});
