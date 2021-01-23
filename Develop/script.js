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
var timeFuture = "future";
var timeBlock = $(".container");
// // FUNCTIONS-----------------

// // save button will store appt in local storage
// // add event listener
// $("button").on("click", function () {
//   var schedule = $(".description").val();
//   console.log(schedule);
//   localStorage.setItem("", JSON.stringify(timeBlocks));
//   var getEvent = JSON.parse(localStorage);
// });

// for (var i = 0; i < 9; i++) {
//   var divTag = $('<div class= "row time-block">');
//   divTag.html(`<class="hour col-md-1">${timeWindow[i]}:00</div>
//   <textarea class="description col-md-10 ${timeFuture}" id="saveBtn-${i}"></textarea>
//   <button class="col-md-1 btn saveBtn" value="${i}">Save</button>`);
//   timeBlock.append(divTag);
// }

// // USER INTERACTIONS--------------
// // WHEN I click into a time block
// // THEN I can enter an event
// // WHEN I click the save button for that time block
// // THEN the text for that event is saved in local storage
// // WHEN I refresh the page
// // THEN the saved events persist
