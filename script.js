// Countdown Target: Christmas Day
const christmasDate = new Date('December 25, 2024 00:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = christmasDate - now;

  // Calculate time units
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Update the countdown display
  document.getElementById('days').textContent = days.toString().padStart(2, '0');
  document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

  // Check if countdown is over
  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    document.getElementById('countdown').innerHTML = '🎉 Merry Christmas! 🎁';
  }
}

// Update every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initialize countdown
updateCountdown();
