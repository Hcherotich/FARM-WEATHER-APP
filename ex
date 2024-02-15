//
document.addEventListener('DOMContentLoaded', function () {
  const progressElement = document.getElementById('progress');
  const taskElement = document.getElementById('current-task');
  const instructionsElement = document.getElementById('instructions');
  const statusElement = document.getElementById('status-message');
  const checkResourcesButton = document.getElementById('check-resources');
  const nextWeekButton = document.getElementById('next-week');
  const weeksContainer = document.getElementById('weeks');

  // Defining tasks and instructions
  const tasks = [
      "Prepare land, get money for labor, ensure there is enough rain and plant your crop", // Week 1
      "Check for rains", // Week 2
      "Germinating soon, check for rains.", // Week 3
      "Minimize weeds, ensure there is moderate water", // Week 4
      "", // Week 5-7
      "", // Week 8-9
      "Germination", // Week 10
      "Prepare to weed", // Week 11
      "", // Week 12
      "Weeding", // Week 13
      "Watch and pray", // Week 14
      "Watch and pray", // Week 15
      "Watch and pray", // Week 16
      "", // Week 17-19
      "Relaxed week; potato fattening for the market", // Week 20
      "Journey completed; off to the market. Go ye and make money", // Week 21
  ];

  // Initialize current week
  let currentWeek = 1;

  // Update progress and current task
  function updateProgress() {
      progressElement.querySelector('#current-week').textContent = currentWeek;
      taskElement.textContent = tasks[currentWeek - 1];
      taskElement.textContent = `Week ${currentWeek}: ${tasks[currentWeek - 1]}`;
      instructionsElement.textContent = getTaskInstructions(currentWeek);
  // Show or hide "Land and Resources" section based on current week
  if (currentWeek === 1) {
    landResourcesSection.style.display = 'block';
  } else {
    landResourcesSection.style.display = 'none';
  }}

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
          case 10:
              return "Apply Yara MIla";
          case 11:
              return "Spray against blight and pests";
          case 13:
              return "Weeding";
          case 14:
              return "Watch and pray";
          case 15:
              return "Watch and pray";
          case 16:
              return "Watch and pray";
          case 20:
              return "Relaxed week; potato fattening for the market";
          case 21:
              return "Journey completed; off to the market. Go ye and make money";
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
          statusElement.style.display = 'none';
      }

      // Increment current week
      currentWeek++;
      // Update progress
      updateProgress();
  });

  // Create the list of weeks
  for (let i = 1; i <= 21; i++) {
      const weekButton = document.createElement('button');
      weekButton.textContent = `Week ${i}`;
      weekButton.classList.add('btn', 'btn-secondary', 'week-button');
      weekButton.addEventListener('click', function () {
          currentWeek = i;
          updateProgress();
      });
      weeksContainer.appendChild(weekButton);
  }

  // Initial update
  updateProgress();
});
function showWeek(weekNumber) {
  const week = weeks[weekNumber - 1];
  document.getElementById('week-title').textContent = week.title;
  document.getElementById('task-description').textContent = week.task;
}

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
