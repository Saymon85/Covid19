import React from 'react';
import { Line } from 'react-chartjs-2';
import { Grid } from '@material-ui/core';
import { removeItems } from '../../../utilities/utilities';
import classes from './HistoryCharts.module.css';

const HistoryCharts = (props) => {
    console.log(props.data);
    const filteredData = removeItems(props.data, props.numOfDays);
    const dates = filteredData.map(item => item.day);
    const totalCases = filteredData.map(item => item.cases.total);
    const activeCases = filteredData.map(item => item.cases.active);
    const recovered = filteredData.map(item => item.cases.recovered);
    const deaths = filteredData.map(item => item.deaths.total);

    return (
        <>
            <Grid container item spacing={1} justify='center' className={classes.wrap}>
                <Grid item xs={12} sm={12} md={6} className={classes.graph}>
                    <Line
                       data={{
                          labels: dates,
                          datasets:[
                           {
                             label: 'Total Confirmed', 
                             data: totalCases,
                             borderColor: '#2962ff',
                             backgroundColor: '#bbdefb',
                             fill: true
                           }
                         ]
                       }}  
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} className={classes.graph}>
                   <Line
                      data={{
                        labels: dates,
                        datasets:[
                         {
                           label: 'Total Recovered', 
                           data: recovered,
                           borderColor: '#00e676',
                           backgroundColor: '#b9f6ca',
                           fill: true
                         }
                       ]
                     }}  
                   />
                </Grid>      
            </Grid>
            <Grid container item spacing={2} justify='center' className={classes.wrap}>
                <Grid item xs={12} sm={12} md={6} className={classes.graph}>
                    <Line
                       data={{
                         labels: dates,
                         datasets:[
                          {
                            label: 'Total Deaths', 
                            data: deaths,
                            borderColor: '#f44336',
                            backgroundColor: '#ffcdd2',
                            fill: true
                          }
                        ]
                       }}  
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} className={classes.graph}>
                    <Line
                       data={{
                         labels: dates,
                         datasets:[
                          {
                            label: 'Total Active', 
                            data: activeCases,
                            borderColor: '#ff9800',
                            backgroundColor: '#ffcc80',
                            fill: true
                          }
                        ]
                       }}  
                    />
                </Grid>      
            </Grid>
        </>
    )
}

export default HistoryCharts;