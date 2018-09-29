import React from 'react';
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


const Weather = (props) =>{
    const { weather, country, city, temperature, mintemp, maxtemp, 
            wind, humidity, description, error, timestamp } = props

    function getFormattedDate(date){
        var options = { weekday: 'long', month: 'short', day: 'numeric' };
        return new Date(date).toLocaleDateString("en-US",options);
        }
        
    if(weather.icon){
        return (
            <div className='glassweather dib br3 pa3 ma4 bw2 shadow-5 w-80'>
                <div className='flex'>
                  <div className='w-50 text-left'>
                    <h4 >{city},{country}</h4>
                  </div>

                  <div className='w-50 text-right'>
                    <h4 >{getFormattedDate(timestamp)}</h4>
                  </div>
                </div>
                <hr/>
                <div className='flex'>
                    <div className='w-third pa1'>
                        <img src={weatherIcons[weather.icon]} alt='weather'
                        width='300px' height='200px'/>
                    </div>
                    <div className='w-third pa1'>
                                
                        <h1 id='temp' className='pa0'>
                            {/* <i className="p-3 fas fa-thermometer-three-quarters"> </i> */}
                            {temperature}
                            <span className='w-20' style={{fontSize:'2rem'}}>
                            °C
                            </span>
                        </h1>
                        <p>{description.toUpperCase()}</p>
                    </div>
                
                    <div className='w-third text-right pa2'>
                        <p>
                          <i className="fas fa-tint"></i> Humidity: {humidity}%
                        </p>
                        <p>
                        <i className="fas fa-feather-alt"></i> Wind: {wind}m/s
                        </p>
                        <p>
                        <i className="fas fa-thermometer-quarter"></i> Min: {mintemp}°C
                        </p>
                        <p>
                        <i className="fas fa-thermometer-three-quarters"></i> Max: {maxtemp}°C
                        </p>
                    </div>
                </div>
                {/* {description && <p>Conditions:  {description}</p>} */}
                {error && <p>{error}</p>}
            </div>
        )
    }else{
        return (<div></div>)
    }
}
export default Weather;

