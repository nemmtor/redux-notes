import React from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

import { removeNote, TNotesAction } from '../state';
import styles from './styles.module.scss';

interface IProps {
  readonly noteContent: string;
}

export const Note: React.FC<IProps> = ({ noteContent }) => {
  const dispatch = useDispatch<Dispatch<TNotesAction>>();
  const handleRemoveNote = () => {
    dispatch(removeNote(noteContent));
  };

  return (
    <li>
      <span className={styles.note__text}>{noteContent}</span>
      <button type="button" onClick={handleRemoveNote}>
        Remove
      </button>
    </li>
  );
};
