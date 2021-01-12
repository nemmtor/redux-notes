import { TNotesAction } from './TNotesAction';

export const removeNote = (note: string): TNotesAction => ({
  type: 'REMOVE_NOTE',
  payload: note,
});
