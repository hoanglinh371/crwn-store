import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from 'src/app/store';
import App from './App';

describe('App component', () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  );

  it('Should_MatchSnapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
