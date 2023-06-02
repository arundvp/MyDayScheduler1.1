$(document).ready(function() {
  // Display the current date in the header
  var currentDate = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").text(currentDate);

  // Add a listener for click events on the save buttons
  $(".save-btn").on("click", function() {
    var timeBlockId = $(this).parent().attr("id");
    var userInput = $(this).siblings(".description").val();
    localStorage.setItem(timeBlockId, userInput);
  });

  // Apply the past, present, or future class to each time block
  $(".time-block").each(function() {
    var timeBlockId = $(this).attr("id");
    var currentHour = dayjs().hour();
    var blockHour = parseInt(timeBlockId.split("-")[1]);

    if (blockHour < currentHour) {
      $(this).removeClass("present future").addClass("past");
    } else if (blockHour === currentHour) {
      $(this).removeClass("past future").addClass("present");
    } else {
      $(this).removeClass("past present").addClass("future");
    }
  });

  // Get any user input saved in localStorage and set the corresponding textarea values
  $(".time-block").each(function() {
    var timeBlockId = $(this).attr("id");
    var userInput = localStorage.getItem(timeBlockId);

    if (userInput) {
      $(this).find(".description").val(userInput);
    }
  });
});
