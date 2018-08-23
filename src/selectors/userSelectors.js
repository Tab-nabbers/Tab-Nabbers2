
export const getUser = (state) => state && state.user ? state.user : {};
export const getBio = (state) => getUser(state).bio;
export const getEmail = (state) => getUser(state).email;
export const getName = (state) => getUser(state).name;
export const getPicture = (state) => getUser(state).picture;
export const getWebsite = (state) => getUser(state).website;
export const getPublicRepo = (state) => getUser(state).publicRepo;
export const getLocation = (state) =>  getUser(state).location;
export const getUsername = (state) => getUser(state).githubUsername;
export const isUserAuthenticated = (state) => getUser(state).isAuthenticated;
export const isHireable = (state) => getUser(state).hireable;