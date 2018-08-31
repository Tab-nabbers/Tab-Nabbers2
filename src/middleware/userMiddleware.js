import * as types from '../actions/actionTypes';
import { getProfile } from '../actions/actionCreators';
import * as selectors from '../selectors/githubSelectors';
import * as axiosSelectors from '../selectors/axiosSelector';

export const userMiddleware = (store) => (next) => (action) => {
    next(action);
    const dispatch = store.dispatch;

    if (action.type === types.ON_SIGNIN_FULFILLED || action.type === types.ON_SIGN_UP_FULFILLED) {
        dispatch(getProfile());
    }

}