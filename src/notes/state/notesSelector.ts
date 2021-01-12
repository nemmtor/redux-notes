import { INotesState } from './INotesState';

export const notesSelector = (state: INotesState): INotesState['notes'] =>
  state.notes;
