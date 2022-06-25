const apiInfo = {
    key: "8d4b53853e12b7d2f0d73f19d515ce84",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather", 
}

const searchInputBox = document.getElementById('cityInput');
const search = document.getElementById("searchCity")
const weatherStatus = document.getElementById("weather-body")


search.addEventListener('click', (event) => {
    

        console.log(searchInputBox.value);
        getWeather(searchInputBox.value);
       
    

});


function getWeather(city) {
    fetch(`${apiInfo.baseUrl}?q=${city}&appid=${apiInfo.key}&units=metric`)
    .then(weather => {
        return dataCity = weather.json();
    }).then(showWeather);
}

function showWeather(weather){
    console.log(weather);


    if (weather.cod == 404){
        console.log("errot")

        let errorDisplay = document.getElementById('Error')
        errorDisplay.innerText = `Error : ${weather.cod}  and message : ${weather.message}`
        

    }else{
    let city = document.getElementById('city');
    city.innerText = `City : ${weather.name}, Country  ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `TEMPEARATURE  :${Math.round(weather.main.temp)} C or ${c2f(weather.main.temp)} F`;


    let weatherType = document.getElementById('weather');
    weatherType.innerText = `Type: ${weather.weather[0].main}`;

    let humid = document.getElementById('humidity');
    humid.innerText = `HUMIDITY : ${weather.main.humidity}`;
    }
    

}
function c2f(temp){

    tempFh = (temp * 9/5) + 32
    return tempFh 


}


