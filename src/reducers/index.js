import {
    combineReducers
} from "redux";

import loginCredentials from "../components/loginFlow/loginFlowReducer";
import user from './user';


const bootcruit = combineReducers({
    loginCredentials,
    user
});


export default bootcruit;