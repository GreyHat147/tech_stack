import { combineReducers } from 'redux';
import LibaryReducer from './LibraryReducer';
export default combineReducers({
   libraries: LibaryReducer 
});