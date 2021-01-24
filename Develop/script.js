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
// var timeFuture = "future";
// var textAreaEl = document.querySelector("#textarea");
// // FUNCTIONS-----------------

console.log(moment().format("h"));
// if time the current time = now, then set to present, else, future, all else past
// FOR LOOP
// Do we add an eventlistener("click", function(){
//   if (Number(moment().format("h")) === timeWindow[0]) {
//     timeFuture === ".present";) {
//       else Number(moment().format("h")) === timeWindow[1] = ".future"
//     }
// }to the time? If time is 9am

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

// function displayTimeBlocks() {
//   for (var i = 0; i < 9; i++) {
//     if (Number(moment().format("h")) === timeWindow[0]) {
//       timeFuture === "present";
//     } else if (Number(moment().format("h")) > timeWindow[0]) {
//       timeFuture = "past";
//     } else {
//       timeFuture ="future";
//     }
//    }
//    var timeBlock= document.getElementById(timeBlock);

//  Timewindow when time is now/present, then style is ".present" and when it's furture it's ".future" and past it's ".past"

//   // THEN the text for that event is saved in local storage
//   if (localStorage.getItem("textAreaValue"))
//     descriptions = JSON.parse(localStorage.getItem("textAreaValue"));
// // THEN the saved events persist
// setInterval(function () {
//   $("currentDay")
// // }
// for (var i = 0; i < 9; i++) {
//   var divTag = $('<div class= "row time-block">');
//   divTag.html(`<class="hour col-md-1">${timeWindow[i]}:00</div>
//     <textarea class="description col-md-10 ${timeFuture}" id="saveBtn-${i}"></textarea>
//     <button class="col-md-1 btn saveBtn" value="${i}">Save</button>`);
//   timeBlock.append(divTag);
// }

// // save button will store appt in local storage
// add event listener
$("saveBtn").on("click", function () {
  var buttonValue = $(".description").val();
  var schedule = $(`#saveBtn-${buttonValue}`).val();
  schedule.push(textCurrent);
  //  save to local storage
  localStorage.setItem("Save", schedule);
  // save textarea.val to the save button
});
// localStorage.setItem("Save", JSON.stringify(timeBlock));
// var getEvent = JSON.parse(localStorage);
// for (var i = 0; i < 9; i++) {
//   var divTag = $("class= "row time-block"")
// }

// // USER INTERACTIONS--------------
// // WHEN I click into a time block
// // THEN I can enter an event
// // WHEN I click the save button for that time block

// // WHEN I refresh the page
