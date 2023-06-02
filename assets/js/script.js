$(document).ready(function() {
  var currentDate = dayjs().format("dddd, MMMM D, YYYY");
  var currentHour = new Date().getHours();
  var timeBlock = document.getElementById('hour-9');
  var timeBlockHour = parseInt(timeBlock.querySelector('.hour').textContent);

  $("#currentDay").text(currentDate);
  
  $(".save-btn").on("click", function() {
    var timeBlockId = $(this).parent().attr("id");
    var userInput = $(this).siblings(".description").val();
    localStorage.setItem(timeBlockId, userInput);
  });

  $(".time-block").each(function() {
    var timeBlockId = $(this).attr("id");
    var currentHour = dayjs().hour();
    var blockHour = parseInt(timeBlockId.split("-")[1]);

    if (blockHour < currentHour) {
      $(this).addClass("past");
          } else if (blockHour === currentHour) {
        $(this).addClass("present");
    } else {
      $(this).addClass("future");
          }
    });

  $(".time-block").each(function() {
    var timeBlockId = $(this).attr("id");
    var userInput = localStorage.getItem(timeBlockId);

    if (userInput) {
      $(this).find(".description").val(userInput);
    }
  });
});
