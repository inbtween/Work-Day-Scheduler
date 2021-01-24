// console.log("hey this is working");
// // $(document).ready(function () {}
// // STARTING DATA------------------
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

// // time blocks for standard business hours, 9AM - 5PM
// //  a daily planner to create a schedule
var schedule = ["", "", "", "", "", "", "", "", ""];
// // time blocks for that day
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

// TODO: What is the purpose of the following function?
function init() {
  // TODO: What is the purpose of the following line of code?
  var saveDescription = JSON.parse(localStorage.getItem("description"));
  // TODO: Describe the functionality of the following `if` statement.
  if (saveDescription !== null) {
    description = saveDescription;
  }
  // TODO: Describe the purpose of the following line of code.
  renderDescription();
}

// // save button will store appt in local storage
// add event listener
var textArea = document.querySelector(".description");
var saveButton = document.querySelector(".saveBtn");

var addDescription = localStorage.getItem("save");

textArea.textContent = addDescription;

saveButton.addEventListener("click", function () {
  var schedule = textArea.textContent;
  console.log(textArea.textContent);
  localStorage.setItem("save", schedule);
});
// ******************
// $("saveBtn").on("click", function () {
//   var buttonValue = $(".description").val();
//   var schedule = $(`#saveBtn-${buttonValue}`).val();
//   schedule.push(textCurrent);
//   //  save to local storage
//   localStorage.setItem("Save", schedule);
//   // save textarea.val to the save button
// });

// ************************
// localStorage.setItem("Save", JSON.stringify(timeBlock));
// var getEvent = JSON.parse(localStorage);
// for (var i = 0; i < 9; i++) {
//   var divTag = $("class= "row time-block"")
// }

//   // THEN the text for that event is saved in local storage
//   if (localStorage.getItem("textAreaValue"))
//     descriptions = JSON.parse(localStorage.getItem("textAreaValue"));
// // THEN the saved events persist
// setInterval(function () {
//   $("currentDay")
// // }

// // USER INTERACTIONS--------------
// // WHEN I click into a time block
// // THEN I can enter an event
// // WHEN I click the save button for that time block

// // WHEN I refresh the page
