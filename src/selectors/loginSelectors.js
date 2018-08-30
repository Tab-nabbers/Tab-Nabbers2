export const getLoginCredentials = (state) => state.loginCredentials;


export const getSignInStatus = (state) => getLoginCredentials(state).isSignInCompleted || false;
export const isSignInError = (state) => getLoginCredentials(state).onSignInError || false;
export const getSignInErrorMessage = (state) => getLoginCredentials(state).signInErrorMessage || '';
export const isSignInPending = (state) => getLoginCredentials(state).isSignInPending || false;


export const getSignUpStatus = (state) => getLoginCredentials(state).isSignUpCompleted || false;
export const isSignUpError = (state) => getLoginCredentials(state).onSignUpError || false;
export const getSignUpErrorMessage = (state) => getLoginCredentials(state).signUpErrorMessage || '';
export const isSignUpPending = (state) => getLoginCredentials(state).isSignUpPending || false;

