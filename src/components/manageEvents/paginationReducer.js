import * as types from '../../actions/actionTypes';

const initialState = {};

function updateEvents(state, action) {
    const payload = action.payload.data;

    return {
        ...state,
        ...payload.pagination
    }

}

const paginationReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.FETCH_EVENT_BRITE_EVENTS_FULFILLED:
            return updateEvents(state, action);
        default:
            return state;
    }
};


export default paginationReducer;