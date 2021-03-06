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





async function getWeather(city){
    try{
        var urlRes = await fetch(`${apiInfo.baseUrl}?q=${city}&appid=${apiInfo.key}&units=metric`)
        //console.log(ur.json())
        //var target = ur.json()

        //let response = await fetch(targtetUrl);
        let target = await urlRes.json();
        console.log(target)
        showWeather(target)
        
    }catch(err){
        console.log(`Your Error : ${err}`)
        //let target = await urlRes.json();
        errorFun(target)
    }

}

function errorFun(target){

    let Err = document.getElementById('Error');
    Err.innerHTML = `Code :${target.cod} & Msg : ${target.message}`;


}

function showWeather(target){
    console.log("working")
    
    let city = document.getElementById('city');
    city.innerText = `${target.name}, ${target.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `TEMP  :${Math.round(target.main.temp)} C or ${c2f(target.main.temp)} F`;


    let weatherType = document.getElementById('weather');
    weatherType.innerText = `Status: ${target.weather[0].main}`;

    let humid = document.getElementById('humidity');
    humid.innerText = `HUMIDITY : ${target.main.humidity}`;
    

}








function c2f(temp){

    let tempFh = (temp * 9/5) + 32
    return tempFh 


}


//Promises
/*

function getWeather(city) {
    fetch(`${apiInfo.baseUrl}?q=${city}&appid=${apiInfo.key}&units=metric`)
    .then(target => {
        return dataCity = target.json();
    }).then(showWeather);
}

function showWeather(target){
    console.log(target);


    if (target.cod == 404){
        console.log("error")

        let errorDisplay = document.getElementById('Error')
        errorDisplay.innerText = `Error : ${target.cod}  and message : ${target.message}`
        

    }else{

    let errorDisplay = document.getElementById('Error')
    errorDisplay.innerText = "Weather App"
    let city = document.getElementById('city');
    city.innerText = `${target.name}, ${target.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `TEMP  :${Math.round(target.main.temp)} C or ${c2f(target.main.temp)} F`;


    let weatherType = document.getElementById('weather');
    weatherType.innerText = `Status: ${target.weather[0].main}`;

    let humid = document.getElementById('humidity');
    humid.innerText = `HUMIDITY : ${target.main.humidity}`;
    }
    

}
*/

