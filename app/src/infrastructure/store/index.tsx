import { applyMiddleware, compose, createStore, Store } from 'redux';
import { rootReducer, RootState } from '../../reducers/RootReducer';
import thunk from 'redux-thunk';

/* tslint:disable no-any */
// TODO: Find a way to compose the typing of the StoreEnhancer with the reducers and middlewares in createStore
declare const window: Window & {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any,
};
/* tslint:enable no-any */

const recoverState = (): RootState => ({} as RootState);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store: Store<RootState> = createStore(
  rootReducer,
  recoverState(),
  composeEnhancers(applyMiddleware(thunk)),
);

