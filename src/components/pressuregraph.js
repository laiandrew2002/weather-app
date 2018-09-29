import React from 'react';
import Plot from 'react-plotly.js';

 const PressureGraph = (props) => {
     const {data }=props
     let timestamp=[];
     let pressure =[];
     
 
     if(data){
         data.forEach((e,i) =>{
         timestamp[i] = new Date(e.dt*1000);
         pressure[i]=e.main.pressure;
         
     })
    }
    let max = Math.max(...pressure);
    let min = Math.min(...pressure);
    console.log('time',timestamp)
    console.log('pressure',pressure)
    console.log('max',min)
    console.log('min',max)
    
  return (
    <div>
      <Plot
        data={[
          {
            x: timestamp,
            y: pressure,
            type: 'scatter',
            mode: 'lines+points',
            line: {shape: 'spline'},
            marker: {color: '#CE641E'},
          },
        //   {type: 'bar', x: time, y: pressure},
        ]}

        layout={ 
            {
                paper_bgcolor:'rgba(0,0,0,0)',
                plot_bgcolor:'rgba(0,0,0,0)', 
                'xaxis': {
                    // 'tickformat': '%I/%M'
                }, 
                'yaxis': {range: [min, max]},
                width: 350, height: 300, title: 'Pressure (hPa)',
                margin: {
                  l: 30,
                  r: 30,
                  b: 50,
                  t: 50,
                  pad: 4
                }, 
            } 
        }
        config={{'displayModeBar': false}}
      />
    </div>
  )
}

export default PressureGraph;