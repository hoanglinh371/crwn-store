import { cleanup, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Checkout from '.';

describe('Checkout component', () => {
  afterEach(cleanup);

  it('Should_MatchSnapshot', () => {
    const { container } = render(
      <BrowserRouter>
        <Checkout />
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
