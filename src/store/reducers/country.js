import * as actionTypes from '../actions/actionTypes';

const initialState = {
    countryStats: null,
    loading: true,
    error: null
}

const fetchCountryDataStart = (state) => {
    return {
        ...state,
        loading: true
    }
}

const fetchCountryDataSuccess = (state, countryData) => {
    return {
        ...state,
        countryStats: countryData,
        loading: false
    }
}

const fetchCountryDataFail = (state, error) => {
    return {
        ...state,
        error: error
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_COUNTRY_DATA_START:
            return fetchCountryDataStart(state);
        case actionTypes.FETCH_COUNTRY_DATA_SUCCESS:
            return fetchCountryDataSuccess(state, action.countryData);
        case actionTypes.FETCH_COUNTRY_DATA_FAIL:
            return fetchCountryDataFail(state, action.error);
        default: return state;            
    }
}

export default reducer;