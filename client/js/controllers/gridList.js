angular.module('sdcControllers')

/* dynamic tile generation for calendar days -- WIP */
.controller('gridListCtrl', function($scope, dataInit, calendarItems) {
    var days = dataInit.getDays(dataInit.getCounter());
    var blankDays = dataInit.getblankDays(dataInit.getCounter());
    var month = dataInit.getCounter();
    this.tiles = buildGridModel({
        background: "",
        footer: "",
        info: ""
    });
    function buildGridModel(tileTmpl){
        var it,results = [ ];
        for (var j=0; j<blankDays; j++) {
            it = angular.extend({},tileTmpl);
            it.title = "";
            it.span  = { row : 1, col : 1 };
            it.background = "blankClass";
            it.footer = "blankClass";
            results.push(it);
        }

        for (var j=0; j<days; j++) {
            it = angular.extend({},tileTmpl);
            it.title = (j+1);
            it.span  = { row : 1, col : 1 };
            it.background = "tileBackground";
            it.info = calendarItems.getInfo(month, j+1);
            results.push(it);
        }
        dataInit.updateCounter();
        return results;
    }
});
