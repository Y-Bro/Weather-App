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
https://api.openweathermap.org/data/2.5/weather?q=london&appid=b83a3c7efb9040f95f5da6995f1bc6f3
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
    console.log(weather,"YESSSSSSSSSSSSSsss");
    let city = document.getElementById("city");
        city.innerText = `${weather.name}, ${weather.sys.country}`;


    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
}

function dateBuilder (d) {
     
}