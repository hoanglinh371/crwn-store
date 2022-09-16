import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { cleanup, render } from '@testing-library/react';

import { store } from 'src/app/store';

import Checkout from '.';

describe('Home component', () => {
  afterEach(cleanup);

  it('Should_MatchSnapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Checkout />
        </BrowserRouter>
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
