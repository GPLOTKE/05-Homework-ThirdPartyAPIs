var currentDayEl = $('#currentDay');

function displayTime() {
    var rightNowEl = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentDayEl.text(rightNowEl);
}

setInterval(displayTime, 1000);


// need to change the timeblock area color based on past, present, or future time

// need current time variable
// need variable
// for rows classes
// for loop through rows classes
// need i ID as a string
// get el by ID
// if/else statements for past / present / future

// var currentHourEl = rightNowEl.format('HH');


// var textInputEl = $(".col");
// var saveBtnEl = $('.saveBtn');

// function displayEvent() {
//     var text = localStorage.getItem("text");
// }

// saveBtnEl.addEventListener("click", function(event) {
//             event.preventDefault();