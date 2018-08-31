
export const getPayload = (action) => action.payload;

export const getResponse = (action) => getPayload(action).response;

export const getData = (action) => getPayload(action).data;

export const getPayloadData = (action) => getResponse(action).data;