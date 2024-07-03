const search = document.querySelector('#search')
const city = document.querySelector('#city')
const temperature = document.querySelector('.temperature')
const description = document.querySelector('.description')
const clouds = document.querySelector('#clouds')
const humidity = document.querySelector('#humidity')
const pressure = document.querySelector('#pressure')
const main = document.querySelector('main')
const form = document.querySelector('form')
form.addEventListener('submit' , (event)=>{
    event.preventDefault()

    if(search.value != '' ){
        searchWeather()
    }
})

const id = '9505fd1df737e20152fbd78cdb289b6a'
const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid='+id;

const searchWeather = ()=>{
    fetch(`${url}&q=${search.value}`)
    .then(responsive => responsive.json())
    .then(data => {
        console.log(data);
        if(data.cod === 200){
            city.querySelector('figcaption').innerText = data.name;
            city.querySelector('img').setAttribute("src",`http://flagsapi.com/${data.sys.country}/shiny/32.png`)
            temperature.querySelector('img').setAttribute("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`)
            temperature.querySelector('figcaption span').innerText = data.main.temp
            description.innerText = data.weather[0].description;
            clouds.innerText = data.clouds.all;
            humidity.innerText = data.main.humidity;
            pressure.innerText = data.main.pressure
        }
        else{
            main.classList.add('error')
            setTimeout(()=>{
                main.classList.remove('error') 
            },1000)
        }

        search.value = '';
    })  
}

const initApp = () => {
    search.value = 'Odisha'
    searchWeather()
}

initApp()