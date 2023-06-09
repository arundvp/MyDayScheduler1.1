$(document).ready(function() {
  var currentDate = dayjs().format("dddd, MMMM D, YYYY");
  var currentHour = parseInt(dayjs().format("HH"));

  $("#currentDay").text(currentDate);

  $(".saveBtn").on("click", function() {
    var timeBlockId = $(this).parent().attr("id");
    var userInput = $(this).siblings(".description").val();
    localStorage.setItem(timeBlockId, userInput);
  });

  $(".time-block").each(function() {
    var timeBlockId = $(this).attr("id");
    var blockHour = parseInt(timeBlockId.split("-")[1]);
    console.log(blockHour);
    console.log(currentHour);
    
    if (blockHour < currentHour) {
      $(this).removeClass("present future").addClass("past");
    } else if (blockHour === currentHour) {
      $(this).removeClass("past future").addClass("present");
    } else {
      $(this).removeClass("past present").addClass("future");
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
