const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const icon = document.querySelector(".weather-icon");
const checkweather = async (city) => {
  try {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d344caef65849a228074d889bf2669aa&units=metric`;
    const response = await fetch(url);
    if (response.status == 404) {
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    } else {
      var data = await response.json();
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + "°c";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
      if (data.weather[0].main == "Clouds") {
        icon.src = "images/clouds.png";
      } else if (data.weather[0].main == "Clear") {
        icon.src = "images/clear.png";
      } else if (data.weather[0].main == "Snow") {
        icon.src = "images/snow.png";
      } else if (data.weather[0].main == "Rain") {
        icon.src = "images/rain.png";
      } else if (data.weather[0].main == "Drizzle") {
        icon.src = "images/drizzle.png";
      } else if (data.weather[0].main == "Mist") {
        icon.src = "images/mist.png";
      }
      document.querySelector(".weather").style.display = "block";
      document.querySelector(".error").style.display = "none";
    }
  } catch (err) {
    console.log(err);
  }
};

searchbtn.addEventListener("click", () => {
  checkweather(searchbox.value);
});
