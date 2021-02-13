import {
//     UPDATE_HOME_REQUEST,
//     UPDATE_HOME_SUCCESS,
//     UPDATE_HOME_FAIL,
//     UPDATE_HOME_RESET,
    HOME_DETAILS_REQUEST,
    HOME_DETAILS_SUCCESS,
    HOME_DETAILS_FAIL,
    CLEAR_ERRORS
} from '../constants/websiteConstants'

//get home details
export const homeDetailsReducer = (state = { home: {} }, action) => {
    switch(action.type){

        case HOME_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }
        
        case HOME_DETAILS_SUCCESS:
            return {
                loading: false,
                home: action.payload
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