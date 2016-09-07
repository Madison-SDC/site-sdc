angular.module('sdc')

/* days of the week -- works */
.controller('daysOfWeek', function($scope){
    this.getDays = getDayOfWeek({
        day: ""
    });
    function getDayOfWeek(dayTmpl){
        var it, result = [ ], days = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday", "Friday", "Saturday"];
        for(var i=0; i<7; i++){
            it = angular.extend({},dayTmpl);
            it.day = days[i];
            result.push(it);
        }
        return result;
    }
});
