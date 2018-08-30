import * as types from '../actions/actionTypes';
import { fetchGithubUserAccount, getLocation } from '../actions/actionCreators';
import * as selectors from '../selectors/githubSelectors';
import * as axiosSelectors from '../selectors/axiosSelector';

export const githubMiddleware = (store) => (next) => (action) => {
    const dispatch = store.dispatch;
    const userLocation = store.getState().user.location;
    
    if (!userLocation) {
        setTimeout(() => {
            dispatch(getLocation());
            
        }, 1000);
    }

    next(action);


    if (action.type === types.FETCH_GITHUB_PROFILE_FULFILLED) {
        const data = axiosSelectors.getData(action);

        if (selectors.isUserOnGithub(data)) {
            
            const url = selectors.getGithubUrl(data);
            dispatch(fetchGithubUserAccount(url));
            return;
        }
    }
}