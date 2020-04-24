import * as actionTypes from './actionTypes';
import axios from 'axios';
import { historyAPI, covid19Headers } from '../../utilities/api';


const fetchHistoryDataStart = () => {
    return {
        type: actionTypes.FETCH_HISTORY_START
    }
}

const fetchHistoryDataSuccess = (data) => {
    return {
        type: actionTypes.FETCH_HISTORY_SUCCESS,
        data: data
    }
}

const fetchHistoryDataFail = (err) => {
    return{
        type: actionTypes.FETCH_HISTORY_FAIL,
        error: err
    }
}

export const fetchHistoryData = (urlParams) => {
    const url = historyAPI + urlParams;
    fetchHistoryDataStart();
    return dispatch => {
        axios.get(url, covid19Headers)
          .then(res => {
             console.log(res);
             dispatch(fetchHistoryDataSuccess(res.data.response))})
          .catch(err => dispatch(fetchHistoryDataFail(err))) 
    }
}