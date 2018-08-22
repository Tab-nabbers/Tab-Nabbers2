
export const getItems = (data) => {
    if (data.items.length > 1) {
        return 'No User found';
    }
    return data.items[0];
};

export const isUserOnGithub = (data) => {
    if (data.items.length === 0) {
        return false
    }
    return true;
};

export const getEmail = (data) => {
    return getItems(data).email;
};

export const getGithubUrl = (data) => {
    return getItems(data).url;
};  

export const getUserName = (data) => {
    return getItems(data).login;
};

export const getAvatar = (data) => {
    return getItems(data).avatar_url;
};