import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload}
        case 'signup':
            return {errorMessage: '', token: action.payload}
        default:
            return state
    }
}

const signup = dispatch => async ({email, password}) => {
        try {
            const response = await trackerApi.post('/auth/signup', {email, password})
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({type: 'signup', payload: response.data.token})
            navigate('TrackList')
        } catch (error) {
            dispatch({type: 'add_error', payload: "Email already registered."})
        }
    }

const signin = (dispatch) => {
    return async ({email, password}) => {
        try {
            const response = await trackerApi.post('/auth/signup', {email, password})
            console.log(response.data)
        } catch (error) {
            console.log(error.message)
        }
    }
}

const signout = (dispatch) => {
    return () => {
        
    }
}

export const {Provider, Context} = createDataContext(
    authReducer,
    {signin, signout, signup},
    {token: null, errorMessage: ''}
)