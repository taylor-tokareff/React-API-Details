import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import CharacterList from '../components/CharacterList';

const server = setupServer(
  rest.get(
    'https://futuramaapi.herokuapp.com/api/quotes',
    (req, res, ctx) => {
      return res(
        ctx.json(
          [...Array(+req.params.count)].map((_, i) => ({
            character: 'Fry',
            quote: `This is quote #${i}`,
            image: 'http://image.com',
          }))
        )
      );
    }
  )
);

describe('CharacterList container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a list of quotes', async () => {
    render(<CharacterList />);

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list');
    expect(ul.children.length).toEqual(5);
  });
});
