import axios from 'axios'
import { 
    UPDATE_HOME_REQUEST,
    UPDATE_HOME_SUCCESS,
    UPDATE_HOME_FAIL,
    HOME_DETAILS_REQUEST,
    HOME_DETAILS_SUCCESS,
    HOME_DETAILS_FAIL,

    CLEAR_ERRORS
} from '../constants/websiteConstants'

// Get home details
export const getHomeDetails = () => async(dispatch) => {
    try{
        dispatch({
            type: HOME_DETAILS_REQUEST
        })

        const { data } = await axios.get('/api/v1/home')

        dispatch({
            type: HOME_DETAILS_SUCCESS,
            payload: data.homepage
        })
    }
    catch(error){
        dispatch(
            {
                type: HOME_DETAILS_FAIL,
                payload: error.response.data.message
            }
        )
    }
}



//clear errors
export const clearErrors = () => async(dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}