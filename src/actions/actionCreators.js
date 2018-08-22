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
        type: "GET_LOCATION",
        payload: axios.get("http://freegeoip.net/json/")
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






