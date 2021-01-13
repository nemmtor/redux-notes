import { TNotesAction } from './actions';

export const addNote = (note: string): TNotesAction => ({
  type: 'ADD_NOTE',
  payload: note,
});
