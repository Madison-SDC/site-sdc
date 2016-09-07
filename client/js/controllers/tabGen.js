angular.module('sdc')

.controller('tabGen', function($scope, dataInit) {
    this.tabs = getTabsToGenerate({
        month:""
    });
    function getTabsToGenerate(tabs) {
        var it, result = [];
        for (var i = 0; i < 4; i++) {
            it = angular.extend({}, tabs);
            month = dataInit.getMonth(dataInit.getCounter());
            it.month = month;
            result.push(it);
            dataInit.updateCounter();
        }
        dataInit.resetCounter();
        return result;
    }
});
