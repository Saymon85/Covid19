import React from 'react';
import { Line } from 'react-chartjs-2';
import { Grid } from '@material-ui/core';


const Chart = (props) => {

    const { dailyStats } = props; 
    const dates = dailyStats.map(day => day.reportDate);
    const confirmed = dailyStats.map(day => day.confirmed.total);
    const deaths = dailyStats.map(day => day.deaths.total);

    return (
        <Grid xs={12} item style={{width: '70%', margin: '0 auto'}}>
          <Line
            data={{
              labels: dates,
              datasets:[
                {
                    label: 'Deaths', 
                    data: deaths,
                    borderColor: '#f44336',
                    backgroundColor: '#ffcdd2',
                    fill: true
                  },
                  {
                      label: 'Infected', 
                      data:confirmed, 
                      borderColor:'#2962ff',
                      backgroundColor: '#bbdefb',
                      fill: true
                  }
                ]
              }} 
            />
        </Grid>
    );
}

export default Chart;