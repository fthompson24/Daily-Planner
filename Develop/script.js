//display current date on top of page
$(document).ready(function() {
    $("#currentDay").text(moment().format('dddd MMM Do, YYYY'));
});

