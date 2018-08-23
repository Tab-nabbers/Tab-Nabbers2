
export const getPayload = (action) => action.payload;

export const getData = (action) => getPayload(action).data;