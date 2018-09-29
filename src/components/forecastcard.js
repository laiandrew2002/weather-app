import React from 'react'

import day from './animated-weather-icon/day.svg';
import night from './animated-weather-icon/night.svg';
import cloudyday from './animated-weather-icon/cloudy-day-2.svg';
import cloudynight from './animated-weather-icon/cloudy-night-2.svg';
import cloudyday2 from './animated-weather-icon/cloudy-day-2.svg';
import cloudynight3 from './animated-weather-icon/cloudy-night-3.svg';
import cloudy from './animated-weather-icon/cloudy.svg';
import rainy3 from './animated-weather-icon/rainy-3.svg';
import rainy5 from './animated-weather-icon/rainy-5.svg';
import snowy6 from './animated-weather-icon/snowy-6.svg';
import thunder from './animated-weather-icon/thunder.svg';

const weatherIcons={
    "01d":day,
    "01n":night,
    "02d":cloudyday,
    "02n":cloudynight,
    "03d":cloudyday2,
    "03n":cloudynight3,
    "04d":cloudy,
    "04n":cloudy,
    "09d":rainy5,
    "09n":rainy5,
    "10d":rainy3,
    "10n":rainy3,
    "11d":thunder,
    "11n":thunder,
    "13d":snowy6,
    "13n":snowy6,
    "50d":cloudy,
    "50n":cloudy,
}


 const ForcastCard = (props) => {
     const { time, temp, weather } = props

  return (
    
    <div className='glassweather dib br3 pa2 ma1 bw2 shadow-5 w-20'>
        <div className='text-center'>
            {time}
        </div>
        <hr/>
        <div className='flex'>
            <div className='w-50 align-self-center text-center'>

                <span style={{fontSize:'20px'}}>{temp}</span>°C
            </div>
            <div className='w-50 align-items-center'>

                <img src={weatherIcons[weather]} alt='weather'
                    width='80px' height='80px'/>
            </div>
        </div>
    </div>
    
  )
}

export default ForcastCard;
