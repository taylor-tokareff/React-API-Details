/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
// Component???
import { fetchDetail } from '../components/ApiDetail';
import CharDetail from '../components/CharDetail';




const FuturamaDetails = () => {
  const [match, setMatch] = useState([]);
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quote, setQuote] = useState([]);
  const [character, setCharacter] = useState([]);
  const [image, setImage] = useState([]);



  useEffect(async () => {
    setDetails(details);
    setLoading(false);
    setQuote(quote);
    setCharacter(character);
    setImage(image);
    setMatch(match);
    const details = await fetchDetail(match.params.character);
  }, []);

  if (loading) return <h1>Loading...</h1>;
  return <CharDetail quote={details.quote} character={details.character} image={details.image} />;
};

export default FuturamaDetails;
