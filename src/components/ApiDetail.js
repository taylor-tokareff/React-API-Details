/* eslint-disable max-len */
export const fetchDetail = async (name) => {
  const res = await fetch(`https://futuramaapi.herokuapp.com/api/characters/${name}`);
  const json = await res.json();

  return json;
};
