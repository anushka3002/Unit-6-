// import { createStoreHook } from "react-redux";
import { countReducer } from "./reducer";
import { createStore } from "react-redux";
import { combineReducers } from "redux";


const rootReducers = combineReducers({
    count : countReducer
})

export const store = createStore(rootReducers)



