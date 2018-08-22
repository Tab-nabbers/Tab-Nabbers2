import * as types from '../../actions/actionTypes';

const initialState = {
    email: '',
    name: '',
    password: '',
    isSignUpCompleted: false,
    isSignInCompleted: false

};


function updateWithSignUpValue(state, action) {
    const { email, name, password } = action;
    return {
        ...state,
        email,
        name,
        password,
        isSignUpCompleted: true
    }
}

function updateWithSignInValue(state, action) {
    const { email, password } = action;
    return {
        ...state,
        email,
        password,
        isSignInCompleted: true
    }
}

const signin = (state = initialState, action) => {
    switch (action.type) {
        case types.ON_SIGN_UP:
            return updateWithSignUpValue(state, action);
        case types.ON_SIGNIN:
            return updateWithSignInValue(state, action);
        default:
            return state;
    }
};

export default signin;