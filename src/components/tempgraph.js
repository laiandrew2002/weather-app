import React from 'react';
import Plot from 'react-plotly.js';

 const TempGraph = (props) => {
     const { data }=props

    let timestamp=[];
    let temperature = [];
    
    if(data){
        data.forEach((e,i) =>{
            timestamp[i] = new Date(e.dt*1000);
            temperature[i]=Math.round(e.main.temp-273.15);
        })
    }

    let max = Math.max(...temperature);
    let min = Math.min(...temperature);
    console.log('time',timestamp)
    console.log('temp',temperature)
    console.log('max',min)
    console.log('min',max)

  return (
    <div>
      <Plot
        data={[
          {
            x: timestamp,
            y: temperature,
            type: 'scatter',
            mode: 'lines',
            line: {shape: 'spline'},
            marker: {color: '#0380C2'},
          },
        //   {type: 'bar', x: timestamp, y: temperature},
        ]}

        layout={
                {   
                paper_bgcolor:'rgba(0,0,0,0)',
                plot_bgcolor:'rgba(0,0,0,0)', 
                'xaxis': {
                    // 'tickformat': '%I/%M'
                }, 
                'yaxis': {range: [min-1, max+1]},
                width: 350, height: 300, title: 'Temperature (°C)',
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

export default TempGraph;