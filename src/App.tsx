import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import {
  TNotesAction,
  addNote,
  NewNoteInput,
  noteIsEmpty,
  noteAlreadyExists,
} from './notes';
import { Note } from './notes/Note';

import { notesSelector } from './notes/state/notesSelector';
import { StarwarsDisplayer } from './starwars';

function App(): JSX.Element {
  const notes = useSelector(notesSelector);
  const dispatch = useDispatch<Dispatch<TNotesAction>>();

  const handleAddNote = (note: string) => {
    if (noteIsEmpty(note)) return;
    if (noteAlreadyExists(note)) return;
    dispatch(addNote(note));
  };

  return (
    <>
      <NewNoteInput addNote={handleAddNote} />
      <hr />
      <ul>
        {notes.map((note) => (
          <Note key={note} noteContent={note} />
        ))}
      </ul>
      <hr />
      <StarwarsDisplayer />
    </>
  );
}

export default App;
