let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

// Function to format time as hh:mm:ss
function formatTime(time) {
  let hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((time / (1000 * 60)) % 60);
  let seconds = Math.floor((time / 1000) % 60);

  return (
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds)
  );
}

// Update the displayed time
function updateTime() {
  elapsedTime = Date.now() - startTime;
  document.getElementById("time").innerHTML = formatTime(elapsedTime);
}

// Start the Stopwatch
document.getElementById("start").addEventListener("click", function () {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 100); // Update every 100 milliseconds
    isRunning = true;

    // Enable Stop and Reset buttons
    document.getElementById("stop").disabled = false;
    document.getElementById("reset").disabled = false;

    // Disable Start button
    document.getElementById("start").disabled = true;
  }
});

// Stop the Stopwatch
document.getElementById("stop").addEventListener("click", function () {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;

    // Enable Start button
    document.getElementById("start").disabled = false;

    // Disable Stop button
    document.getElementById("stop").disabled = true;
  }
});

// Reset the Stopwatch
document.getElementById("reset").addEventListener("click", function () {
  clearInterval(timerInterval);
  elapsedTime = 0;
  document.getElementById("time").innerHTML = "00:00:00";
  isRunning = false;

  // Disable Stop and Reset buttons
  document.getElementById("stop").disabled = true;
  document.getElementById("reset").disabled = true;

  // Enable Start button
  document.getElementById("start").disabled = false;
});
