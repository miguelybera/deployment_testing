
import {
    UPDATE_HOME_REQUEST,
    UPDATE_HOME_SUCCESS,
    UPDATE_HOME_FAIL,
    UPDATE_HOME_RESET,
    GET_HOME_REQUEST,
    GET_HOME_SUCCESS,
    GET_HOME_FAIL,
    CLEAR_ERRORS
} from '../constants/websiteConstants'

export const homeDetailsReducer = (state = {home: {} }, action ) => {
    switch(action.type) {
        case GET_HOME_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_HOME_SUCCESS:
            return {
                loading: false,
                home: action.payload
            }
        case GET_HOME_FAIL:
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

export const websiteReducer = (state = {}, action) => {
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