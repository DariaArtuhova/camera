import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import {CategoryFilter} from './category-filter';

describe('CategoryFilter component', () => {
  it('should CategoryFilter render is success', () => {
    render(
      <BrowserRouter>
        <CategoryFilter />
      </BrowserRouter>
    );

    expect(screen.getByText('Категория')).toBeInTheDocument();
  });
});
