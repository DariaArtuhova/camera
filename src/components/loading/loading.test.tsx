import {render, screen} from '@testing-library/react';
import {Loading} from './loading';

describe('Component: Loading', () => {
  it('should render correctly', () => {
    render(
      <Loading isLoading/>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
