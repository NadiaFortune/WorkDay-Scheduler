// reference the whole task (time and textarea)
var timeBlockEl = document.querySelector('.container')

// Display the current day at the top of the calender when a user opens the planner:
var today = dayjs().format("dddd, DD MMMM YYYY, H:mm")
$("#currentDay").text(today)

// Allow a user to enter an event when they click a timeblock
//Create Event Listener for 'Save' Button:
$('.saveBtn').on('click', function () {
    // get nearby values of the description in jQuery
    var textValue = $(this).siblings('.description').val()
    // get the id attribute of the parent div element
    var timeKey = $(this).parent().attr('id')
  

// * Save the event in local storage when the save button is clicked in that timeblock and // * Persist events between refreshes of a page
  localStorage.setItem(timeKey, textValue)
})

$("#hour9 .description").val(localStorage.getItem("hour9"))
$("#hour10 .description").val(localStorage.getItem("hour10"))
$("#hour11 .description").val(localStorage.getItem("hour11"))
$("#hour12 .description").val(localStorage.getItem("hour12"))
$("#hour13 .description").val(localStorage.getItem("hour13"))
$("#hour14 .description").val(localStorage.getItem("hour14"))
$("#hour15 .description").val(localStorage.getItem("hour15"))
$("#hour16 .description").val(localStorage.getItem("hour16"))
$('#hour17 .description').val(localStorage.getItem('hour17'))

// Color-code each timeblock based on past, present, and future when the timeblock is viewed.
function auditTask() {
  // get current number of hours
  var now = dayjs().hour()

  // loop over each time block
  $(".time-block").each(function () {
    var timeId = parseInt($(this).attr("id").split("hour")[1])

    console.log(timeId, now)
    // if the time Id attribute is before the current hour, add the past class
    if (timeId < now) {
      $(this).addClass("past")
    } // if the time Id attribute is equal to the current hour, remove the past and future classes and add the present class
    else if (timeId === now) {
      $(this).removeClass("past")
      $(this).removeClass("future")
      $(this).addClass("present")
    } // If the time Id attribute is greater than the current time, remove the past and present classes and add the future class
    else {
      $(this).removeClass("past")
      $(this).removeClass("present")
      $(this).addClass("future")
    }
  })
}
// Call the audit task function
auditTask()

// Use setTimeout to update the time every minute (1000ms * 60s)
setTimeout(function () {
  // clear the current URL
  location = "" // location references the current URL
}, 1000 * 60)



