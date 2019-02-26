import { combineReducers } from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import tickets from './ticketReducer';

const rootReducer = combineReducers({
    ajaxCallsInProgress,
    tickets
});

export default rootReducer;