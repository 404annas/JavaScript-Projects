// Initialize three variables to keep track of time (in seconds, minutes, and hours)
let [seconds, minutes, hours] = [0, 0, 0];

// Select the HTML element with the id of "timer"
let displayTime = document.getElementById("timer");

// Initialize timer variable to null
let timer = null;

// Define the stopwatch function
function stopwatch() {
  // Increment the value of seconds
  seconds++;

  // If seconds is equal to 60, reset seconds to 0 and increment minutes
  if (seconds === 60) {
    seconds = 0; // Reset seconds to 0
    minutes++; // Increment minutes

    // If minutes is equal to 60, reset minutes to 0 and increment hours
    if (minutes === 60) {
      minutes = 0; // Reset minutes to 0
      hours++; // Increment hours
    }
  }

  // Add leading zero to hours, minutes, and seconds if they are less than 10
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  // Display time on page
  displayTime.innerHTML = h + ":" + m + ":" + s;
}

// Define the watchStart function
function watchStart() {
  if (timer !== null) {
    // If timer is already running
    clearInterval(timer); // Stop the timer
  }
  // If timer is not running
  // Call the stopwatch function every 1000 milliseconds (1 second)
  timer = setInterval(stopwatch, 1000);
}

function watchStop() {
  clearInterval(timer);
}

function watchReset() {
  // Stop the timer
  clearInterval(timer);
  [
    // Reset time variables and display to 00:00:00
    seconds,
    minutes,
    hours,
  ] = [0, 0, 0];
  displayTime.innerHTML = "00:00:00";
}

// For Practice -->
/*
let seconds = 0;
let minutes = 0;
let hours = 0;
let displayTime = document.getElementById("timer");
let timer = null;

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  let displayHours = hours < 10 ? "0" + hours : hours;
  let displayMinutes = minutes < 10 ? "0" + minutes : minutes;
  let displaySeconds = seconds < 10 ? "0" + seconds : seconds;
  displayTime.innerHTML =
    displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

function watchStart() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(() => {
    stopwatch();
  }, 1000);
}

function watchStop() {
  clearInterval(timer);
}

function watchReset() {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  displayTime.innerHTML = "00:00:00";
}
*/
