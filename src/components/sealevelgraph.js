import React from 'react';
import Plot from 'react-plotly.js';

 const SeaLevelGraph = (props) => {
     const {data }=props;
     let timestamp=[];
     let sealevel =[];
 
     if(data){
         data.forEach((e,i) => { 
         timestamp[i] = new Date(e.dt*1000);
         sealevel[i]= e.main.sea_level;
     })
    }
    let max = Math.max(...sealevel);
    let min = Math.min(...sealevel);
    console.log('time',timestamp)
    console.log('sealevel',sealevel)
    console.log('max',min)
    console.log('min',max)
    
  return (
    <div>
      <Plot
        data={[
          {
            x: timestamp,
            y: sealevel,
            type: 'scatter',
            mode: 'lines+points',
            line: {shape: 'spline'},
            marker: {color: '#735696'},
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
                width: 350, height: 300, title: 'Sea level (hPa)',
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

export default SeaLevelGraph;