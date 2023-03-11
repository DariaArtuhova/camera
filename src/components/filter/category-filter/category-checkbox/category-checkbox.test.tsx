import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import {CategoryCheckbox} from './category-checkbox';

describe('CategoryCheckbox component', () => {
  it('should CategoryCheckbox render is success', () => {
    render(
      <BrowserRouter>
        <CategoryCheckbox id='1'/>
      </BrowserRouter>
    );

    expect(screen.getByTestId('category-checkbox')).toBeInTheDocument();
  });
});
