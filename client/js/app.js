angular.module('sdc', [
  'ngRoute',
  'ngMaterial',
  'ngAnimate',
  'ngAria',
  'directives'
])

.config(function($routeProvider, $locationProvider, $mdThemingProvider) {

  $mdThemingProvider.theme('default')
      .primaryPalette('green')
      .accentPalette('grey');

  $routeProvider
  .when('/', { redirectTo: '/calender' })
  .when('/calender', { templateUrl: 'views/calender.html' })
  .when('/projects', { templateUrl: 'views/projects.html' })
  .otherwise({ redirectTo: '/' });
  
});
