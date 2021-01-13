import { TNotesAction } from './actions';
import { NotesState } from './NotesState';

const initialState: string[] = [];

export const notesReducer = (
  state = initialState,
  action: TNotesAction,
): NotesState => {
  switch (action.type) {
    case 'ADD_NOTE': {
      return [...state, action.payload];
    }
    case 'REMOVE_NOTE': {
      const notesAfterRemove = state.filter((note) => note !== action.payload);
      return [...notesAfterRemove];
    }
    default:
      return state;
  }
};
