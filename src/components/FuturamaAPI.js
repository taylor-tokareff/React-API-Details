export const fetchCharacters = async () => {
  const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes');
  const json = await res.json();

  return json;
};
