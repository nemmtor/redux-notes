export const ADD_NOTE = 'ADD_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';

export interface IAddNoteAction {
  type: typeof ADD_NOTE;
  payload: string;
}

export interface IRemoveNoteAction {
  type: typeof REMOVE_NOTE;
  payload: string;
}

export type TNotesAction = IAddNoteAction | IRemoveNoteAction;
