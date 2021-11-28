const API_KEY = "8668cbefcb936cb698f16077ee08703b"

function onGeoOK(position){
 const lat = position.coords.latitude;
 const lon = position.coords.longitude;
 
 const url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
 fetch(url)
 .then((response)=>response.json())
 .then((data)=>{
     const weather = document.querySelector("#weather span:first-child");
     const city = document.querySelector("#weather span:last-child");
    city.innerText = data.name;
weather.innerText = `${data.weather[0].main}/${data.main}`});
}

function onGeoError(){
    alert("can't find your location");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);