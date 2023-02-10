import {render, screen} from '@testing-library/react';
import {Error} from './error';
import {BrowserRouter} from 'react-router-dom';

describe('Component: ErrorScreen', () => {
  it('should render correctly', () => {
    render(
      <BrowserRouter>
        <Error />
      </BrowserRouter>
    );

    expect(screen.getByText('Page not found')).toBeInTheDocument();
  });
});
