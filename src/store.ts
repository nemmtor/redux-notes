import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { notesReducer } from './notes';

const rootReducer = combineReducers({
  notes: notesReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(persistedReducer, composeWithDevTools());
store.subscribe(() => console.log('Updated redux store'));
