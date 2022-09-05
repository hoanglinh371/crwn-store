import { cleanup, render } from '@testing-library/react';

import Auth from '.';

describe('Auth component', () => {
  afterEach(cleanup);

  it('Should_MatchSnapshot', () => {
    const { container } = render(<Auth />);
    expect(container).toMatchSnapshot();
  });
});
