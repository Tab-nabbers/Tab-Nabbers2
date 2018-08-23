import * as types from '../actions/actionTypes';
import { fetchGithubUserAccount, getLocation } from '../actions/actionCreators';
import * as selectors from '../selectors/githubSelectors';
import * as axiosSelectors from '../selectors/axiosSelector';

export const githubMiddleware = (store) => (next) => (action) => {
    next(action);


    if (action.type === types.FETCH_GITHUB_PROFILE_FULFILLED) {
        const data = axiosSelectors.getData(action);
        const dispatch = store.dispatch;

        if (selectors.isUserOnGithub(data)) {
            
            const url = selectors.getGithubUrl(data);
            dispatch(fetchGithubUserAccount(url));
            return;
        }

        // Not able to find user on Github
        dispatch(getLocation());

    }
}