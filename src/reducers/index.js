import {
    combineReducers
} from "redux";

import loginCredentials from "../components/loginFlow/loginFlowReducer";
import user from './user';
import apiRequestStatus from './apiRequestStatus';
import events from '../components/manageEvents/eventsReducer';
import eventPagination from '../components/manageEvents/paginationReducer';


const bootcruit = combineReducers({
    loginCredentials,
    user,
    events,
    eventPagination,
    apiRequestStatus
});


export default bootcruit;