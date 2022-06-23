const url="https://api.openweathermap.org/data/2.5/";
const key="bb8d8cf0e7a1ec3a1463872c28f33dce"; 

const setCity=(e)=>{ 
    if(e.keyCode=="13"){
        getResult(searchCity.value)
    }
} 

const getResult=(cityName)=>{
    let search=`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=aze`
    fetch(search)
    .then(weather=>{
        return weather.json() 
    })
    .then(result)
}
const result = (result) => { 
    let city=document.querySelector('.city')
    city.innerText=`${result.name}, ${result.sys.country}`
    let temp=document.querySelector('.temp')
    temp.innerText=`${Math.round(result.main.temp)}°C`
    let mean=document.querySelector('.mean')
    mean.innerText=result.weather[0].description;
    let minmax=document.querySelector('.minmax')
    minmax.innerText=`${Math.round(result.main.temp_min)}°c / ${Math.round(result.main.temp_max)}°c`
}

const searchCity=document.getElementById("searchCity")
searchCity.addEventListener("keypress",setCity)