import { compose, applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk"

import profile from "./Redux/reducer/profile";

const rootReducer=combineReducers({
    user:profile
});

const configureStore=()=>{
    return legacy_createStore(
        rootReducer,
        compose(applyMiddleware(thunk))
    )
}

export default configureStore;