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






