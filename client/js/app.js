angular.module('sdcServices', []);
angular.module('sdcControllers', ['sdcServices']);

angular.module('sdc', [
  'ngRoute',
  'ngMaterial',
  'ngAnimate',
  'ngAria',
  'directives',
  'sdcControllers'
])

.config(function($routeProvider, $mdThemingProvider) {

  $mdThemingProvider.theme('default')
      .primaryPalette('green')
      .accentPalette('grey');

  $routeProvider
  .when('/', { templateUrl: 'views/home.html' })
  .when('/calender', { 
    templateUrl: 'views/calender.html',
    controller: 'ScheduleCtrl'
  })
  .when('/projects', { templateUrl: 'views/projects.html' })
  .otherwise({ redirectTo: '/' });

});