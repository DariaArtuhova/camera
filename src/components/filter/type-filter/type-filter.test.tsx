import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import {TypeFilter} from './type-filter';

describe('TypeFilter component', () => {
  it('should TypeFilter render is success', () => {
    render(
      <BrowserRouter>
        <TypeFilter />
      </BrowserRouter>
    );

    expect(screen.getByText('Тип камеры')).toBeInTheDocument();
  });
});
