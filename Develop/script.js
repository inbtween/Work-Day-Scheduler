// time blocks
var timeBlocks = [
  { hour: "9AM", appt: inputAppt.value.trim() },
  { hour: "10AM", appt: " " },
  { hour: "11 AM", appt: " " },
  { hour: "12PM", appt: " " },
  { hour: "1PM", appt: " " },
  { hour: "2PM", appt: " " },
  { hour: "3PM", appt: " " },
  { hour: "4PM", appt: " " },
  { hour: "5PM", appt: " " },
];
// save button will store appt in local storage
// add event listener
$("button").on("click"),
  function () {
    localStorage.setItem("timeBlocks", JSON.stringify(timeBlocks));
    var getEvent = JSON.parse(localStorage);
  };
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
