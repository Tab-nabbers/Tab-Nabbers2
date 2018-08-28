import moment from 'moment';

export const getEvents = (state) => state.events;
export const getEventsPagination = (state) => state.eventPagination;
export const hasMoreEvents = (state) => getEventsPagination(state).has_more_items;
export const getPageCount = (state) => getEventsPagination(state).page_count;
export const getTotalEvents = (state) => getEventsPagination(state).object_count;
export const getCurrentPage = (state) => getEventsPagination(state).page_number;


export const getEventUrl = (event) => event.url;

export const getName = (event) => {
    const hasName = event && event.name;
    return hasName ? event.name : '';
};

export const getTitle = (event) => {
    const hasTitle = getName(event) && getName(event).text;
    return hasTitle ? getName(event).text : '';
}

export const getLogo = (event) => {
    const hasLogo = event && event.logo;
    return hasLogo ? event.logo : '';
}

export const getLogoOriginal = (event) => {
    const hasLogoOriginal = getLogo && getLogo(event).original;
    return hasLogoOriginal ? getLogo(event).original : '';
}

export const getLogoLink = (event) => {
    const hasLogoLink = getLogoOriginal(event) && getLogoOriginal(event).url;
    return hasLogoLink ? getLogoOriginal(event).url : '';
}
export const getDescription = (event) => {
    const hasDescription = event && event.description;
    return hasDescription ? event.description : '';
}

export const getHtml = (event) => {
    const hasHtml = getDescription(event) && getDescription(event).html;
    return hasHtml ? getDescription(event).html : '';
}

export const getDescriptionText = (event) => {
    const hasDescriptionText = getDescription(event) && getDescription(event).text;
    return hasDescriptionText ? getDescription(event).text : '';
}

// Venue Object, address
export const getVenue = (event) => {
    const hasVenue = event && event.venue_id;
    return hasVenue ? event.venue_id : '';
};

export const getAddress = (event) => {
    const hasAddress = getVenue(event) && getVenue(event).address;
    return hasAddress ? getVenue(event).address: '';
};

export const getFullAddress = (event) => {
    const hasFullAddress = getAddress(event) && getAddress(event).localized_address_display;
    return hasFullAddress ? getAddress(event).localized_address_display : 'NO ADDRESS PROVIDED';
};


// Start time Object
export const getTimeStartObj = (event) => {
    const hasTimeObj = event && event.start;
    return hasTimeObj ? event.start : '';
}

export const getTimeStart = (event) => {
    const hasStartTime = getTimeStartObj(event) && getTimeStartObj(event).local;

    if (hasStartTime) {
        const localTime = getTimeStartObj(event).local
        const formatTime =  moment(localTime).format("dddd, MMMM Do YYYY, h:mm:ss a")
        return formatTime;
    }
}