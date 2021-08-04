import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Character = ({ character, quote, image }) => (
  <figure>
    <Link to={`/character/${character}`}>
      <img src={image} />
    </Link>
    <p>{character}</p>
    <p>{quote}</p>

  </figure>
);

Character.propTypes = {
  character: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Character;
