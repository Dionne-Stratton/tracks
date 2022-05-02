import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker'

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload}
        default:
            return state
    }
}

const signup = (dispatch) => {
    return async ({email, password}) => {
        try {
            const response = await trackerApi.post('/auth/signup', {email, password})
            console.log(response.data)
        } catch (error) {
            dispatch({type: 'add_error', payload: "Email already registered."})
        }
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
    {isSignedIn: false, errorMessage: ''}
)