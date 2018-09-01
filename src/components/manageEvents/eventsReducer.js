import * as types from '../../actions/actionTypes';

const initialState = [];

function updateEvents(state, action) {
    const payload = action.payload.data;

    if (payload.top_match_events) {
        return [
            ...state,
            ...payload.top_match_events
        ]
    }

    return [
        ...state,
        ...payload.events
    ]

}




function updateEventsByVenueId(state, action) {
    const payload = action.payload.data;

    const index = state.findIndex(event => event.venue_id === payload.id);

    return [
        ...state.slice(0, index),
        {
            ...state[index],
            venue_id: payload
        },
        ...state.slice(index + 1)
    ];
}



const eventReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.FETCH_EVENT_BRITE_EVENTS_FULFILLED:
            return updateEvents(state, action);
        case types.LOGOUT:
            return [];
        case types.FETCH_EVENT_BRITE_EVENTS_PENDING:
            return [];
        case types.GET_VENUS_BY_ID_FULFILLED:
            return updateEventsByVenueId(state, action);
        default:
            return state;
    }
};


export default eventReducer;