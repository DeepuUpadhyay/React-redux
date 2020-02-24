import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";

const reducers = {};

export const configureStore = () => {
 reducers["root"] = rootReducer;
 return createStore(rootReducer, applyMiddleware(thunk));
};

export const registerReducer = (name, reducer) => {
 reducers[name] = reducer;
 store.replaceReducer(combineReducers({ ...reducers }));
};

export const store = configureStore();
