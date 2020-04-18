import * as actionTypes from './actionTypes';
import axios from 'axios';
import { statisticsAPI, covid19Headers, globalStatsAPI, dailyStatsAPI } from '../../utilities/api';



const fetchGlobalDataStart = () => {
    return{
        type: actionTypes.FETCH_GLOBAL_DATA_START,
        loading: true
    }
}

const fetchGlobalDataSuccess = (statistics, globalStats, dailyStats) => {
    return {
        type: actionTypes.FETCH_GLOBAL_DATA_SUCCESS,
        globalData: {
            statistics,
            globalStats,
            dailyStats
        }
    }
}

const fetchGlobalDataFail = (err) => {
    return{
        type: actionTypes.FETCH_GLOBAL_DATA_FAIL,
        error: err
    }
}

export const fetchGlobalData = () => {
    return dispatch => {
        const fetchStatistics = axios.get(statisticsAPI, covid19Headers);
        const fetchGlobalStats = axios.get(globalStatsAPI);
        const fetchDailyStats = axios.get(dailyStatsAPI);
        axios.all([fetchStatistics, fetchGlobalStats, fetchDailyStats])
            .then( res => {
                console.log(res);
                const statistics = res[0].data.response;
                const globalStats = [
                    res[1].data.confirmed,
                    res[1].data.recovered,
                    res[1].data.deaths,
                    res[1].data.lastUpdate
                ]
                const dailyStats = res[2].data;
                dispatch(fetchGlobalDataSuccess(statistics, globalStats, dailyStats));

            })
            .catch(err => fetchGlobalDataFail(err));
    }
}