import * as types from '../../actions/actionTypes';

const initialState = {
    email: '',
    name: '',
    password: '',
    isSignUpCompleted: false,
    isSignInPending: false,
    onSignUpError: false,
    signUpErrorMessage: '',

    isSignInCompleted: false,
    onSignInError: false,
    signInErrorMessage: '',
    isSignUpPending: false

};


/* Sign In Flow */
function updateSignInPending(state, action) {
    return {
        ...state,
        isSignInPending: true,
    };
}
function updateWithSignInValue(state, action) {
    const { email, password } = action;
    return {
        ...state,
        email,
        password
    }
}

function updateSignInError(state, action) {
    const payload = action.payload.response.data;
    return {
        ...state,
        onSignInError: true,
        signInErrorMessage: payload.message,
        isSignInCompleted: false,
        isSignInPending: false
    };
}

function updateSigninComplete(state, action) {
    return {
        ...state,
        isSignInCompleted: true,
        onSignInError: false,
        password: '',
        isSignInPending: false
    };
}


/* Sign Up Functions */
function updateSignUpComplete(state, action) {
    return {
        ...state,
        isSignUpCompleted: true,
        onSignUpError: false,
        password: '',
        isSignUpPending: false

    };
}

function updateSignUpError(state, action) {
    const payload = action.payload.response.data;
    return {
        ...state,
        signUpErrorMessage: payload.message,
        onSignUpError: true,
        isSignUpCompleted: false,
        isSignUpPending: false
    };
}


function updateSignUpPending(state, action) {
    return {
        ...state,
        isSignUpPending: true
    };
}

function updateWithSignUpValue(state, action) {
    const { email, name, password } = action;
    return {
        ...state,
        email,
        name,
        password
    }
}

const signin = (state = initialState, action) => {
    switch (action.type) {
        case types.ON_SIGN_UP:
            return updateWithSignUpValue(state, action);

        // Handle Sign Flow
        case types.ON_SIGNIN:
            return updateWithSignInValue(state, action);
        case types.ON_SIGNIN_FULFILLED:
            return updateSigninComplete(state, action);
        case types.ON_SIGNIN_REJECTED:
            return updateSignInError(state, action);
        case types.ON_SIGNIN_PENDING:
            return updateSignInPending(state, action);

        // Handle Sign Up Flow
        case types.ON_SIGN_UP_FULFILLED:
            return updateSignUpComplete(state, action);
        case types.ON_SIGN_UP_REJECTED:
            return updateSignUpError(state, action);
        case types.ON_SIGN_UP_PENDING:
            return updateSignUpPending(state, action);

        default:
            return state;
    }
};

export default signin;