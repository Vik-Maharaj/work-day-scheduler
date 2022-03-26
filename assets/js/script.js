var saveBtn = $(".saveBtn");
var time = moment();


$("#currentDay").text(time.format("dddd, MMMM Do, YYYY"));
var now = new Date().getHours();
console.log(now);



function textAreaColor() {
    var now = time.hours();
   $('.schedule').each(function () {
      var scheduleTime = parseInt($(this).attr("id"));
  
      if (scheduleTime > now) {
        $(this).addClass("future");
      } else if (scheduleTime === now) {
        $(this).addClass("present");
      } else {
        $(this).addClass("past");
      }
    });
  }
  
  textAreaColor();


  $(".saveBtn").click(function () { 
    // console.log(this);
    var text = $(this).siblings(".schedule").val();
    var time = $(this).parent().attr("id");
    // console.log(text, time);
    localStorage.setItem(time, text);
    console.log(text);
});

$("#9 .schedule").val(localStorage.getItem("9"));
$("#10 .schedule").val(localStorage.getItem("10"));
$("#11 .schedule").val(localStorage.getItem("11"));
$("12 .schedule").val(localStorage.getItem("12"));
$("#13 .schedule").val(localStorage.getItem("13"));
$("#14 .schedule").val(localStorage.getItem("14"));
$("#15 .schedule").val(localStorage.getItem("15"));
$("#16 .schedule").val(localStorage.getItem("16"));
$("#17 .schedule").val(localStorage.getItem("17"));