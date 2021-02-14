import {
    UPDATE_HOME_REQUEST,
    UPDATE_HOME_SUCCESS,
    UPDATE_HOME_FAIL,
    UPDATE_HOME_RESET,
    HOME_DETAILS_REQUEST,
    HOME_DETAILS_SUCCESS,
    HOME_DETAILS_FAIL,
    CLEAR_ERRORS
} from '../constants/websiteConstants'

//get home details
export const homeDetailsReducer = (state = { homePage: {} }, action) => {
    switch(action.type){

        case HOME_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }
        
        case HOME_DETAILS_SUCCESS:
            return {
                loading: false,
                homePage: action.payload
            }

        case HOME_DETAILS_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
            
        default:
            return state
    }
}

export const homeReducer = (state = {}, action) => {
    switch(action.type){

        case UPDATE_HOME_REQUEST:
            return {
                ...state,
                loading: true
            }
        
        case UPDATE_HOME_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }

        case UPDATE_HOME_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case UPDATE_HOME_RESET:
            return {
                ...state,
                isUpdated: false
            }
            
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
            
        default:
            return state
    }
}