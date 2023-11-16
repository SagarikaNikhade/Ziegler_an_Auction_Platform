import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as authReducer} from "./AuthReducer/reducer";
import {reducer as aircraftReducer} from "./AircraftReducer/reducer";

const rootReducer = combineReducers({
    authReducer,
    aircraftReducer
})

export const store = legacy_createStore(rootReducer , applyMiddleware(thunk))