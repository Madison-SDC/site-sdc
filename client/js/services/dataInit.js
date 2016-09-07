angular.module('sdc')

.factory('dataInit', function dataInit(){
    var counter = 0;
    var data = [];

    data.push({month: "September", days: 30, blankDays: 4});
    data.push({month: "October", days: 31, blankDays: 6});
    data.push({month: "November", days: 30, blankDays: 2});
    data.push({month: "December", days: 31, blankDays: 4});

    data.getMonth = function(currMonth){
        return data[currMonth].month;
    }

    data.getDays = function(currMonth){
        return data[currMonth].days;
    }

    data.getblankDays = function(currMonth){
        return data[currMonth].blankDays;
    }

    data.getCounter = function(){
        return counter;
    }

    data.updateCounter = function(){
        counter++;
    }

    data.resetCounter = function(){
        counter = 0;
    }
    return data;
});
