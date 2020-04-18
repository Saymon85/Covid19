import React from 'react';
import { Grid } from '@material-ui/core';
import { Bar } from 'react-chartjs-2';

function CountryChart(props) {
    const {active, recovered } = props.countryStats[0].cases;
    const { country, deaths, day} = props.countryStats[0];
    const data = {
        labels: ['Active', 'Recovered', 'Deaths'],
        datasets: [
            {
                label: `Bar chart stats for ${country} on ${new Date(day).toDateString()}`,
                backgroundColor: ['#536dfe','#69f0ae', '#e57373'],
                data:[active, recovered, deaths.total]
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

export default CountryChart;
