
export const getPayload = (action) => {
    return action.payload;
};

export const getData = (action) => {
    return getPayload(action).data;
};