import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from 'src/app/store';
import CartDropdown from '.';

describe('CartDropdown component', () => {
  afterEach(cleanup);

  it('Should_MatchSnapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <CartDropdown />
        </BrowserRouter>
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
