import CreateDataContext from "./CreateDataContext";
import trackerApi from '../api/tracker'

const trackReducer = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const fetchTracks = dispatch => () => {}
const createTrack = dispatch => async (name, locations) => {
    await trackerApi.post('/tracks', { name, locations})
}

export const { Provider, Context } = CreateDataContext(
    trackReducer,
    { fetchTracks, createTrack},
    []
)