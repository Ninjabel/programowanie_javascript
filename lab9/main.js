const API_KEY = "724b3b398a5225ea1397ab99418348a5"; // Klucz API

const app = document.getElementById("app");
const locationForm = document.getElementById("location-form");
const locationInput = document.getElementById("location-input");
const locationsDiv = document.getElementById("locations");

// Pobieranie danych
async function getWeather(location) {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
    );
    const data = await response.json();
    return data;
  }
  
  // Tworzenie elementu HTML dla danej miejscowości
  function createLocationElement(location) {
    const locationDiv = document.createElement("div");
    locationDiv.classList.add("location");
  
    const locationH2 = document.createElement("h2");
    locationH2.textContent = location;
  
    const weatherDiv = document.createElement("div");
    weatherDiv.classList.add("weather");
  
    getWeather(location).then((data) => {
      // Pobieranie odpowiedniej ikony
      const icon = data.weather[0].icon;
      const img = document.createElement("img");
      img.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  
      // Pobieranie temperatury
      const temp = data.main.temp - 273.15;
      const tempP = document.createElement("p");
      tempP.textContent = `Temperatura: ${temp.toFixed(1)}°C`;
  
      // Pobieranie wilgotności
      const humidity = data.main.humidity;
      const humidityP = document.createElement("p");
      humidityP.textContent = `Wilgotność: ${humidity}%`;
  
      weatherDiv.append(img, tempP, humidityP);
    });
  
    // Przycisk usuwania
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Usuń";
    deleteButton.addEventListener("click", () => {
      deleteLocation(location);
    });
  
    locationDiv.append(locationH2, weatherDiv, deleteButton);
    return locationDiv;
  }
  
  // Dodawanie miejscowości do listy
  function addLocation(location) {
    if (locations.length >= 10) {
      alert("Nie możesz dodać więcej niż 10 miejscowości.");
      return;
    }
  
    if (locations.includes(location)) {
      alert("Ta miejscowość już została dodana.");
      return;
    }
  
    locations.push(location);
    saveLocations();
    renderLocations();
  }
  
    // Usuwanie miejscowości z listy
function deleteLocation(location) {
    locations = locations.filter((loc) => loc !== location);
    saveLocations();
    renderLocations();
  }
  // Zapisywanie listy miejscowości w localStorage
function saveLocations() {
    localStorage.setItem("locations", JSON.stringify(locations));
  }
  
  // Pobieranie listy miejscowości z localStorage
  function getSavedLocations() {
    const savedLocations = localStorage.getItem("locations");
    if (savedLocations) {
      return JSON.parse(savedLocations);
    } else {
      return [];
    }
  }
  
  // Renderowanie listy miejscowości
  function renderLocations() {
    locationsDiv.innerHTML = "";
  
    locations.forEach((location) => {
      const locationElement = createLocationElement(location);
      locationsDiv.append(locationElement);
    });
  }
  
  let locations = getSavedLocations();
  renderLocations();
  
  // Obsługa formularza dodawania miejscowości
  locationForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const location = locationInput.value;
    locationInput.value = "";
  
    addLocation(location);
  });