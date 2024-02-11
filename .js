document.addEventListener('DOMContentLoaded', function () {
  const progressElement = document.getElementById('progress');
  const taskElement = document.getElementById('current-task');
  const instructionsElement = document.getElementById('instructions');
  const taskInstructionsElement = document.getElementById('task-instructions');
  const statusElement = document.getElementById('status-message');
  const checkResourcesButton = document.getElementById('check-resources');

  // Define tasks and instructions
  const tasks = [
    "Planting", // Week 1: Planting
    "Watch out for rains", // Week 2: Watching out for rains
    "Watch out for rains", // Week 3: Watching out for rains
    "Hurray! Potato germinates", // Week 4: Potato germination
    "", // Week 5-7: No specific task
    "", // Week 8-9: No specific task
    "", // Week 10: No specific task
    "Prepare to weed", // Week 8: Prepare to weed
    "", // Week 9: No specific task
    "Fertilizer top dressing", // Week 10: Fertilizer top dressing
    "", // Week 11: No specific task
    "Watch out for any pests and blight", // Week 11: Watching out for pests and blight
    "Apply chemicals to prevent blight if raining", // Week 11: Apply chemicals to prevent blight if raining
    "Weed if any weeds exist", // Week 12: Weed if any weeds exist
    "", // Week 13: No specific task
    "Watch and pray", // Week 14: Watching and praying
    "Watch and pray", // Week 15: Watching and praying
    "Watch and pray", // Week 16: Watching and praying
    "", // Week 17-19: No specific task
    "Look for market", // Week 10-16: Look for market
    "Look for market",
    "Look for market",
    "Sell crop" // Week 20: Sell crop
  ];

  // Initialize current week
  let currentWeek = 1;

  // Update progress and current task
  function updateProgress() {
    progressElement.querySelector('#current-week').textContent = currentWeek;
    taskElement.textContent = tasks[currentWeek - 1];
    taskInstructionsElement.textContent = getTaskInstructions(currentWeek);
  }

  // Get task instructions based on week
  function getTaskInstructions(week) {
    switch (week) {
      case 1:
        return "Prepare land, get money for labor, ensure there is enough rain and plant your crop";
      case 2:
      case 3:
        return "Germinating soon, check for rains.";
      case 4:
        return "Minimize weeds, ensure there is moderate water";
      case 8:
        return "Weed and prepare to top dress";
      case 10:
        return "Apply Yara MIla";
      case 11:
        return "Spray against blight and pests";
      case 12:
        return "Protect from blight if raining, and for weeding if any weeds exist...";
      case 14:
      case 15:
      case 16:
        return "Flowering";
      case 20:
        return "Journey completed; off to the market.";
      default:
        return "No instructions available for this week.";
    }
  }

  // Check resources button click event
  checkResourcesButton.addEventListener('click', function () {
    const landReady = document.getElementById('land-ready').checked;
    const rainEnough = document.getElementById('rain-enough').checked;
    const seedsAvailable = document.getElementById('seeds-available').checked;
    const fertilizerAvailable = document.getElementById('fertilizer-available').checked;
    const laborAvailable = document.getElementById('labor-available').checked;

    if (landReady && rainEnough && seedsAvailable && fertilizerAvailable && laborAvailable) {
      statusElement.textContent = "Resources are ready. Proceed with the task.";
      statusElement.style.display = 'block';
      instructionsElement.style.display = 'block';

      // Increment current week
      currentWeek++;
      // Update progress
      updateProgress();
    } else {
      statusElement.textContent = "Some resources are missing. Please check again.";
      statusElement.style.display = 'block';
      instructionsElement.style.display = 'none';
    }
  });
  // Fetch weather data from API
  function getWeatherData() {
    const location = 'Nairobi'; d
    const apiKey = '4f092ca8d7a58d20c79e74f3ad0e6594'; 
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

    const url = `${apiUrl}?q=${location}&appid=${apiKey}`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const weatherDescription = data.weather[0].description;
        statusElement.textContent = `Weather forecast: ${weatherDescription}`;
        statusElement.style.display = 'block';
      })
      .catch(error => {
        console.error('There was a problem fetching the weather data:', error);
      });
  }

  // Initial update
  updateProgress();
});
const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(5500, () => {
  console.log('Server is running on port 5500');
});
