  const submitButton = document.getElementById("submit");
 const cityInput = document.getElementById("city");
 
 submitButton.addEventListener("click", async function (e) {
   e.preventDefault();
   const city = cityInput.value.trim();
   if (city !== "") {
     await getWeather(city);
   } else {
     console.error("City name cannot be empty");
   }
 });
 
 
async function getWeather(city) {
  const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4c3178263amsh157c791b52c32cbp10aae5jsn370f67146fe4',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    updateUI(result, city);
  } catch (error) {
    console.error(error);
  } 
}

 function updateUI(data, city) {
  document.getElementById("cityName").textContent = city;
  document.getElementById("temp").textContent = Math.round(data.temp);
  document.getElementById("min_temp").textContent = data.min_temp;
  document.getElementById("max_temp").textContent = data.max_temp;
  document.getElementById("cloud_pct").textContent = data.cloud_pct;
  document.getElementById("feels_like").textContent = data.feels_like;
  document.getElementById("humidity").textContent = data.humidity;
  document.getElementById("wind_speed").textContent = data.wind_speed;
  document.getElementById("sunrise").textContent = new Date(data.sunrise * 1000).toLocaleTimeString();
  document.getElementById("sunset").textContent = new Date(data.sunset * 1000).toLocaleTimeString();
  // document.querySelector(".weather").style.display = "block";
}
