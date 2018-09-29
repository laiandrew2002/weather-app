import React from 'react';
import Particles from 'react-particles-js'
import {particleOptionsStar} from '../particles/particlesjs-star'
import {particleOptionsSnow} from '../particles/particlesjs-snow'
import {particleOptionsCloud3} from '../particles/particlesjs-cloud3'
import {particleOptionsRain} from '../particles/particlesjs-rain1'



const Partic = (props) =>{
    const{ weather }=props

    let particles;
    // if(weather.icon)
    // console.log('icon',weather.icon.includes('n'))
    if(String(weather.icon).includes('n')){
      particles=
      <Particles className='particles'
          params={particleOptionsStar}
      />
    }else if(weather.icon==='13d'||
            weather.icon==='13n'){
      particles=
      <Particles className='particles'
          params={particleOptionsSnow}
      />
    }else if(weather.icon==='02d'||
        weather.icon==='03d'||
        weather.icon==='04d'){
      particles=
      <Particles className='particles'
          params={particleOptionsCloud3}
      />
    }else if(weather.icon==='09d'||
        weather.icon==='10d'||
        weather.icon==='11d'){
      particles=
      <Particles className='particles'
          params={particleOptionsRain}
      />
    }
  return (
      <div>
        {particles}
      </div>
    
  )
}
export default Partic;
