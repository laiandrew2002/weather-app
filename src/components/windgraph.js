import React from 'react';
import Plot from 'react-plotly.js';

 const WindGraph = (props) => {
     const { data }=props;
     let timestamp=[];
   
     let wind = [];
 
     if(data){
         data.forEach((e,i) =>{
         timestamp[i] = new Date(e.dt*1000);
         wind[i]=e.wind.speed;
     })
    }
    let max = Math.max(...wind);
    let min = Math.min(...wind);
    console.log('time',timestamp)
    console.log('wind',wind)
    console.log('max',min)
    console.log('min',max)


  return (
    <div>
      <Plot
        data={[
          {
            x: timestamp,
            y: wind,
            type: 'scatter',
            mode: 'lines+points',
            line: {shape: 'spline'},
            marker: {color: '#3E9106'},
          },
        ]}
        layout={ 
            {
                paper_bgcolor:'rgba(0,0,0,0)',
                plot_bgcolor:'rgba(0,0,0,0)', 
                'xaxis': {
                    // 'tickformat': '%I/%M'
                }, 
                'yaxis': {range: [min, max]},
                width: 350, height: 300, title: 'Wind Speed (m/s)',
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

export default WindGraph;