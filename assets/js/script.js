// displays the date and time at the top of the page
var currentDay = moment().format("dddd, MMMM Do, YYYY, h:mm a");
$("#currentDay").append(currentDay);
    


// checks the current time against the time black and changes the color of the block
function changeColor() {
    var currentTime = moment().hours();

    $(".time-block").each(function () {
        var scheduleTime = parseInt($(this).attr("id"));

        if (scheduleTime < currentTime) {
                $(this).addClass("past");
        } else if (scheduleTime === currentTime) {
                $(this).removeClass("past");
                $(this).addClass("present");
        } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
        }
    });

}

changeColor();



// set the user input into local storage
$(".saveBtn").click(function () { 
    var scheduleTime = $(this).parent().attr("id");
    var scheduleText = $(this).siblings(".schedule").val();
    localStorage.setItem(scheduleTime, scheduleText);
});



// retrieves and displays the user input from local stoage 
$("#9 .schedule").val(localStorage.getItem("9"));
$("#10 .schedule").val(localStorage.getItem("10"));
$("#11 .schedule").val(localStorage.getItem("11"));
$("#12 .schedule").val(localStorage.getItem("12"));
$("#13 .schedule").val(localStorage.getItem("13"));
$("#14 .schedule").val(localStorage.getItem("14"));
$("#15 .schedule").val(localStorage.getItem("15"));
$("#16 .schedule").val(localStorage.getItem("16"));
$("#17 .schedule").val(localStorage.getItem("17"));


