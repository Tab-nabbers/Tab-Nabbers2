import * as types from '../actions/actionTypes';

const initialState = {
    
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_GITHUB_USER_ACCOUNT:
            console.log('Data: ', action);
            return state;
    
        default:
            return state;
    }
};

export default UserReducer;