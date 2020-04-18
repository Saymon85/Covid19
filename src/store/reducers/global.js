import * as actionTypes from '../actions/actionTypes';


const initialState = {
    
    dailyStats: null,
    globalStats: null,
    statistics: null,
    loading: true,
    error: null

}

const fetchGlobalDataStart = (state) => {
    return {
        ...state,
        loading: true
    }
}

const fetchGlobalDataSuccess = (state, data) => {
    return {
        ...state,
        dailyStats: data.dailyStats,
        globalStats: data.globalStats,
        statistics: data.statistics,
        loading: false
    }
}

const fetchGlobalDataFail = (state, err) => {
    return {
        ...state,
        error: err
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_GLOBAL_DATA_START:
            return fetchGlobalDataStart(state);
        case actionTypes.FETCH_GLOBAL_DATA_SUCCESS:
            return fetchGlobalDataSuccess(state, action.globalData);
        case actionTypes.FETCH_GLOBAL_DATA_FAIL:
            return fetchGlobalDataFail(state, action.error);
        default: return state;            
    } 
}

export default reducer;