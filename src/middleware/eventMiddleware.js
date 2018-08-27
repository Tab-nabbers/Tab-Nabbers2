import * as types from '../actions/actionTypes';
import { getVenuesById } from '../actions/actionCreators';
// import * as selectors from '../selectors/eventSelectors';
import * as axiosSelectors from '../selectors/axiosSelector';

export const eventMiddleware = (store) => (next) => (action) => {
    next(action);
    const dispatch = store.dispatch;


    if (action.type === types.FETCH_EVENT_BRITE_EVENTS_FULFILLED) {
        const data = axiosSelectors.getData(action);

        const events = data.events;

        for (let i = 0; i < events.length; i++) {
            const venueId = events[i].venue_id;
            if (venueId) {
                const venueId = events[i].venue_id;
                dispatch(getVenuesById(venueId));
            }
            
        }
    }


}