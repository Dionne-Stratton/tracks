import CreateDataContext from "./CreateDataContext";

const trackReducer = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const fetchTracks = dispatch => () => {}
const createTrack = dispatch => (name, locations) => {

}

export const { Provider, Context } = CreateDataContext(
    trackReducer,
    { fetchTracks, createTrack},
    []
)