const api = {
    key : "b83a3c7efb9040f95f5da6995f1bc6f3",
    baseurl: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.getElementById("input");

searchbox.addEventListener('keypress',setQuery);

function setQuery(event){
    if(event.keyCode == 13)
    {
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
}

function getResults(query){
    fetch(`${api.baseurl}weather?q=${query}&units=metric&appid=${api.key}`)
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        displayResults(res);
        
    });
}

function displayResults(weather){
    let city = document.getElementById("city");
        city.innerText = `${weather.name}, ${weather.sys.country}`;


    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    let temp = document.querySelector(".current .temperature");
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`

    let lowhigh = document.querySelector(".current .hi-low");
    lowhigh.innerText = `${Math.round(weather.main.temp_min)}° / ${Math.round(weather.main.temp_max)}°`;

    let weatherType = document.querySelector(".current .weather");
    weatherType.innerText = `${weather.weather[0].main}`;
}

function dateBuilder (d) {
     
    let months = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    console.log(d.getDay());
    console.log(d);
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;


}