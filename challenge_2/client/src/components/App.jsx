import React, { useState, useEffect } from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState({})

  useEffect(() => {
      axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-05')
      .then((data) => {
        const state = {
          labels: ['2013-09-01', '2013-09-02', '2013-09-03',
                   '2013-09-04', '2013-09-05'],
          datasets: [
            {
              label: 'Closing Price in USD',
              fill: false,
              lineTension: 0.5,
              backgroundColor: 'rgba(229,218,218,1)',
              borderColor: 'rgba(0,0,0,1)',
              borderWidth: 2,
              data: [data.data.bpi['2013-09-01'], data.data.bpi['2013-09-02'], data.data.bpi['2013-09-03'], data.data.bpi['2013-09-04'], data.data.bpi['2013-09-05']]
            }
          ]
        }
        setData(state);
      })
  }, [])


  return (
    <>
      <Line
        data={data}
        options={{
          title:{
            display:true,
            text:'Bitcoin Closing Price',
            fontSize:20
          },
          legend:{
            display:true,
            position:'right'
          }
        }}
      />
    </>
  )
}

export default App;

