import axios from "axios";
import * as types from './actionTypes';

export const onSignUp = (email, name, password) => {
    const host = 'http://express-service-authentication.rvepxemghh.us-east-1.elasticbeanstalk.com';
    const resource = '/signup';

    return {
        type: types.ON_SIGN_UP,
        payload: axios({
            url: `${host}${resource}`,
            method: 'POST',
            data: {
                email,
                password,
                name
            }
        })
    };
};

export const onSignIn = (email, password) => {
    const host = 'http://localhost:9000';
    const resource = '/signin';
    return {
        type: types.ON_SIGNIN,
        payload: axios({
            url: `${host}${resource}`,
            method: 'POST',
            data: {
                email,
                password
            },
            proxy: {
                host: 'http://localhost',
                port: 9000
              }
        })
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
    const host = 'http://express-service-authentication.rvepxemghh.us-east-1.elasticbeanstalk.com';
    const resource = '/save';
    return {
        type: types.REVIEW_AND_CONFIRM,
        payload: axios({
            url: `${host}${resource}`,
            method: 'POST',
            data: user
        })
    }
};


export const getCurrentEventbriteEvent = (id) => {
    const host = 'http://express-services-events.stzwqjephe.us-west-2.elasticbeanstalk.com';
    const resource = '/event';

    return {
        type: types.GET_CURRENT_EVENT,
        payload: axios.get(`${host}${resource}/${id}`)
    };
};




export const getEventBriteEvents = (value, latitude = null, longitude = null) => {
    const host = 'http://express-services-events.stzwqjephe.us-west-2.elasticbeanstalk.com';
    const resource = '/search/events?';
    let params = `q=${value}`;

    if (latitude && longitude) {
        params += `&latitude=${latitude}&longitude=${longitude}`;
    }
    return {
        type: types.FETCH_EVENT_BRITE_EVENTS,
        payload: axios({
            url: `${host}${resource}${params}`,
            method: 'GET'
        })
    };
};

export const getVenuesById = (id) => {
    const host = 'http://express-services-events.stzwqjephe.us-west-2.elasticbeanstalk.com';
    const resource = `/venues/${id}`;
    return {
        type: types.GET_VENUS_BY_ID,
        payload: axios.get(`${host}${resource}`)
    };
};