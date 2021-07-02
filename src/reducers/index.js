import {combineReducers} from 'redux';

import truthReducer from './truthReducer';

export default combineReducers({
    truthiness: truthReducer,
})
