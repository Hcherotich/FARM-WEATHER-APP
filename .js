document.addEventListener('DOMContentLoaded', function () {
    const statusElement = document.getElementById('status');
    const currentWeek = 1;
    const totalWeeks = 20;
    const apiKey = 'MP9627WYRCJABAGTULEFXNE2E&contentType=json'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/kenya?unitGroup=metric&key=MP9627WYRCJABAGTULEFXNE2E&contentType=json'; // Replace 'https://api.example.com/weather' with the actual API URL
  
    function updateStatus(message) {
      statusElement.innerHTML = `<strong>Week ${currentWeek}:</strong> ${message}`;
    }
  
    function fetchWeather() {
      fetch(`${apiUrl}?week=${currentWeek}&apiKey=${MP9627WYRCJABAGTULEFXNE2E&contentType=json}`)
        .then(response => response.json())
        .then(data => {
          updateStatus(`Weather forecast: ${data.forecast}`);
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
        });
    }
  
    function plantPotatoes() {
      updateStatus('Planting potatoes.');
    }
  
    function watchForRains() {
      updateStatus('Watching out for rains.');
      fetchWeather();
    }
    function germinatePotatoes() {
        updateStatus('Hurray! Potatoes germinate.');
      }
    
      function weed() {
        updateStatus('Weeding.');
      }
    
      function applyFertilizer() {
        updateStatus('Applying fertilizer.');
      }
    
      function applyFoliar() {
        updateStatus('Applying foliar for flowering.');
      }
    
      function watchForPestsAndBlight() {
        updateStatus('Watching for pests and blight.');
      }
    
      function applyChemicals() {
        updateStatus('Applying chemicals to prevent blight.');
      }
    
      function lookForMarket() {
        updateStatus('Looking for market.');
      }
    
      function sellCrop() {
        updateStatus('Hurray! Selling our crop.');
      }
    
  
    // Define other functions and weeks as before...
  
    function nextWeek() {
      if (currentWeek <= totalWeeks) {
        switch (currentWeek) {
          case 1:
            plantPotatoes();
            break;
          case 2:
          case 3:
            watchForRains();
            break;
          // Define other cases and tasks as before...
          default:
            updateStatus('Watching and praying...');
            break;
        case 4:
        germinatePotatoes();
        break;
      case 8:
        weed();
        break;
      case 10:
        applyFertilizer();
        break;
      case 11:
        watchForPestsAndBlight();
        break;
      case 12:
        applyFoliar();
        break;
      case 12:
        weed();
        break;
      case 14:
      case 15:
      case 16:
        lookForMarket();
        break;
      case 17:
        sellCrop();
        break;
        default:
        updateStatus('Watching and praying...');
        break;
    }

    currentWeek++;
      } else {
        updateStatus('Farming cycle completed.');
      }
    }
  
    // Initial call to start the process
    nextWeek();
  });