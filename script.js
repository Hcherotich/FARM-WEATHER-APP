document.addEventListener('DOMContentLoaded', function () {
  const progressElement = document.getElementById('progress');
  const taskElement = document.getElementById('current-task');
  const instructionsElement = document.getElementById('instructions');
  const taskInstructionsElement = document.getElementById('task-instructions');
  const statusElement = document.getElementById('status-message');
  const checkResourcesButton = document.getElementById('check-resources');

  // Defining tasks and instructions
  const tasks = [
    "Planting", // Week 1: Planting
    "Watch out for rains", // Week 2: Watching out for rains
    "Watch out for rains", // Week 3: Watching out for rains
    "Hurray! Potato germinates", // Week 4: Potato germination
    "check for rains", // Week 5-7: No specific task
    " Check for rains", // Week 8-9: No specific task
    "Germination", // Week 10: No specific task
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
// Show or hide "Land and Resources" section based on current week
if (currentWeek === 1) {
  document.getElementById('land-resources').style.display = 'block';
} else {
  document.getElementById('land-resources').style.display = 'none';
}

  }

  // Get task instructions based on week
  function getTaskInstructions(week) {
    switch (week) {
      case 1:
        return "Prepare land, get money for labor, ensure there is enough rain and plant your crop";
      case 2:
        return "Check for rains"
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
      return 
      "Consider spraying foliar"
      case 15:
        return "Check for rains;spray towards flowering"
      case 16:
        return "Flowering";
        case 17: 
        return "Beautiful flowers are out check for rains and blight"
      case 18:
        return "almost there keep the faith"
        case 19:
          return "Relaxed week;potato fattening for the market"
       case 20:
        return "Journey completed; off to the market. Go yee and make money";
      default:
        return "No instructions available for this week.";
    }
  }

  // Check resources button click event
  checkResourcesButton.addEventListener('click', function () {
    if (currentWeek <=20){
    let landReady = document.getElementById('land-ready').checked;
    let rainEnough = document.getElementById('rain-enough').checked;
    let seedsAvailable = document.getElementById('seeds-available').checked;
    let fertilizerAvailable = document.getElementById('fertilizer-available').checked;
    let laborAvailable = document.getElementById('labor-available').checked;

    if (landReady && rainEnough && seedsAvailable && fertilizerAvailable && laborAvailable) {
      statusElement.textContent = "Resources are ready. Proceed with the task.";
      statusElement.style.display = 'block';
      instructionsElement.style.display = 'block';

      // Increment current week
      currentWeek++;
      // Update progress
      updateProgress();
    } else if (currentWeek===1)  {
      statusElement.textContent = "Please check all resources before proceeding.";
      statusElement.style.display = 'block';
      instructionsElement.style.display = 'none';
    }
   else{statusElement.textContent = "Some resources are missing. Please check again."
  statusElement.style.display = 'block';
  instructionsElement.style.display = 'none'
  }
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
