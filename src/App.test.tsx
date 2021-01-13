import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { App } from './App';

describe('App', () => {
  const initialState = { notes: ['1', '2'] };
  const mockStore = configureStore();

  it('renders note input', () => {
    const store = mockStore(initialState);
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(getByPlaceholderText('Note')).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const store = mockStore(initialState);
    const tree = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
