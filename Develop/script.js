// STARTING DATA------------------
// time blocks for standard business hours, 9AM - 5PM
//  a daily planner to create a schedule
var schedule = ["", "", "", "", "", "", "", "", ""];
// time blocks for that day
var timeWindow = [9, 10, 11, 12, 1, 2, 3, 4, 5];
/// THEN each time block is color-coded to indicate whether it is in the past, present, or future
var timeFuture = "future";
// FUNCTIONS-----------------

// save button will store appt in local storage
// add event listener
$("button").on("click"),
  function () {
    localStorage.setItem("timeBlocks", JSON.stringify(timeBlocks));
    var getEvent = JSON.parse(localStorage);
  };

// USER INTERACTIONS--------------
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
//   };
//   function $(".time-block").each(function() {
//         var getid = $(this).attr("id");

//         var event = localStorage.getItem(getid);

//         if(event !== null){
//             $(this).children(".event").val(event);
//         }
//     })

// Use .setItem() to store object in storage and JSON.stringify to convert it as a string

//   $(".time-blcok").each(function() {
//     var getid = $(this).attr("id");

//     var event = localStorage.getItem(getid);

//     if(event !== null){
//         $(this).children(".event").val(event);
//     }
// })

//   function renderLastGrade() {
//     // Use JSON.parse() to convert text to JavaScript object
//     var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
//     // Check if data is returned, if not exit out of the function
//     if (lastGrade !== null) {
//     document.getElementById("saved-name").innerHTML = lastGrade.student;
//     document.getElementById("saved-grade").innerHTML = lastGrade.grade;
//     document.getElementById("saved-comment").innerHTML = lastGrade.comment;
//     } else {
//       return;
//     }
//   }
// timeblock limited to time displayed
// timeblock changes based on current time
// past color
// current time
// future

// go through the time blocks, for loop or for each.

// Display current data in header
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
