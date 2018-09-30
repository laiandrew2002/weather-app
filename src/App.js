import React, { Component } from 'react';
import Navbar from './components/navbar.js';
import Weather from './components/weather.js';
import './App.css';
import InputSearch from './components/inputsearch.js';
import FiveDaysWeather from './components/fivedaysweather.js';
import FiveDays from './components/fivedays.js';
import Modal from 'react-responsive-modal';
import Footer from './components/footer'

import Partic from './components/particles'

class App extends Component {
  constructor(){
    super();
    this.state={
      timestamp:'',
      country: '',
      city: '',
      temperature: '',
      mintemp:'',
      maxtemp:'',
      description: '',
      humidity: '',
      error: '',
      weather:'',
      fivedays:'',
      wind:'',
      open: false,
    }
  }

  componentDidMount(){
    let that = this;
    if ("geolocation" in navigator) {
      // check if geolocation is supported/enabled on current browser
      navigator.geolocation.getCurrentPosition(
       function success(position) {
         // for when getting location is a success
         console.log('latitude', position.coords.latitude, 'longitude', position.coords.longitude);
         const api_key = '&APPID=c63daf69ac7a1d7194de13a08e67c64b';
         const url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}${api_key}`
         fetch(url)
         .then(resp=>resp.json())
         .then(resp =>{
           console.log(resp)
           that.setState({
            timestamp: new Date(resp.dt*1000),
            temperature: Math.round(resp.main.temp-273.15),
            mintemp: Math.round(resp.main.temp_min-273.15),
            maxtemp: Math.round(resp.main.temp_max-273.15),
            city:resp.name,
            country:resp.sys.country,
            humidity: resp.main.humidity,
            description: resp.weather[0].description,
            error:'',
            weather: resp.weather[0],
            wind: resp.wind.speed,
           })
           that.load7DaysWeather(that.state.city,that.state.country);
         })
       },
      function error(error_message) {
        // for when getting location results in an error
        console.error('An error has occured while retrievinlocation', error_message)
      }
    );
    } else {
      // geolocation is not supported
      // get your location some other way
      console.log('geolocation is not enabled on this browser')
    }
  }

  loadWeather = async(e) => {
    e.preventDefault(); 
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_key = '&APPID=c63daf69ac7a1d7194de13a08e67c64b';
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}${api_key}`);
    const resp = await api_call.json();
    console.log(resp);
    if(city && country){
      this.setState({
        timestamp: new Date(resp.dt*1000),
        temperature: Math.round(resp.main.temp-273.15),
        mintemp: Math.round(resp.main.temp_min-273.15),
        maxtemp: Math.round(resp.main.temp_max-273.15),
        city:resp.name,
        country:resp.sys.country,
        humidity: resp.main.humidity,
        description: resp.weather[0].description,
        error:'',
        weather: resp.weather[0],
        wind: resp.wind.speed,
      })
    }else{
      this.setState({
        error: "Please enter the values..."
      })
    }
    console.log(this.state.temperature,this.state.city,this.state.country)
    this.load7DaysWeather(city,country);
  }

  load7DaysWeather = async(country) =>{
    // const city = e.target.elements.city.value;
    // const country = e.target.elements.country.value;
    const api_key = '&APPID=c63daf69ac7a1d7194de13a08e67c64b';
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${country}${api_key}`;
    console.log(url);
    const api_call = await fetch(url);
    const resp = await api_call.json();
    // console.log(resp);
    this.setState({fivedays:resp.list});
    console.log(this.state.fivedays);
  }

  onOpenModal = () => {
    this.setState({ open: true });
  }

  onCloseModal = () => {
    this.setState({ open: false });
  }

  render() {
    const { fivedays, temperature, mintemp, maxtemp, city, country, 
      humidity, description, error, weather, wind, timestamp }= this.state;
    const { open } = this.state;

    return (
      <div className={'q'+weather.icon}>
        <Partic weather={weather}/>
        <Navbar />
        <div>
          <InputSearch 
            getWeather={this.loadWeather} 
          />

          <div className='text-center'>
        
            <Weather 
              timestamp={timestamp}
              temperature={temperature}
              mintemp={mintemp}
              maxtemp={maxtemp}
              city={city}
              country={country}
              humidity={humidity}
              description={description}
              error={error}
              weather={weather}
              wind={wind}
            />
            
            <FiveDays fivedays={fivedays} />
          </div>

          <div className='text-center'>
            <button className='ma4 btn btn-lg btn-success grow shadow-4' onClick={this.onOpenModal}>
            <i className="fas fa-thermometer-three-quarters"></i> Forecast Chart
            </button>
            
            
            <Modal open={open} onClose={this.onCloseModal} className='w-80'>
              <FiveDaysWeather 
              fivedays={fivedays}
              city={city}
              country={country}
              />
            </Modal>
          </div>
        </div>
          
         <br/>
         <br/>
         <br/>
         
        <Footer />
      </div>
    );
  }
}

export default App;
