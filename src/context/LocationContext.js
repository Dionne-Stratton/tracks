import createDataContex from './createDataContext'

const locationReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const startRecording = dispatch => () => {}
const stopRecording = dispatch => () => {}
const addLocation = dispatch => () => {}

export const { Context, Provider } = createDataContex(
    locationReducer,
    { startRecording, stopRecording, addLocation },
    { recording: false, locations: [], currentLocation: null }
)