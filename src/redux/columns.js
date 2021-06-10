import * as actionTypes from "./actionTypes";

export const Columns = (state = {
    columns: [],
    isLoading: false
}, action) => {
    switch (action.type) {
        case actionTypes.COLUMNS_LOADING_STARTED:
            return { ...state, columns: [], isLoading: true }
        case actionTypes.COLUMNS_LOADING_SUCCEED:
            return { columns: action.payload?.columns, isLoading: false }
        case actionTypes.COLUMNS_LOADING_FAILED:
            return { ...state, columns: [], isLoading: false }
        default:
            return state;
    }
    
}