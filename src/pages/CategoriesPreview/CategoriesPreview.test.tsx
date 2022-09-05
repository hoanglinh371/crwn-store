import { cleanup, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from 'src/app/store';
import CategoriesPreview from '.';

describe('CategoriesPreview component', () => {
  afterEach(cleanup);

  it('Should_MatchSnapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <CategoriesPreview />
        </BrowserRouter>
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
