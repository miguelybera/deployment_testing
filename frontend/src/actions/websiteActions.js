import axios from 'axios'
import { 
    UPDATE_HOME_REQUEST,
    UPDATE_HOME_SUCCESS,
    UPDATE_HOME_FAIL,
    GET_HOME_REQUEST,
    GET_HOME_SUCCESS,
    GET_HOME_FAIL,

    CLEAR_ERRORS
} from '../constants/websiteConstants'

// Get home details
export const getHomeDetails = () => async(dispatch) => {

    // const id = '6020a10c2c9185106868088e';

    try{
        dispatch({
            type: GET_HOME_REQUEST
        })

        const { data } = await axios.get(`/api/v1/home`)

        dispatch({
            type: GET_HOME_SUCCESS,
            payload: data.home
        })
    }
    catch(error){
        dispatch({
            type: GET_HOME_FAIL,
            payload: error.response.data.message
            }
        )
    }
}

// Update home (ADMIN)
export const updateHome = (homeData) => async(dispatch) => {

    const id = '6020a10c2c9185106868088e';

    try{
        dispatch({
            type: UPDATE_HOME_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        const { data } = await axios.put(`/api/v1/admin/home/${id}`, homeData, config)

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