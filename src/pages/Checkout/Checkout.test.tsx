import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from 'src/app/store';
import Checkout from '.';

describe('Checkout component', () => {
  afterEach(cleanup);

  it('Should_MatchSnapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Checkout />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
