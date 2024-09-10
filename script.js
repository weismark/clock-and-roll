// Elements
const startPauseBtn = document.getElementById('start-pause');
const resetBtn = document.getElementById('reset');
const timeDisplay = document.getElementById('time-display');
const sessionInput = document.getElementById('session-length');
const breakInput = document.getElementById('break-length');
const timerLabel = document.getElementById('timer-label');
const breakReminder = document.getElementById('break-reminder');
const themeSlider = document.getElementById('theme-slider');
const soundSlider = document.getElementById('sound');
const soundLabel = document.getElementById('sound-label');
const themeLabel = document.getElementById('theme-label');
const infoIcon = document.getElementById('info-icon');
const infoModal = document.getElementById('info-modal');
const closeModal = document.querySelector('.close');

// Timer state
let isRunning = false;
let isSession = true;
let sessionDuration = sessionInput.value * 60;
let breakDuration = breakInput.value * 60;
let timeRemaining = sessionDuration;
let timerIntervalID = null;
let blinkIntervalID = null;
let originalTitle = document.title;
let soundOn = true;

// Update the display with formatted time
function updateDisplay() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  timeDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${
    seconds < 10 ? '0' : ''
  }${seconds}`;
}

// Start or pause the timer
startPauseBtn.addEventListener('click', () => {
  if (isRunning) {
    clearInterval(timerIntervalID);
    startPauseBtn.textContent = 'Start';
  } else {
    timerIntervalID = setInterval(() => {
      timeRemaining--;

      if (timeRemaining <= 0) {
        if (isSession) {
          timeRemaining = breakDuration;
          timerLabel.textContent = 'Break';
          breakReminder.classList.remove('hidden'); // Show break reminder
          document.title = 'Break Time!'; // Tab title change
          startBlinking(); // Start blinking effect
          playSound(); // Play sound effect
        } else {
          timeRemaining = sessionDuration;
          timerLabel.textContent = 'Session';
          breakReminder.classList.add('hidden'); // Hide break reminder
          document.title = originalTitle; // Restore original title
          stopBlinking(); // Stop blinking effect
        }
        isSession = !isSession;
      }

      updateDisplay();
    }, 1000);
    startPauseBtn.textContent = 'Pause';
  }
  isRunning = !isRunning;
});

// Reset the timer
resetBtn.addEventListener('click', () => {
  clearInterval(timerIntervalID);
  clearInterval(blinkIntervalID); // Clear blinking as well on reset
  isRunning = false;
  isSession = true;
  sessionDuration = sessionInput.value * 60;
  breakDuration = breakInput.value * 60;
  timeRemaining = sessionDuration;
  updateDisplay();
  timerLabel.textContent = 'Session';
  startPauseBtn.textContent = 'Start';
  breakReminder.classList.add('hidden'); // Hide break reminder
  document.title = originalTitle; // Restore original title
  stopBlinking(); // Stop blinking effect
});

// Update the session and break durations
sessionInput.addEventListener('change', () => {
  sessionDuration = sessionInput.value * 60;
  if (isSession) {
    timeRemaining = sessionDuration;
    updateDisplay();
  }
});

breakInput.addEventListener('change', () => {
  breakDuration = breakInput.value * 60;
  if (!isSession) {
    timeRemaining = breakDuration;
    updateDisplay();
  }
});

// Blink tab title to notify user of break
function startBlinking() {
  blinkIntervalID = setInterval(() => {
    document.title =
      document.title === 'Break Time!' ? 'Clock & Roll' : 'Break Time!';
  }, 1000);
}

// Stop blinking effect
function stopBlinking() {
  clearInterval(blinkIntervalID);
  document.title = originalTitle;
}

// Play sound effect to notify user of break
function playSound() {
  if (soundOn) {
    const audio = new Audio('break-sound.mp3'); // Make sure to add your sound file
    audio.play();
  }
}

// Sound slider logic
soundSlider.addEventListener('input', (event) => {
  soundOn = event.target.value === '1'; // Check if sound is on or off
  soundLabel.textContent = soundOn ? 'On' : 'Off'; // Update label inside slider
});

// Theme slider logic
themeSlider.addEventListener('input', (event) => {
  if (event.target.value === '1') {
    document.body.classList.add('dark'); // Switch to dark mode
    themeLabel.textContent = 'Dark'; // Update label inside slider
  } else {
    document.body.classList.remove('dark'); // Switch to light mode
    themeLabel.textContent = 'Light'; // Update label inside slider
  }
});

// Info modal logic
infoIcon.addEventListener('click', () => {
  infoModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  infoModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === infoModal) {
    infoModal.style.display = 'none';
  }
});

// Automatically update copyright year
const currentYear = new Date().getFullYear();
document.getElementById(
  'copyright'
).textContent = `© ${currentYear} WisemanCodes. All rights reserved.`;

// Initialize the display
updateDisplay();
