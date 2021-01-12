type AddNoteAction = { type: 'ADD_NOTE'; payload: string };
type RemoveNoteAction = { type: 'REMOVE_NOTE'; payload: string };

export type TNotesAction = AddNoteAction | RemoveNoteAction;
