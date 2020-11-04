import { combineReducers } from "redux";
import documents from './documents'
import consumption from './consumption'
import user from './user'

export default combineReducers({documents, consumption, user});
