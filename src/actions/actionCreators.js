import axios from "axios";
import * as types from './actionTypes';

export const onSignUp = (email, name, password) => {
    return {
        type: types.ON_SIGN_UP,
        email,
        name,
        password
    };
};

export const onSignIn = (email, password) => {
    return {
        type: types.ON_SIGNIN,
        email,
        password
    }
};


export const getValue = (data) => {
    return {
        type: types.GET_VALUE,
        data
    };
};


export const getLocation = () => {
    return {
        type: types.GET_CURRENT_LOCATION,
        payload: axios.get("http://api.ipstack.com/check?access_key=38d19681eff59a8adeabb2d081c5db6a")
    };
};


export const fetchGithubUserProfile = (email) => {
    return {
        type: types.FETCH_GITHUB_PROFILE,
        payload: axios.get(`https://api.github.com/search/users?q=${email}`)
    };
};



export const fetchGithubUserAccount = (url) => {
    return {
        type: types.FETCH_GITHUB_USER_ACCOUNT,
        payload: axios.get(url)
    };
};


export const reviewAndConfirm = (user) => {
    return {
        type: types.REVIEW_AND_CONFIRM,
        // payload: axios({ method: 'POST', data: user }) // TODO
        user,
    }
};

export const getEventBriteEvents = (value) => {
    const host = 'http://express-services-events.stzwqjephe.us-west-2.elasticbeanstalk.com';
    const resource = '/search/events?';
    const params = 'q=javascript&latitude=34.0204&longitude=-84.2445';
    return {
        type: types.FETCH_EVENT_BRITE_EVENTS,
        payload: axios({
            url: `${host}${resource}${params}`,
            method: 'GET'
        })
    };
};