
export const getUser = (state) => {
    return state.user;
};

export const getBio = (state) => {
    return getUser(state).bio;
};

export const getEmail = (state) => {
    return state.user && state.user.email ? state.user.email : null;
};

export const getName = (state) => {
    return getUser(state).name;
};

export const isHireable = (state) => {
    return getUser(state).hireable;
};

export const getPicture = (state) => {
    return getUser(state).picture;
};

export const getWebsite = (state) => {
    return getUser(state).website;
};

export const getPublicRepo = (state) => {
    return getUser(state).publicRepo;
};


export const getLocation = (state) => {
    return getUser(state).location;
};


export const getUsername = (state) => {
    return getUser(state).githubUsername;
};

export const isUserAuthenticated =  (state) => {
    return getUser(state).isAuthenticated;
}