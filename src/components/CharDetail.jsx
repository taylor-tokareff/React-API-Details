import React from 'react';
import PropTypes from 'prop-types';


const CharDetail = ({ character, quote, image }) => (
  <div>
    <p>{character}</p>
    <p>{quote}</p>
    <p>{image}</p>
  </div>
);

CharDetail.propTypes = {
  character: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}.isRequired;


export default CharDetail;
