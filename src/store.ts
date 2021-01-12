import { createStore } from 'redux';
import { notesReducer } from './notes';

export const store = createStore(notesReducer);
