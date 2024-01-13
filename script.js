// Add scripts.

// *** COUNTDOWN TIMER ***

// Datum instellen van het event -> XX/XX/XX
var eventDate = new Date("Mar 16, 2024 23:59:59").getTime();

// Update the count down every 1 second.
var x = setInterval(function() {
  // Set current time.
  var currentTime = new Date().getTime();
    
  // Find the distance between now and the count down date.
  var distance = eventDate - currentTime;
    
  // Time calculations for days, hours, minutes and seconds.
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo-days"
  document.getElementById("countdown-days").innerHTML = days;
    // Output the result in an element with id="demo-hours"
  document.getElementById("countdown-hours").innerHTML = hours;
    // Output the result in an element with id="demo-minutes"
  document.getElementById("countdown-minutes").innerHTML = minutes;
    // Output the result in an element with id="demo-seconds"
  document.getElementById("countdown-seconds").innerHTML = seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-text").innerHTML = "Let's Run";
  }
}, 1000);

// EINDE TIMER