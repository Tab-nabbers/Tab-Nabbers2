
export const getItems = (data) => {
    return data && data.items ? data.items[0] : null;
};

export const isUserOnGithub = (data) => {
    if (data.items.length === 0 || data.items.length >= 2) {
        return false
    }
    return true;
};

export const getEmail = (data) => {
    return getItems(data) && getItems(data).email ? getItems(data).email : null;
};

export const getGithubUrl = (data) => {
    return getItems(data) && getItems(data).url ? getItems(data).url : null;
};  

export const getUserName = (data) => {
    return getItems(data) && getItems(data).login ? getItems(data).login : null;
};

export const getAvatar = (data) => {
    return getItems(data) && getItems(data).avatar_url ? getItems(data).avatar_url : null;
};
