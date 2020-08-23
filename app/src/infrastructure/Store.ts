import { applyMiddleware, createStore } from 'redux';
import RootReducer from '../reducers/RootReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/index';

const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootStore = ReturnType<typeof RootReducer>

export default Store;
