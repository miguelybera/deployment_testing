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

        const { data } = await axios.get('/api/v1/homepage')

        dispatch({
            type: HOME_DETAILS_SUCCESS,
            payload: data.homePage
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

// Update home (ADMIN)
export const updateHome = (homeData) => async(dispatch) => {
    try{
        dispatch({
            type: UPDATE_HOME_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        const { data } = await axios.put(`/api/v1/admin/updatehome`, homeData, config)

        dispatch({
            type: UPDATE_HOME_SUCCESS,
            payload: data.success
        })
    }
    catch(error){
        dispatch({
            type: UPDATE_HOME_FAIL,
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