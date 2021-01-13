import React, { ChangeEvent, useState } from 'react';

interface IProps {
  addNote: (note: string) => void;
}

const initialNoteState = '';

export const NewNoteInput: React.FC<IProps> = ({ addNote }) => {
  const [note, setNote] = useState(initialNoteState);

  const handleNoteChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const handleNoteSubmit = () => {
    addNote(note);
    setNote(initialNoteState);
  };

  return (
    <main data-testid="note-container">
      <input
        type="text"
        name="note"
        placeholder="Note"
        onChange={handleNoteChange}
        value={note}
      />
      <button type="button" onClick={handleNoteSubmit}>
        Add note
      </button>
    </main>
  );
};
