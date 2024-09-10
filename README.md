# Clock & Roll - A Study Timer App

Clock & Roll is a simple web-based study timer that helps users manage study sessions and break times using the Pomodoro technique. The app allows you to set custom session and break durations, offers a sound notification for breaks, and supports both light and dark themes.

## Features

- **Pomodoro Technique**: Helps manage study and break intervals.
- **Customizable Session/Break Lengths**: Users can adjust the session and break durations.
- **Break Reminders**: Notifies users to take breaks with an optional sound and visual cue.
- **Light/Dark Theme Toggle**: Switch between light and dark mode for user comfort.
- **Accessible Design**: Includes screen reader-friendly labels and modal windows for instructions.

## Files

- `index.html`: The main HTML file containing the structure of the app.
- `styles.css`: Contains all the styling for the app, including light and dark mode.
- `script.js`: Manages the app logic, including the Pomodoro timer, sound notifications, and theme switching.
- `icon.png`: Icon used for the favicon and OpenGraph meta image.
- `break-sound.mp3`: Audio file played during break time notifications.

## How to Use

1. **Session and Break Length**: Use the input fields to set the duration (in minutes) for your study sessions and breaks.
2. **Timer Control**: 
   - Press the "Start" button to begin the timer. The app will count down from the session length.
   - Once the session ends, the app switches to break mode automatically.
   - Press "Pause" to pause the timer and "Reset" to restart.
3. **Sound and Theme Toggles**:
   - Use the "Sound" toggle to enable or disable break time sound notifications.
   - Use the "Theme" toggle to switch between light and dark mode.

## Deployment

This app is designed to be served as a simple static site. You can deploy it using any static web hosting service, or for instance on a VPS with Nginx.

## Getting Started

### Prerequisites

- A modern web browser (Google Chrome, Mozilla Firefox, etc.)
- Optional: A server with Nginx if you plan to host this app on a VPS

### Installation

1. Clone the repository in your terminal:
   "git clone https://github.com/weismark/clock-and-roll.git"
2. Transfer the files to your server (if deploying).
3. Open index.html in a web browser to use the app locally, or access it via your domain if hosted.

