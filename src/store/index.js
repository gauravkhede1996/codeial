import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import reducer from '../reducers';
let store;
export function configureStore () {
    store = createStore(reducer, applyMiddleware(thunk));
    return store;
}