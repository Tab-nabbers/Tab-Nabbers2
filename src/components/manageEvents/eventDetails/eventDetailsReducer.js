import * as types from '../../../actions/actionTypes';

const initialState = {

};


function updateCurrentEvent(state, action) {
    const payload = action.payload.data;
    return {
        ...state,
        ...payload
    };
};

const eventDetailsReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.GET_CURRENT_EVENT_FULFILLED:
            return updateCurrentEvent(state, action);
        default:
            return state;
    }
};


export default eventDetailsReducer;