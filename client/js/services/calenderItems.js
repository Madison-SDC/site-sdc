angular.module('sdc').factory('calendarItems', function calendarItems(){
    var data = [];

    data.push({month: "September", 6: "classes begin", 14: "student org fair", 15: "student org fair",
    17:"kickoff meeting CS2112 @ 6pm", 24: "club meeting CS2112 @ 6pm"});
    data.push({month: "October", 1: "meeting ft. Capital One", 8: "club meeting \n CS2112 @ 6pm",
    15: "club meeting\n CS2112 @ 6pm ", 22:"club meeting \n CS2112 @ 6pm", 29: "club meeting \n CS2112 @ TBA"});
    data.push({month: "November", 5: "club meeting\n CS2112 @ 6pm ", 12: "club meeting\n CS2112 @ 6pm ",
    19: "club meeting\n CS2112 @ 6pm ", 26: "no meeting - Thanksgiving"});
    data.push({month: "December", 3: "club meeting\n CS2112 @ 6pm", 10: "final club meeting :(\n CS2112 @ 6pm",
    });

    data.getInfo = function(month, day){
        if(data[month].hasOwnProperty(day.toString()) == false){
            return "";
        }
        else return data[month][day];
    }
    return data;
});
