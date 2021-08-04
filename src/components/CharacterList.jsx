import React from 'react';
import PropTypes from 'prop-types';
import Character from './CharacterMain';

const CharacterList = ({ characters }) => {
  const characterElements = characters.map((character) => (
    <li key={character.id}>
      <Character
        character={character.character}
        quote={character.quote}
        image={character.image}

      />

    </li>

  ));


  return <ul>{characterElements}</ul>;


};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    character: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired
};

export default CharacterList;
