import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../../store/actions/index';
import {  Grid, CircularProgress,  TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CountryCards from '../../Components/Cards/CountryCards/CountryCards';
import CountryChart from '../../Components/Chart/CountryChart/CountryChart';

class Country extends Component {

    state = {
        selected: false
    }

    onCountrySelect = (e,country) => {
        this.props.getCountryData(country);
        this.setState({selected: true});
    }

    render() {
        const countryNames = this.props.statisticsData.map(item => item.country).sort();

        return (
            <Grid container direction='column'>
              <Grid item style={{textAlign: 'center', marginTop: '20px'}}> 
                <Autocomplete
                  id='country-select'
                  style={{width: 250, margin:'0 auto'}}
                  size='small'
                  options={countryNames}
                  option={{fontSize: 12}}
                  autoHighlight
                  renderOption= {(option) => (
                     <>
                       {option}
                     </>
                  )}
                  onChange={(event, country) => this.onCountrySelect(event, country)}
                  renderInput={(params) => (
                     <TextField 
                        {...params}
                        label='Choose a country'
                        variant='standard'
                        inputProps={{
                           ...params.inputProps
                        }}
                     />   
                   )}
                />
              </Grid>
              {   this.state.selected 
                   ? this.props.loading 
                        ? <CircularProgress/>
                        : <>
                            <CountryCards countryStats = {this.props.countryStats} />
                            <CountryChart countryStats = {this.props.countryStats} />
                          </>  
                   : null
              }              
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        countryStats: state.country.countryStats,
        loading: state.country.loading,
        statisticsData: state.global.statistics
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCountryData: (country) => dispatch(actions.fetchCountryData(country))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Country, axios);


//<div>{this.props.countryStats[0].country}</div>