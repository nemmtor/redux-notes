import { IRemoveNoteAction } from './actions';

export const removeNote = (note: string): IRemoveNoteAction => ({
  type: 'REMOVE_NOTE',
  payload: note,
});
