angular.module('sdcServices')

.factory('dataInit', function() {

    var data = {};

    data.counter = 0;

    data.getMonths = function() {
      return [
        {month: "September", days: 30, blankDays: 4},
        {month: "October", days: 31, blankDays: 6},
        {month: "November", days: 30, blankDays: 2},
        {month: "December", days: 31, blankDays: 4}
      ];
    };

    data.getMonth = function(currMonth) { return data.getMonths()[currMonth].month; };
    data.getDays = function(currMonth) { return data.getMonths()[currMonth].days; };
    data.getblankDays = function(currMonth) { return data.getMonths()[currMonth].blankDays; };
    data.updateCounter = function() { data.counter++; };
    data.resetCounter = function() { data.counter = 0; };
    return data;
});
