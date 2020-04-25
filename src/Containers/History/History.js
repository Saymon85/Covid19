import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../../store/actions/index';
import HistoryOptions from '../../Components/HistoryOptions/HistoryOptions';
import Modal from '../../Components/Modal/Modal';
import classes from './History.module.css';
import { formatDate } from '../../utilities/utilities';
import HistoryCharts from '../../Components/HistoryGraphs/HistoryCharts/HistoryCharts';
import HistoryBar from '../../Components/HistoryGraphs/HistoryBar/HistoryBar';


class History extends Component {

    state = {
        selectedCountry: '',
        numOfDays: '',
        dateSelected: new Date(),
        dateDisabled: false,
        showGraphs: false,
        showModal: false,
        modalMessage: ''
    }

    onCountrySelect = (e, country) => {
      if(country){
        this.setState({selectedCountry: country});
      }else{
        this.setState({selectedCountry: ''});
      }  
    }

    onNumOfDaysSelected = (e) => {
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

    showGraphs = () => {
      if(this.state.dateDisabled){
        if(!this.state.selectedCountry){
          this.setState({showModal: true, modalMessage:'You must select country'});
        }else{ 
          const country = `country=${this.state.selectedCountry}`;
          this.props.getHistoryData(country);
          this.setState({showGraphs: true});
        }
      }else{
        if(!this.state.selectedCountry){
           this.setState({showModal: true, modalMessage:'You must select country'});
        }else{
           const date = new Date(this.state.dateSelected); 
           const dateFormated = formatDate(date);
           const country = `country=${this.state.selectedCountry}&day=${dateFormated}`;
           this.props.getHistoryData(country);
           this.setState({showGraphs: true});
        }
      }
    }

    modalClose = () => {
       this.setState({showModal: false, modalMessage: ''});
    }

    render() {
        const countryNames = this.props.statisticsData.map(item => item.country).sort();
        if(!this.props.loading){
          console.log(this.props.historyData);
          console.log(this.props.error);
        }
        return (
            <>
              {this.state.showModal 
                  ? <Modal 
                      show={this.state.showModal} 
                      message={this.state.modalMessage} 
                      handleClose={this.modalClose} 
                    /> 
                  : null
              }
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
                    <Button 
                      variant='contained' 
                      className={classes.showBtn}
                      onClick={this.showGraphs}
                    >
                      Show graphs
                    </Button>
                  </Grid>
                  <Grid container item direction='column'>
                     {  this.state.showGraphs && this.props.historyData
                          ? this.state.dateDisabled
                              ? <HistoryCharts data={this.props.historyData} numOfDays={this.state.numOfDays} /> 
                              : <HistoryBar data={this.props.historyData} />
                          : null 
                      }
                  </Grid>
              </Grid>
            </>    
        )
    }
}

const mapStateToProps = (state) => {
    return {
        statisticsData: state.global.statistics,
        loading: state.history.loading,
        historyData: state.history.historyData,
        error: state.history.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getHistoryData: (urlParams) => dispatch(actions.fetchHistoryData(urlParams))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(History, axios);


