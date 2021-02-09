import axios from 'axios'
import {
    INQUIRY_REQUEST,
    INQUIRY_SUCCESS,
    INQUIRY_FAIL,
    LIST_INQUIRY_REQUEST,
    LIST_INQUIRY_SUCCESS,
    LIST_INQUIRY_FAIL,
    CLEAR_ERRORS
} from '../constants/inquiryConstants'

export const createInquiry = ( inquiry ) => async (dispatch, getState) => {
    try {
        dispatch({
            type: INQUIRY_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/v1/inquiry/new', inquiry, config)

        dispatch({
            type: INQUIRY_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: INQUIRY_FAIL,
            payload: error.response.data.message
        })
    }
}

//Get 
export const listInquiry = () => async (dispatch) => {
    try{
        dispatch({
            type: LIST_INQUIRY_REQUEST
        })

        const { data } = await axios.get('/api/v1/admin/inquiries')

        dispatch({
            type: LIST_INQUIRY_SUCCESS,
            payload: data.inquiries
        })
    }
    catch(error){
        dispatch({
            type: LIST_INQUIRY_FAIL,
            payload: error.response.data.message
        })
    }
}

//clear errors
export const clearErrors = () => async(dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}