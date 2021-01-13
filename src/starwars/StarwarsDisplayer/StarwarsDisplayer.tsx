import React, { useState } from 'react';
import { getStarwarsData, ResponseJson } from './getStarwarsData';

export const StarwarsDisplayer: React.FC = () => {
  const [info, setInfo] = useState<ResponseJson | null>();
  const handleClick = async () => {
    const fetchedInfo = await getStarwarsData();
    setInfo(fetchedInfo);
  };

  return (
    <main data-testid="starwars-test">
      <button data-testid="starwars-button" type="button" onClick={handleClick}>
        Fetch starwars info
      </button>
      {info && (
        <pre data-testid="starwars-output">{JSON.stringify(info, null, 4)}</pre>
      )}
    </main>
  );
};
