import React from 'react';
import { NewNoteInput } from './components';

function App(): JSX.Element {
  return (
    <>
      <NewNoteInput
        addNote={() => {
          console.log('hi');
        }}
      />
      <hr />
      <ul>
        <li>Some note</li>
      </ul>
    </>
  );
}

export default App;
