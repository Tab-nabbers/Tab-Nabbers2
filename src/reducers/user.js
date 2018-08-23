import * as types from '../actions/actionTypes';

const initialState = {
    bio: '',
    githubUserSince: '',
    publicRepo: 0,
    website: '',
    name: '',
    location: '',
    githubId: 0,
    picture: 'https://s3.amazonaws.com/tabnabbers/default-profile.png',
    githubFollowers: 0,
    hireable: false,
    email: ''
};

function updateUserInfoWithGithub(state, action) {
    const payload = action.payload.data;

    return {
        ...state,
        bio: payload.bio,
        githubUserSince: payload.created_at,
        publicRepo: payload.public_repos,
        website: payload.blog,
        name: payload.name,
        location: payload.location,
        githubId: payload.id,
        picture: payload.avatar_url,
        githubFollowers: payload.followers,
        hireable: payload.hireable,
        githubUsername: payload.login
    };
};

function updateOnGetValue(state, action) {
    return {
        ...state,
        ...action.data
    };
};


function updateLocation(state, action) {
    const payload = action.payload.data;
    return {
        ...state,
        location: `${payload.region_name}, ${payload.country_name}`
    }
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_GITHUB_USER_ACCOUNT_FULFILLED:
            return updateUserInfoWithGithub(state, action);
        case types.GET_VALUE:
            return updateOnGetValue(state, action);

        case types.ON_SIGN_UP:
            return {
                ...state,
                email: action.email
            };

        case types.GET_CURRENT_LOCATION_FULFILLED:
            return updateLocation(state, action);
        default:
            return state;
    }
};

export default UserReducer;