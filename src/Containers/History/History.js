import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import axios from 'axios';
import HistoryOptions from '../../Components/HistoryOptions/HistoryOptions';
import classes from './History.module.css';


class History extends Component {

    state = {
        selectedCountry: '',
        numOfDays: 0,
        dateSelected: new Date().toDateString(),
        dateDisabled: false
    }

    onCountrySelect = (e, country) => {
        if(country){
          this.setState({selectedCountry: country});
        }else{
          this.setState({selectedCountry: ''});
        }  
    }

    onNumOfDaysSelected = (e) => {
        console.log(e.target.value);
        if(e.target.value){
           this.setState({
             numOfDays: e.target.value,
             dateDisabled: true
           })
        }else{
           this.setState({
             numOfDays: e.target.value,
             dateDisabled: false
           })
        }
    }

    onDateSelected = (date) => {
        this.setState({dateSelected: date.toDateString()});
    }
    
    render() {
        const countryNames = this.props.statisticsData.map(item => item.country).sort();

        return (
            <Grid container direction='column' className={classes.wrap}>
                <HistoryOptions
                  countryNames={countryNames}
                  onCountrySelect={this.onCountrySelect}
                  numOfDays={this.state.numOfDays}
                  onNumOfDaysSelected={this.onNumOfDaysSelected}
                  dateDisabled={this.state.dateDisabled}
                  dateSelected={this.state.dateSelected}
                  onDateSelected={this.onDateSelected} 
                />
                <Grid container item justify='center'>
                   <Button variant='contained' className={classes.showBtn} >Show graphs</Button>
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        statisticsData: state.global.statistics
    }
}

export default connect(mapStateToProps)(History, axios);


//style={{backgroundColor: '#42a5f5'}}