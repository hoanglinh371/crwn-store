import { render, cleanup } from '@testing-library/react';
import Spinner from '.';

describe('Spinner component', () => {
  afterEach(cleanup);

  it('Should_MatchSnapshot', () => {
    const { container } = render(<Spinner />);
    expect(container).toMatchSnapshot();
  });
});
