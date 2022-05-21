var timerEl = document.getElementById ('countdown')

// Timer that counts down from 75
function countdown() {
  var timeLeft = 75;}

  var timeInterval = setInterval(function () {
if (timeleft > 1){

  timerEl.textContent=timeLeft + 'seconds remaining';

  timeLeft --;
} else if (timeLeft === 1){

  timerEl.textContent = '';
  clearInterval(timeInterval);
  displayMessage();
}
  }, 1000);


  
