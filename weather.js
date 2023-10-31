const apiKey = "362ef079d86c7bcddb589bf597fd6c1c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?appid=362ef079d86c7bcddb589bf597fd6c1c&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


//function celsiusToFahrenheit(celsius) {
    //const fahrenheit = (celsius * 9/5) + 32;
    //return fahrenheit;
  //}

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid={apiKey}`);
    const data = await response.json();

document.querySelector(".city").innerHTML = data.name;

//const celsiusTemp = Math.round(data.main.temp);
//document.querySelector(".temp").innerHTML = celsiusTemp + "°C";

document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".high-temp").innerHTML = Math.round(data.main.temp_max) + "°C";
document.querySelector(".low-temp").innerHTML = Math.round(data.main.temp_min) + "°C";


if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "icons/cloudy_1163661.png";
}
else if (data.weather[0].main == "Clear"){
     weatherIcon.src = "icons/sun_4814268.png";   
}
else if (data.weather[0].main == "Rain"){
    weatherIcon.src = "icons/storm_1146860.png";
}
else if (data.weather[0].main == "Snow"){
    weatherIcon.src = "icons/snow_2439702 (1).png";
}

//const fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);
//document.querySelector(".fahrenheit-temp").innerHTML = Math.round(fahrenheitTemp) + "°F";

}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})

