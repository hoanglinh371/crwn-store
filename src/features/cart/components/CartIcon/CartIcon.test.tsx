import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'src/app/store';

import CartIcon from '.';

describe('CartIcon component', () => {
  afterEach(cleanup);

  it('Should_MatchSnapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <CartIcon />
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
