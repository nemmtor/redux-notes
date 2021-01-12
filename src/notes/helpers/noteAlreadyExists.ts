import { store } from '../../store';

export const noteAlreadyExists = (note: string): boolean => {
  const { notes } = store.getState();
  return notes.includes(note);
};
