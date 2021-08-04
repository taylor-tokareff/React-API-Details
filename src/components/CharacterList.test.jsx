import React from 'react';
import { render } from '@testing-library/react';
import CharacterList from './CharacterList';
import { MemoryRouter } from 'react-router-dom';

const characters = [...Array(5)].map((_, i) => ({
  character: 'Bender',
  quote: 'Bite my shiny metal ass',
  image: 'url',
})
);

describe('Character component', () => {
  it('renders Character', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <CharacterList characters={characters} />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
