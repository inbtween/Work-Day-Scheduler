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
var timeBlock = document.getElementById(container)
// // FUNCTIONS-----------------

console.log(moment().format("h"));
// if time the current time = now, then set to present, else, future, all else past
// FOR LOOP
function displayTimeBlocks() {
  for (var i = 0; i < 9; i++) {
    if (Number(moment().format("h")) === timeWindow[0] {
      timeFuture = "present";
    } else if (Number(moment().format("h")) > timeWindow[0]) {
      timeFuture = "past";  
    } else {
      timeFuture ="future";
    }
   }
   var timeBlock= document.getElementById(timeBlock);

}

 
//   // THEN the text for that event is saved in local storage
//   if (localStorage.getItem("textAreaValue"))
//     descriptions = JSON.parse(localStorage.getItem("textAreaValue"));
// // THEN the saved events persist
setInterval(function () {
  $("currentDay")
// }
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
  var schedule= $(`#saveBtn-${buttonValue}`).val();
  schedule.push(textCurrent);
//  save to local storage
  localStorage.setItem("Save", schedule);
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