import { TNotesAction } from './TNotesAction';

export const addNote = (note: string): TNotesAction => ({
  type: 'ADD_NOTE',
  payload: note,
});
