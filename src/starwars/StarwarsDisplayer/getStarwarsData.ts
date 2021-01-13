export interface ResponseJson {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: unknown[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
}

export const getStarwarsData = async (): Promise<ResponseJson> => {
  const response = await fetch('https://swapi.dev/api/people/1');
  const json = await response.json();
  return json;
};
