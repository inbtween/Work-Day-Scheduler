// // STARTING DATA------------------
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

// // time blocks for standard business hours, 9AM - 5PM in  a daily planner to create a schedule
var timeWindow = [9, 10, 11, 12, 1, 2, 3, 4, 5];
// /// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// // FUNCTIONS-----------------

console.log(moment().format("h"));
// if time the current time = now, then set to present, else, future, all else past

$(".description").each(function () {
  // declare moment
  var presentHour = moment().hours();
  console.log(presentHour);
  var areaHour = parseInt($(this).attr("id"));
  console.log(areaHour);
  // if
  if (areaHour < presentHour) {
    // if statement after the argument areaHour is < the presentHour
    $(this).addClass("past");
  } else if (areaHour === presentHour) {
    $(this).addClass("present");
    $(this).removeClass("past");
  } else {
    $(this).addClass("future");
    $(this).removeClass("past");
    $(this).removeClass("present");
  }
});

// // Store in local storage

var scheduleStorage = "schedule";
function loadSchedule() {
  schedule = JSON.parse(localStorage.getItem(scheduleStorage));
  console.log("This is my scheduel: " + schedule);
  if (schedule != null) {
    schedule.forEach((schedule, index) => {
      var text = schedule.reminders;
      $(`#${index}`).val(text);
      console.log(index);
    });
  }
}
var saveSchedules = (ev) => {
  var schedule = [
    { reminders: $("#0").val() },
    { reminders: $("#1").val() },
    { reminders: $("#2").val() },
    { reminders: $("#3").val() },
    { reminders: $("#4").val() },
    { reminders: $("#5").val() },
    { reminders: $("#6").val() },
    { reminders: $("#7").val() },
    { reminders: $("#8").val() },
  ];
  localStorage.setItem(scheduleStorage, JSON.stringify(schedule));
};

// // // // add event listener
// After I click the save button for that time block WHEN I refresh the page, the information is still there
$(document).ready(() => {
  var saveButton = [...document.getElementsByTagName("button")];
  saveButton.forEach((saveButton) => {
    saveButton.addEventListener("click", saveSchedules);
  });
  loadSchedule();
});
