import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from 'src/app/store';
import Shop from '.';

describe('Shop component', () => {
  afterEach(cleanup);

  it('Should_MatchSnapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Shop />
        </BrowserRouter>
        ,
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
