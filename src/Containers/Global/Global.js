import React, { Component } from 'react';
import { Grid, CircularProgress} from '@material-ui/core';
import Cards from '../../Components/Cards/Cards';
import Chart from '../../Components/Chart/Chart';
import DataTable from '../../Components/Table/Table';
import { fetchGlobalData } from '../../store/actions/global';
import axios from 'axios';
import { connect } from 'react-redux';

class Global extends Component {

    componentDidMount(){
        if(!this.props.globalStats){
          this.props.getGlobalData();
        }
    }

    render() {
  
        const { globalStats, dailyStats, statistics, loading } = this.props;
        let global = <CircularProgress />;
        if(!loading){
            global = (   
                <Grid 
                   container
                   direction='column' 
                >
                   <Cards globalStats={globalStats}/>
                   <Chart dailyStats={dailyStats}/>
                   <DataTable statistics={statistics}/>  
                </Grid>
            )
        }
        return <div>{global}</div> ;
    }
}

const mapStateToProps = (state) => {
    return {
        globalStats: state.global.globalStats,
        dailyStats: state.global.dailyStats,
        statistics: state.global.statistics,
        loading: state.global.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getGlobalData: () => dispatch(fetchGlobalData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Global, axios);
