angular.module('sdc')

.controller("mainController", function($scope, $http) {
    $scope.welcome = "Angular test.";
});


//Scrolling code below
// you can't do jquery and bootstrap
/*
$('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});
*/
