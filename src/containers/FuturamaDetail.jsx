/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { fetchDetail } from '../components/ApiDetail';
import CharDetail from '../components/CharDetail';
import { useParams } from 'react-router-dom';



const FuturamaDetails = () => {

  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const { character } = useParams();


  useEffect(async () => {
    const details = await fetchDetail(character);
    setDetails(details);
    setLoading(false);

  }, []);

  if (loading) return <h1>Loading...</h1>;
  return <CharDetail quote={details[0].quote} character={details[0].character} image={details[0].image} />;
};

export default FuturamaDetails;
