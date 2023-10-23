import { createStore, applyMiddleware, Action } from 'redux';
import thunkMiddleware, { ThunkMiddleware } from 'redux-thunk';

import reducers, { initialState } from './reducers';

export const store = createStore(
    reducers, 
    applyMiddleware(
      thunkMiddleware as ThunkMiddleware<typeof initialState, Action<any>>
    )
);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch