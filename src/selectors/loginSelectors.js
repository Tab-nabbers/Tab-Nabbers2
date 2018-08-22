export const getLoginCredentials = (state) => state.loginCredentials;

export const getSignUpStatus = (state) => getLoginCredentials(state).isSignUpCompleted || false;

export const getSignInStatus = (state) => getLoginCredentials(state).isSignInCompleted || false;

