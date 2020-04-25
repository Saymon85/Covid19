import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Grid } from '@material-ui/core';

const HistoryBar = (props) => {
    const { active, recovered, total } = props.data[0].cases;
    const { country, deaths, day} = props.data[0];
    const data = {
        labels: ['Total Cases', 'Recovered', 'Deaths', 'Active'],
        datasets: [
            {
               label: `Bar chart stats for ${country} on ${new Date(day).toDateString()}`,
               backgroundColor: ['#536dfe','#69f0ae', '#e57373', '#ff9800'],
               data:[total, recovered, deaths.total, active]
            }
        ]

    }

    return (
        <Grid item style={{width: '80%', margin:'20px auto'}}>
            <Bar
              data={data}
              width={100}
              height={500}
              options={{
                 maintainAspectRatio: false
             }}
            />                 
        </Grid>
    )
}

export default HistoryBar;