import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import { StarwarsDisplayer } from './StarwarsDisplayer';
import { getStarwarsData } from './getStarwarsData';
import { mockResponse } from './mockResponse';

jest.mock('./getStarwarsData');

const getStarwarsDataMock = getStarwarsData as jest.Mock;

describe('NewNoteInput', () => {
  it('has valid text content', () => {
    const { getByTestId } = render(<StarwarsDisplayer />);
    expect(getByTestId('starwars-test')).toHaveTextContent(
      'Fetch starwars info',
    );
  });

  it('calls func on click', () => {
    const { getByTestId } = render(<StarwarsDisplayer />);
    const button = getByTestId('starwars-button');
    fireEvent.click(button);
    expect(getStarwarsData).toBeCalled();
  });

  it('outputs data from fetch after clicking', async () => {
    getStarwarsDataMock.mockResolvedValueOnce(mockResponse);
    const { getByTestId, findByTestId } = render(<StarwarsDisplayer />);
    const button = getByTestId('starwars-button');
    fireEvent.click(button);
    const output = await findByTestId('starwars-output');
    expect(output).toBeInTheDocument();
    expect(output.textContent).toEqual(JSON.stringify(mockResponse, null, 4));
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<StarwarsDisplayer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
