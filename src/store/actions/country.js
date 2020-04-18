import * as actionTypes from './actionTypes';
import axios from 'axios';
import { statisticsAPI, covid19Headers } from '../../utilities/api';


const fetchCountryDataStart = () => {
    return {
        type: actionTypes.FETCH_COUNTRY_DATA_START,
        loading: true
    }
}

const fetchCountryDataSuccess = (countryData) => {
    return {
        type: actionTypes.FETCH_COUNTRY_DATA_SUCCESS,
        countryData: countryData
    }
}

const fetchCountryDataFail = (err) => {
    return {
        type: actionTypes.FETCH_COUNTRY_DATA_FAIL,
        error: err
    }
}

export const fetchCountryData = (country) => {
    const url = statisticsAPI + '?country=' + country;
    return dispatch => {
        axios.get(url, covid19Headers)
            .then(res => {
                dispatch(fetchCountryDataSuccess(res.data.response));
            })
            .catch(err => fetchCountryDataFail(err));
    }
}