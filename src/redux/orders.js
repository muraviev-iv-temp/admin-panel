import * as actionTypes from "./actionTypes";
export const Orders = (state = {
    orders: [],
    isLoading: false
}, action) => {
    switch (action.type) {
        case actionTypes.ORDERS_LOADING_STARTED:
            return { ...state, orders: [], isLoading: true }
        case actionTypes.ORDERS_LOADING_SUCCEED:
            return { ...state, orders: action.payload.orders, isLoading: false }
        case actionTypes.ORDERS_LOADING_FAILED:
            return { ...state, orders: [], isLoading: false }
        default:
            return state;
    }
}