import { RootState } from '../../store';

export const notesSelector = (state: RootState): string[] => state.notes;
