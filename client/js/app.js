angular.module('sdc', [
  'ngRoute',
  'ngMaterial',
  'ngAnimate',
  'ngAria',
  'directives'
])

.config(function($routeProvider, $locationProvider, $mdThemingProvider) {

  $mdThemingProvider.theme('default')
      .primaryPalette('grey')
      .accentPalette('green');

  $routeProvider
  .when('/', {
    templateUrl: 'templates/main.html',
    controller: 'mainController',                     // controllers/main.js
    controllerAs: 'main'
  });
});
