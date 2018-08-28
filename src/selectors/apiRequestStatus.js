export const getApiRequestStatus = (state) => state.apiRequestStatus;

export const getEventsStatus = (state) => {
    const hasGetEvents = getApiRequestStatus(state) && getApiRequestStatus(state).getEvents;

    return hasGetEvents ? getApiRequestStatus(state).getEvents : '';
}

export const getEventsPending = (state) => {
    const hasPending = getEventsStatus(state) && getEventsStatus(state).pending;
    return hasPending ? getEventsStatus(state).pending : false;
};
