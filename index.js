

let city_name =document.getElementById("city_name");
let temperature =document.getElementById("temperature");
let humidity =document.getElementById("humidity");
let wind_speed =document.getElementById("wind_speed");
let search_btn = document.getElementById("search_btn");
let city_input = document.getElementById("city_input");

const searched_city = "unnao";
const api_key = "fd260c702de77a066c4ca871c799638e";
const weather_api_url = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${api_key}&q=`;


async function weatherdata(searched_city){
    const response = await fetch(weather_api_url + searched_city);
    const data = await response.json();

    let temperature_data = (Math.round(data.main.temp));
    let humidity_data = data.main.humidity;
    let windspeed_data = data.wind.speed;
    let cityname_data = data.name;

    city_name.innerHTML = cityname_data;

    temperature.innerHTML = temperature_data + " &deg;Celcius";

    humidity.innerHTML =  humidity_data + "%" + " Humidity";

    wind_speed.innerHTML = windspeed_data + "miles/hr" + " Wind Speed";

    if(data.weather[0].main=="Clouds"){
        weather_img.src = "images/clouds.png"
    }
    else  if(data.weather[0].main=="Clear"){
        weather_img.src = "images/clear.png"
    }
    else  if(data.weather[0].main=="Rain"){
        weather_img.src = "images/rain.png"
    }
    else  if(data.weather[0].main=="Drizzle"){
        weather_img.src = "images/drizzle.png"
    }
    else  if(data.weather[0].main=="Mist"){
        weather_img.src = "images/mist.png"
    }
    else  if(data.weather[0].main=="Snow"){
        weather_img.src = "images/snow.png"
    }
    city_input.value = '';
}

search_btn.addEventListener("click", ()=>{

    if(city_input.value === ''){
        alert("City Toh Bata De Bhai!")
    }
    else{
        weatherdata(city_input.value);
    }
    
})