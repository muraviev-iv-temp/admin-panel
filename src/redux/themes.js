import * as actionTypes from './actionTypes';

export const Themes = (state = {
    allThemes: [],
    errorMessage: null,
    isLoading: true,
    currentTheme: {
        id: 1,
        name: 'light',
        title: 'Светлая',
        icon: 'Sun' 
    }
}, action) => {
    switch (action.type) {
        case actionTypes.THEMES_LOADING_STARTED:
            return {...state, isLoading: true, allThemes: []}
        case actionTypes.THEMES_LOADING_SUCCEED:
            return {...state, isLoading: false, allThemes: action.payload.allThemes}
        case actionTypes.THEMES_LOADING_FAILED:
            return {...state, isLoading: false, errorMessage: action.payload}
        case actionTypes.APPLY_THEME:
            return {...state, currentTheme: action.payload}
        default:
            return state;
    }
}