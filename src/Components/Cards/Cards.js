import React from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import CountUp from 'react-countup';
import classes from './Cards.module.css';
import cx from 'classnames';

const Cards = (props) => {
    return (
        <div className={classes.container}> 
          <Grid container item spacing={3} xs={12} justify='center'>
             <Grid item component={Card} xs={12} sm={3} className={cx(classes.card, classes.confirmed)}>
                 <CardContent>
                     <Typography color='textSecondary' gutterBottom>Infected</Typography>
                     <Typography variant='h5'>
                         <CountUp start={0} end={props.globalStats[0].value} duration={2.5} separator=','></CountUp>
                      </Typography>
                     <Typography color='textSecondary'>
                         {new Date(props.globalStats[3]).toLocaleString()}
                     </Typography>
                     <Typography variant='body2'>Number of active cases of COVID19</Typography>
                 </CardContent>
             </Grid>
             <Grid item component={Card} xs={12} sm={3} className={cx(classes.card, classes.recovered)}>
                 <CardContent>
                     <Typography color='textSecondary' gutterBottom>Recovered</Typography>
                     <Typography variant='h5'>
                       <CountUp start={0} end={props.globalStats[1].value} duration={3.5} separator=','></CountUp>
                     </Typography>
                     <Typography color='textSecondary'>{new Date(props.globalStats[3]).toDateString()}</Typography>
                     <Typography variant='body2'>Number of recovered from COVID19</Typography>
                 </CardContent>
             </Grid>
             <Grid item component={Card} xs={12} sm={3} className={cx(classes.card, classes.deaths)}>
                 <CardContent>
                     <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                     <Typography variant='h5'>
                       <CountUp start={0} end={props.globalStats[2].value} duration={2.5} separator=','></CountUp>
                     </Typography>
                     <Typography color='textSecondary'>{new Date(props.globalStats[3]).toDateString()}</Typography>
                     <Typography variant='body2'>Number of died from COVID19</Typography>
                 </CardContent>
             </Grid>
          </Grid>
        </div>
    )
}

export default Cards;