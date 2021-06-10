import { sendRequest } from '../common/utils';
import * as actionTypes from './actionTypes';


export const fetchThemes = () => 
    dispatch => {
        dispatch(fetchThemesStarted());
        sendRequest({
            get: ['themes']
        }).then(response => {
            response.json().then(r => {
                dispatch(fetchThemesSucceed(r.themes))
            }).catch(e => console.log(e))
        }).catch(error => {
            dispatch(fetchThemesFailed(error))
        })
    }

const fetchThemesStarted = () => ({
    type: actionTypes.THEMES_LOADING_STARTED
})

const fetchThemesSucceed = (allThemes) => ({
        type: actionTypes.THEMES_LOADING_SUCCEED,
        payload: { isLoading: false, allThemes }
    }
)

const fetchThemesFailed = (error) => ({
    type: actionTypes.THEMES_LOADING_FAILED
})

export const applyTheme = (theme) => {
    return {
        payload: theme,
        type: actionTypes.APPLY_THEME
    }
}

//////////////////////////////////////////////

export const toggleFilterDetail = (isVisible) => ({
    payload: isVisible,
    type: actionTypes.TOGGLE_FILTER_DETAIL
})


/////////////////////////////////////////////
export const fetchColumns = () => 
    dispatch => {
        dispatch(fetchColumnsStarted());
        sendRequest({
            get: ['columns']
        }).then(response => {
            response.json().then(r => {
                dispatch(fetchColumnsSucceed(r.columns))
            }).catch(e => console.log(e))
        }).catch(error => {
            dispatch(fetchColumnsFailed(error))
        })
    }

const fetchColumnsStarted = () => ({
    type: actionTypes.COLUMNS_LOADING_STARTED
})

const fetchColumnsSucceed = (columns) => ({
        type: actionTypes.COLUMNS_LOADING_SUCCEED,
        payload: { isLoading: false, columns: columns }
    }
)

const fetchColumnsFailed = (error) => ({
    type: actionTypes.COLUMNS_LOADING_FAILED
})

///////////////////////////////////////////

export const fetchOrders = () => 
    dispatch => {
        dispatch(fetchOrdersStarted());
        sendRequest({
            get: ['orders']
        }).then(response => {
            response.json().then(r => {
                dispatch(fetchOrdersSucceed(r.orders))
            }).catch(e => console.log(e))
        }).catch(error => {
            dispatch(fetchOrdersFailed(error))
        })
    }

const fetchOrdersStarted = () => ({
    type: actionTypes.ORDERS_LOADING_STARTED
})

const fetchOrdersSucceed = (orders) => ({
        type: actionTypes.ORDERS_LOADING_SUCCEED,
        payload: { isLoading: false, orders }
    }
)

const fetchOrdersFailed = (error) => ({
    type: actionTypes.ORDERS_LOADING_FAILED
})

