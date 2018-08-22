export const getRouterMatch = (props) => {
    return props.match;
};

export const getParams = (props) => {
    const params = getRouterMatch(props).params;
    return params;
};