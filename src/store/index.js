import { combineReducers } from "redux";
import documents from './documents'
import consumption from './consumption'
import user from './user'
import powerplants from './powerplants'
import matching from './matching'

export default combineReducers({documents, consumption, user, powerplants, matching});
