import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {Header} from './header';

describe('Component: Header', () => {
  it('should render correctly', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(screen.getByText('Каталог')).toBeInTheDocument();
  });
});
