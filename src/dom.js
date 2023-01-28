import { weatherInstant } from './weatherInstant';
import { weatherWeek } from "./weatherWeek";
import './style.css';
import Icon from './icon.png';
import BG from './background.jpg';


//Create DOM
export async function createDOM() {

    const myBG = new Image();
    myBG.src = BG;
    //header
    const body = document.querySelector("body");
    const header = document.createElement("header");
    header.setAttribute("id", "header");
    body.appendChild(header);
    const form=document.createElement('form');
    form.setAttribute('id','myForm');
    form.setAttribute('class','myForm');
    header.appendChild(form);
    const label=document.createElement('label');
    label.setAttribute('for','myInput');
    form.appendChild(label);
    const input=document.createElement('input');
    input.setAttribute("id", "city-input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Enter city name");
    form.appendChild(input);
    
    //content
    const content = document.createElement("div");
    content.setAttribute("id", "content");
    body.appendChild(content);
    
    
    const sendButton=document.createElement('button');
    sendButton.setAttribute('type','submit');
    sendButton.setAttribute('id','sendButton');
    const myIcon = new Image();
    myIcon.setAttribute('id','myIcon');
    myIcon.src = Icon;
    sendButton.innerHTML='';
    sendButton.appendChild(myIcon);
    form.appendChild(sendButton);
    sendButton.addEventListener("click",async (e)=>{
        e.preventDefault();
        const location=document.getElementById('city-input').value;

        //Instant weather at content div
        let weatherInstantData = await weatherInstant(location);
        console.log(weatherInstantData);
        if(weatherInstantData){
            cityName.innerHTML=`Place:&nbsp;&nbsp;&nbsp;&nbsp;${weatherInstantData.name}`;
            cityTemp.innerHTML=`Temperature:&nbsp;&nbsp;&nbsp;&nbsp;${weatherInstantData.main.temp.toFixed(0)} °C`;
            cityFeelsLike.innerHTML=`Feels like:&nbsp;&nbsp;&nbsp;&nbsp;${weatherInstantData.main.feels_like.toFixed(0)} °C`;
            cityHumidity.innerHTML=`Humidity:&nbsp;&nbsp;&nbsp;&nbsp;${weatherInstantData.main.humidity.toFixed(0)}%`;
            cityDescription.innerHTML=`Weather:&nbsp;&nbsp;&nbsp;&nbsp;${weatherInstantData.weather[0].main}`;
            cityWind.innerHTML=`Wind:&nbsp;&nbsp;&nbsp;&nbsp;${(weatherInstantData.wind.speed*3.6).toFixed(1)} km/h`;
            cityTimeD.innerHTML=`Date:&nbsp;&nbsp;&nbsp;&nbsp;${(new Date(weatherInstantData.dt*1000)).toLocaleDateString("en-US",{
                weekday: 'long', year:'numeric', month:'short', day:'numeric'
            })}`;
            let date = new Date(weatherInstantData.dt*1000);
            let offset = new Date().getTimezoneOffset();
            date.setTime(date.getTime() + (weatherInstantData.timezone*1000+offset*60*1000)); //subtracting one hour in milliseconds
            cityTimeH.innerHTML=`Time:&nbsp;&nbsp;&nbsp;&nbsp;${date.toLocaleTimeString("en-US",{hour:'2-digit', minute:'2-digit', hour12: true})}`;            
        }else{
            cityName.innerHTML=`City not found`;
            cityTemp.innerHTML='';
            cityFeelsLike.innerHTML='';
            cityHumidity.innerHTML='';
            cityDescription.innerHTML='';
            cityWind.innerHTML='';
            cityTimeD.innerHTML='';
            cityTimeH.innerHTML='';
        }

        let weatherWeekData = await weatherWeek(location);
        if(weatherWeekData){
            cityPop.innerHTML=`Chance of rain: ${weatherWeekData[2][0].toFixed(0)}%`;
        }else{
            cityPop.innerHTML='';
        }

        //Week weather at footer div
        
        footer.innerHTML='';
        for (let j=0;j<40;j++){
            const byhour=document.createElement('div');
            const iconbyhour=document.createElement('img');
            const timebyhour=document.createElement('div');
            const tempbyhour=document.createElement('div');
            const popbyhour=document.createElement('div');
            
            byhour.setAttribute('class','byhour');
            iconbyhour.setAttribute('class','icon');
            timebyhour.setAttribute('class','datahour');
            tempbyhour.setAttribute('class','datahour');
            popbyhour.setAttribute('class','datahour');
            
            if(weatherWeekData){
                iconbyhour.setAttribute('src',`https://openweathermap.org/img/wn/${weatherWeekData[3][j]}.png`);    
                timebyhour.innerHTML=`${weatherWeekData[0][j]}`;
                tempbyhour.innerHTML=`${weatherWeekData[1][j].toFixed(0)} °C`;
                popbyhour.innerHTML=`${weatherWeekData[2][j].toFixed(0)}%`;
            }else{
                iconbyhour.innerHTML='';
                timebyhour.innerHTML='';
                tempbyhour.innerHTML='';
                popbyhour.innerHTML='';
            }
            footer.appendChild(byhour);
            byhour.appendChild(iconbyhour);
            byhour.appendChild(timebyhour);
            byhour.appendChild(tempbyhour);
            byhour.appendChild(popbyhour);
        }
        
        document.getElementById('city-input').value='';
    })
    //Content DOM
    const instantWeather = document.createElement("div");
    instantWeather.setAttribute("id", "instantWeather");
    content.appendChild(instantWeather);
    const cityName=document.createElement('div');
    const cityTimeD=document.createElement('div');
    const cityTimeH=document.createElement('div');
    const cityTemp=document.createElement('div');
    const cityDescription=document.createElement('div');
    const cityFeelsLike=document.createElement('div');
    const cityHumidity=document.createElement('div');
    const cityWind=document.createElement('div');
    const cityPop=document.createElement('div');
    cityName.setAttribute('class','instantData');
    cityTemp.setAttribute('class','instantData');
    cityFeelsLike.setAttribute('class','instantData');
    cityHumidity.setAttribute('class','instantData');
    cityDescription.setAttribute('class','instantData');
    cityWind.setAttribute('class','instantData');
    cityTimeD.setAttribute('class','instantData');
    cityTimeH.setAttribute('class','instantData');
    cityPop.setAttribute('class','instantData');
    cityName.innerHTML='Place: ';
    cityTemp.innerHTML='Temperature: ';
    cityFeelsLike.innerHTML='Feels like: ';
    cityHumidity.innerHTML='Humidity: ';
    cityDescription.innerHTML='Weather: ';
    cityWind.innerHTML='Wind: ';
    cityTimeD.innerHTML='Date: ';
    cityTimeH.innerHTML='Time: ';
    cityPop.innerHTML='Chance of rain: ';
    instantWeather.appendChild(cityName);
    instantWeather.appendChild(cityTimeD);
    instantWeather.appendChild(cityTimeH);
    instantWeather.appendChild(cityTemp);
    instantWeather.appendChild(cityDescription);
    instantWeather.appendChild(cityFeelsLike);
    instantWeather.appendChild(cityHumidity);
    instantWeather.appendChild(cityPop);
    instantWeather.appendChild(cityWind);
    
    


    //Footer DOM
    const footer = document.createElement("footer");
    footer.setAttribute("id", "footer");
    body.appendChild(footer);
    

}