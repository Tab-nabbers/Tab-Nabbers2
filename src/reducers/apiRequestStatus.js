import * as types from '../actions/actionTypes';

const initialState = {
    getEvents: {
        pending: false,
        error: false,
        success: false
    },
    getVenues: {
        pending: false,
        error: false,
        success: false
    }
};

function updatePendingStatusByKey(state, action, status, key) {
    return {
        ...state,
        [key]: {
            ...state[key],
            pending: status
        }
    }
};

const apiRequestStatusReducer = (state = initialState, action) => {
    const getEventsKey = 'getEvents';
    const getVenuesKey = 'getVenues';

    switch (action.type) {
        case types.FETCH_EVENT_BRITE_EVENTS_PENDING:
            const eventPending = true;
            return updatePendingStatusByKey(state, action, eventPending, getEventsKey);

        case types.FETCH_EVENT_BRITE_EVENTS_FULFILLED:
            const eventFullFiled = false;
            return updatePendingStatusByKey(state, action, eventFullFiled, getEventsKey)
        default:
            return state;
    }
};

export default apiRequestStatusReducer;