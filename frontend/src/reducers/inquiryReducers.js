import {
    INQUIRY_REQUEST,
    INQUIRY_SUCCESS,
    INQUIRY_FAIL,
    LIST_INQUIRY_REQUEST,
    LIST_INQUIRY_SUCCESS,
    LIST_INQUIRY_FAIL,
    CLEAR_ERRORS
} from '../constants/inquiryConstants'

export const newInquiryReducer = (state = {}, action) => {
    switch(action.type){
        
        case INQUIRY_REQUEST:
            return {
                ...state,
                loading: true,
                //error: undefined
            }

        case INQUIRY_SUCCESS:
            return {
                loading: false,
                success: action.payload
            }

        case INQUIRY_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
                //error: undefined
            }
        
        default:
            return state
    }
}

export const listInquiryReducer = (state = {inquiries: []}, action) => {
    switch (action.type) {

        case LIST_INQUIRY_REQUEST:
            return {
                loading: true,
            }

        case LIST_INQUIRY_SUCCESS:
            return{
                loading: false,
                inquiries: action.payload
            }

        case LIST_INQUIRY_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
                //error: undefined
            }
        
        default:
            return state
    }
}