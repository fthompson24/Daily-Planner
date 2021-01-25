//display current date on top of page
var currentDate = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").html(currentDate);

//add and save task using event listener
$(document).ready(function() {
    $(".saveBtn").on("click", function() {
        //save time and text
        var time=$(this).parent().attr("id");
        var text=$(this).siblings(".description").val();

        //console.log(time, text);

        //save to localStorage
        localStorage.setItem(time, text);
    })

    //time track - column change color depending on time
    function timeTracker() {
        //get current time
        var currentTime = moment().hour();
            //console.log(currentTime);
        
        //loop over time block rows
        $(".time-block").each(function () {
            dayHour = parseInt($(this).attr("id"));
            console.log(dayHour);
            //checks time, adds class to change background color if neccessary
            if (dayHour < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (dayHour > currentTime) {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
            else {
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");
            }
        })
    }


    //load saved tasks from localStorage
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));


timeTracker();
})