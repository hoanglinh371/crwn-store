import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from 'src/app/store';
import Category from '.';

describe('Category component', () => {
  afterEach(cleanup);

  it('Should_MatchSnapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Category />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
