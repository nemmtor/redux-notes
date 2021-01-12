import { INotesState } from './INotesState';
import { TNotesAction } from './TNotesAction';

const initialState = {
  notes: [],
};

export const notesReducer = (
  state: INotesState = initialState,
  action: TNotesAction,
): INotesState => {
  switch (action.type) {
    case 'ADD_NOTE': {
      return { ...state, notes: [...state.notes, action.payload] };
    }
    case 'REMOVE_NOTE': {
      const notesAfterRemove = state.notes.filter(
        (note) => note !== action.payload,
      );
      return { ...state, notes: notesAfterRemove };
    }
    default:
      return state;
  }
};
