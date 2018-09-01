import * as types from '../../actions/actionTypes';
import * as selectors from '../../selectors/axiosSelector';

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


function saveTokenInStorage(obj) {
    for (let key in obj) {
        localStorage.setItem(key, obj[key]);
    }
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
    const payload = selectors.getPayloadData(action);
    return {
        ...state,
        onSignInError: true,
        signInErrorMessage: payload.message,
        isSignInCompleted: false,
        isSignInPending: false
    };
}

function updateSigninComplete(state, action) {
    const payload = selectors.getData(action);
    const token = payload.token;
    const isAuthenticated = payload.isAuthenticated;
    saveTokenInStorage({
        isAuthenticated,
        token
    }); // saving token into LocalStorage
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
    const payload = selectors.getData(action);
    const token = payload.token;
    const isAuthenticated = payload.isAuthenticated;
    saveTokenInStorage({
        token,
        isAuthenticated
    }); // saving token into LocalStorage

    return {
        ...state,
        isSignUpCompleted: true,
        onSignUpError: false,
        password: '',
        isSignUpPending: false

    };
}

function updateSignUpError(state, action) {
    const payload = selectors.getPayloadData(action);
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