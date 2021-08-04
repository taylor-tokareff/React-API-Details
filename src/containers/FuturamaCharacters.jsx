import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../components/FuturamaAPI.js';
import CharacterList from '../components/CharacterList.jsx';



const FuturamaCharacters = () => {

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const characters = await fetchCharacters();
    setCharacters(characters);
    setLoading(false);
  }, []);

  if (loading) return <h1>Loading...</h1>;
  return <CharacterList characters={characters} />;
};

export default FuturamaCharacters;
