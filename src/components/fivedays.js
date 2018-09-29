import React from 'react';
import ForecastCard from './forecastcard.js'

 const FiveDays = (props) => {

  const { fivedays }=props;
    let timestamp=[];
    let temperature = [];
    let weatherIcons = [];
    let j=0;
    if(fivedays){
        for(let i=0; i<fivedays.length; i+=8){
        timestamp[j] = new Date(fivedays[i].dt*1000);
        temperature[j]= Math.round(fivedays[i].main.temp-273.15);
        weatherIcons[j]=fivedays[i].weather[0].icon
        j++;
        }
        var forecast=[];
        for(let i=1; i<timestamp.length;i++){
            forecast[i] = 
            <ForecastCard 
            key={i}
            time={getFormattedDate(timestamp[i])}
            temp={temperature[i]}
            weather={weatherIcons[i]}
            />
        }
    }

function getFormattedDate(date) {
    var options = { weekday: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString("en-US",options);
    }
// console.log('fivedays',fivedays)
// console.log('time',timestamp)
// console.log('temp',temperature)
// console.log('weather',weatherIcons)

  return (
    <div className='row justify-content-center'>
        {forecast}
    </div>
  )
}

export default FiveDays;