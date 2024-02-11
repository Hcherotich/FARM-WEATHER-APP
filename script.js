document.addEventListener('DOMContentLoaded', function () {
  const progressElement = document.getElementById('progress');
  const taskElement = document.getElementById('current-task');
  const instructionsElement = document.getElementById('instructions');
  const statusElement = document.getElementById('status-message');
  const checkResourcesButton = document.getElementById('check-resources');
  const landResourcesSection = document.getElementById('actions');

  // Defining tasks and instructions
  const tasks = [
    "Prepare land, get money for labor, ensure there is enough rain and plant your crop", // Week 1: Planting
    "Check for rains", // Week 2: Watching out for rains
    "Germinating soon, check for rains.", // Week 3
    "Minimize weeds, ensure there is moderate water", // Week 4
    "", // Week 5-7: No specific task
    "", // Week 8-9: No specific task
    "", // Week 10: No specific task
    "Weed and prepare to top dress", // Week 11
    "", // Week 12: No specific task
    "Fertilizer top dressing", // Week 13
    "", // Week 14: No specific task
    "Watch out for any pests and blight", // Week 15
    "Apply chemicals to prevent blight if raining", // Week 16
    "Weed if any weeds exist", // Week 17
    "", // Week 18: No specific task
    "", // Week 19: No specific task
    "Look for market", // Week 20
    "", // Week 21: No specific task
  ];

  // Initialize current week
  let currentWeek = 1;

  // Update progress and current task
  function updateProgress() {
    progressElement.querySelector('#current-week').textContent = currentWeek;
    taskElement.textContent = tasks[currentWeek - 1];
    instructionsElement.textContent = getTaskInstructions(currentWeek);
    // Show or hide "Land and Resources" section based on current week
    if (currentWeek === 1) {
      landResourcesSection.style.display = 'block';
    } else {
      landResourcesSection.style.display = 'none';
    }
  }

  // Get task instructions based on week
  function getTaskInstructions(week) {
    switch (week) {
      case 1:
        return "Prepare land, get money for labor, ensure there is enough rain and plant your crop";
      case 2:
        return "Check for rains";
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
        return "Consider spraying foliar";
      case 15:
        return "Check for rains; spray towards flowering";
      case 16:
        return "Flowering";
      case 17:
        return "Beautiful flowers are out check for rains and blight";
      case 18:
        return "Almost there, keep the faith";
      case 19:
        return "Relaxed week; potato fattening for the market";
      case 20:
        return "Journey completed; off to the market. Go ye and make money";
      case 21:
        return "Congratulations!";
      default:
        return "No instructions available for this week.";
    }
  }

  // Check resources button click event
  checkResourcesButton.addEventListener('click', function () {
    let landReady = document.getElementById('land-ready').checked;
    let rainEnough = document.getElementById('rain-enough').checked;
    let seedsAvailable = document.getElementById('seeds-available').checked;
    let fertilizerAvailable = document.getElementById('fertilizer-available').checked;
    let laborAvailable = document.getElementById('labor-available').checked;

    if (landReady && rainEnough && seedsAvailable && fertilizerAvailable && laborAvailable) {
      statusElement.textContent = "Resources are ready. Proceed with the task.";
      statusElement.style.display = 'block';
    } else {
      statusElement.textContent = "Some resources are missing. Please check again.";
      statusElement.style.display = 'block';
    }

    // Increment current week
    currentWeek++;
    // Update progress
    updateProgress();
  });

  // Initial update
  updateProgress();
});
const weeks = [
  {
    title: "Week 1",
    task: "Prepare land, get money for labor, ensure there is enough rain and plant your crop"
  },
  {
    title: "Week 2",
    task: "Check for rains"
  },
  {
    title: "Week 3",
    task: "Germinating soon, check for rains."
  },
  {
    title: "Week 4",
    task: "Minimize weeds, ensure there is moderate water"
  },
  {
    title: "Week 5-7",
    task: "No specific task"
  },
  {
    title: "Week 8-9",
    task: "No specific task"
  },
  {
    title: "Week 10",
    task: "No specific task"
  },
  {
    title: "Week 11",
    task: "No specific task"
  },
  {
    title: "Week 12",
    task: "No specific task"
  },
  {
    title: "Week 13",
    task: "No specific task"
  },
  {
    title: "Week 14",
    task: "No specific task"
  },
  {
    title: "Week 15",
    task: "No specific task"
  },
  {
    title: "Week 16",
    task: "No specific task"
  },
  {
    title: "Week 17-19",
    task: "No specific task"
  },
  {
    title: "Week 10-16",
    task: "Look for market"
  },
  {
    title: "Week 20",
    task: "Sell crop"
  },
  {
    title: "Week 21",
    task: "Congratulations!"
  }
];

function showWeek(weekNumber) {
  const week = weeks[weekNumber - 1];
  document.getElementById('week-title').textContent = week.title;
  document.getElementById('task-description').textContent = week.task;
}


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
getWeatherData(); 

const express = require('express');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public', { 'extensions': ['html', 'css', 'js'] }));

// Your other Express routes and configurations go here...

// Start the server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
