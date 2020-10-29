import { combineReducers } from "redux";
import documents from './documents'
import frontpage from './frontpage'
import consumption from './consumption'
import user from './user'

export default combineReducers({documents, frontpage, consumption, user});
