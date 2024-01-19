
 
// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.
 
// * Allow a user to enter an event when they click a timeblock

// * Save the event in local storage when the save button is clicked in that timeblock.

// * Persist events between refreshes of a page



// reference the whole task (time and textarea)
var timeBlockEl = document.querySelector('.container');

// Display the current day at the top of the calender when a user opens the planner:
var today = dayjs().format("dddd, DD MMMM YYYY")
$("#currentDay").text(today); 


// * Present timeblocks for standard business hours when the user scrolls down.

//Create Event Listener for 'Save' Button:
$('.saveBtn').on('click', function () {
    // get nearby values of the description in jQuery
    var textValue = $(this).siblings('.description').val();
    // get the id attribute of the parent div element
    var timeKey = $(this).parent().attr('id');
  
    // save in local storage
  localStorage.setItem(timeKey, textValue);
});

// Get item from local storage if any
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$('#hour17 .description').val(localStorage.getItem('hour17'));



