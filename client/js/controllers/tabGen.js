angular.module('sdcControllers')

.controller('tabGen', function($scope, dataInit) {

    dataInit.counter = 0;

    console.log("tabGen loaded: " + dataInit.counter);

    function getTabsToGenerate(tabs) {
        var it, result = [];
        for (var i = 0; i < 4; i++) {
            it = angular.extend({}, tabs);
            month = dataInit.getMonth(dataInit.counter);
            it.month = month;
            result.push(it);
            dataInit.counter++;
        }
        dataInit.resetCounter();
        return result;
    }
    this.tabs = getTabsToGenerate({
        month:""
    });

});
