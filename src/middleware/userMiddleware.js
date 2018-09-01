import * as types from '../actions/actionTypes';
import { getProfile } from '../actions/actionCreators';
import * as userSelectors from '../selectors/userSelectors';
import store from '../store/reduxStore';

export const userMiddleware = (store) => (next) => (action) => {
    next(action);
    const dispatch = store.dispatch;

    if (action.type === types.ON_SIGNIN_FULFILLED || action.type === types.ON_SIGN_UP_FULFILLED) {
        dispatch(getProfile());
    }
};


window.onload = function (event) {
    const state = store.getState();
    const dispatch = store.dispatch;
    const email = userSelectors.getEmail(state);
    const isAuthenticated = window.localStorage.getItem('isAuthenticated') || false;

    if (!email && isAuthenticated) {
        dispatch(getProfile());
    }
}