angular.module('sdc', [
  'ngRoute',
  'ngMaterial',
  'ngAnimate',
  'ngAria',
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

angular.module('sdcApp', ['ngMaterial'])
    .config(function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
          .primaryPalette('black')
          .accentPalette('green');
    });