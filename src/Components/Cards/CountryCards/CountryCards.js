import React from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import CountUp from 'react-countup';
import classes from './CountryCards.module.css';
import cx from 'classnames';

const CountryCards = (props) => {
    const {active, recovered } = props.countryStats[0].cases;
    const { deaths, tests, day} = props.countryStats[0];
    console.log(active, recovered, deaths, tests, day);
    /* if(props.countryStats){
        console.log(props.countryStats[0]);
    } */
    
    return (
        <div className={classes.container}> 
          <Grid container item spacing={3} justify='center'>
             <Grid item component={Card} xs={12} sm={3} md className={cx(classes.card, classes.confirmed)}>
                <CardContent>
                    <Typography color='textSecondary' gutterBottom>Infected</Typography>
                    <Typography variant='h5'>
                        <CountUp start={0} end={active} duration={3.5} separator=','></CountUp>
                    </Typography>
                    <Typography color='textSecondary'>
                        {new Date(day).toDateString()}  
                    </Typography>
                    <Typography variant='body2'>Number of active cases of COVID19</Typography>
                </CardContent>
             </Grid>
             <Grid item component={Card} xs={12} sm={3} md className={cx(classes.card, classes.recovered)}>
                <CardContent>
                    <Typography color='textSecondary' gutterBottom>Recovered</Typography>
                    <Typography variant='h5'>
                        <CountUp start={0} end={recovered} duration={3.5} separator=','></CountUp>
                    </Typography>
                    <Typography color='textSecondary'>
                        {new Date(day).toDateString()} 
                    </Typography>
                    <Typography variant='body2'>Number of recovered from COVID19</Typography>
                </CardContent>
             </Grid>
             <Grid item component={Card} xs={12} sm={3} md className={cx(classes.card, classes.deaths)}>
                <CardContent>
                    <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                    <Typography variant='h5'>
                        <CountUp start={0} end={deaths.total} duration={3.5} separator=','></CountUp>
                    </Typography>
                    <Typography color='textSecondary'>
                        {new Date(day).toDateString()}  
                    </Typography>
                    <Typography variant='body2'>Number of died from COVID19</Typography>
                </CardContent>
             </Grid>
             <Grid item component={Card} xs={12} sm={3}  md className={cx(classes.card, classes.tested)}>
                <CardContent>
                    <Typography color='textSecondary' gutterBottom>Tested</Typography>
                    <Typography variant='h5'>
                        <CountUp start={0} end={tests.total} duration={3.5} separator=','></CountUp>
                    </Typography>
                    <Typography color='textSecondary'>
                        {new Date(day).toDateString()}  
                    </Typography>
                    <Typography variant='body2'>Number of tested people of COVID19</Typography>
                 </CardContent>
             </Grid>
           </Grid>
        </div>
    )
}

export default CountryCards;
