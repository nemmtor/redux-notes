import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { NewNoteInput } from './NewNoteInput';

import '@testing-library/jest-dom';

describe('NewNoteInput', () => {
  it('has valid text content', () => {
    const addNote = jest.fn();
    const { getByTestId } = render(<NewNoteInput addNote={addNote} />);
    expect(getByTestId('note-container')).toHaveTextContent('Add note');
  });

  it('matches snapshot', () => {
    const addNote = jest.fn();
    const tree = renderer.create(<NewNoteInput addNote={addNote} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
