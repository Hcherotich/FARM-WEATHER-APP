document.addEventListener('DOMContentLoaded', function () {
  const progressElement = document.getElementById('progress');
  const taskElement = document.getElementById('current-task');
  const instructionsElement = document.getElementById('instructions');
  const taskInstructionsElement = document.getElementById('task-instructions');
  const statusElement = document.getElementById('status');
  const checkResourcesButton = document.getElementById('check-resources');
  
  // OpenWeatherMap API key (replace 'YOUR_API_KEY' with your actual API key)
  const apiKey = '4f092ca8d7a58d20c79e74f3ad0e6594';
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  
  // Define tasks and instructions
  const tasks = [
    "Planting",
    "Watch out for rains",
    "Watch out for rains",
    "Potato germination",
    "Prepare to weed",
    "Fertilizer top dressing",
    "Watch for pests and blight",
    "Weed if any weeds exist",
    "Apply foliar for flowering",
    "Watch and pray",
    "Look for market",
    "Look for market",
    "Look for market",
    "Sell crop"
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
        return "Instructions for planting...";
      case 2:
      case 3:
        return "Instructions for watching out for rains...";
      // Add instructions for other weeks as needed
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
  
  // Get weather data from API
  function getWeatherData() {
    const location = 'Nairobi';
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
});
