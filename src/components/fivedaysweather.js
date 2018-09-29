import React from 'react';

import TempGraph from './tempgraph';
import PressureGraph from './pressuregraph';
import WindGraph from './windgraph';
import SeaLevelGraph from './sealevelgraph';

 const FiveDaysWeather = (props) => {
  //console.log(props.fivedays)
  const { country, city }=props;
  
  return (
    <div>
    {
      country && city && 
        <div>
          <TempGraph data={props.fivedays}/>
          <WindGraph data={props.fivedays}/>
          <PressureGraph data={props.fivedays}/>
          <SeaLevelGraph data={props.fivedays}/>
        </div>
    }
    </div>
  )
}


export default FiveDaysWeather;