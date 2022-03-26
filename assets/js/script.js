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