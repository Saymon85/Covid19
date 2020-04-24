import * as actionTypes from '../actions/actionTypes';


const initialState = {
    historyData: [],
    loading: false,
    error: null
}

const fetchHistoryDataStart = (state) => {
    return {
        ...state,
        loading: true
    }
}

const fetchHistoryDataSuccess = (state, data) => {
    return {
        ...state,
        historyData: data,
        loading: false
    }
}

const fetchHistoryDataFail = (state, error) => {
    return {
        ...state,
        loading: false,
        error: error
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_HISTORY_START:
            return fetchHistoryDataStart(state);
        case actionTypes.FETCH_HISTORY_SUCCESS:
            return fetchHistoryDataSuccess(state, action.data);
        case actionTypes.FETCH_HISTORY_FAIL:
            return fetchHistoryDataFail(state, action.error);
        default: return state;        
    }
}

export default reducer;