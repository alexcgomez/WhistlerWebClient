import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/index';
import { RootReducer } from '../reducers/RootReducer';

const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootStore = ReturnType<typeof RootReducer>

export default Store;
