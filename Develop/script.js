//display current date on top of page
$(document).ready(function() {
    $("#currentDay").text(moment().format('dddd MMM Do, YYYY'));
});

//time track - column change color depending on time
function timeTracker() {

}

//add and save task using event listener
$(document).ready(function() {
    $(".saveBtn").on("click", function() {
        //save time and text
        var time=$(this).parent().attr("id");
        var text=$(this).siblings(".description").val();

        console.log(time, text);

        //save to localStorage
        localStorage.setItem(time, text);
    })
})