import { cleanup, render, screen } from '@testing-library/react';

import Button from '.';

describe('Button component', () => {
  afterEach(cleanup);

  it('Should_MatchSnapshot', () => {
    const { container } = render(
      <Button type='button' google>
        Click here!
      </Button>,
    );
    expect(container).toMatchSnapshot();
  });

  it('Should_HaveType', () => {
    render(
      <Button type='button' google>
        Click here!
      </Button>,
    );
    expect(screen.getByLabelText('button')).toHaveAttribute('type', 'button');
  });

  it('Should_HaveContent', () => {
    render(
      <Button type='button' google>
        Click here!
      </Button>,
    );
    expect(screen.getByLabelText('button')).toHaveTextContent('Click here!');
    console.log(screen.getByLabelText('button'));
  });

  it('Should_HaveAllClassnames', () => {
    render(
      <Button type='button' google>
        Click here!
      </Button>,
    );
    expect(screen.getByLabelText('button')).toHaveClass('container', 'google');
  });
});
