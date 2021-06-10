import * as actionTypes from './actionTypes';

export const Filter = (state = {
    isDetailVisible: false,
    textFilterValue: null
}, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_FILTER_DETAIL:
            return {...state, isDetailVisible: action.payload}
        case actionTypes.TEXT_FILTER_CHANGED:
            return {...state, textFilterValue: action.payload}
        default:
            return state;
    }
}