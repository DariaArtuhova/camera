import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import {TypeCheckbox} from './type-checkbox';

describe('CategoryCheckbox component', () => {
  it('should CategoryCheckbox render is success', () => {
    render(
      <BrowserRouter>
        <TypeCheckbox id='1'/>
      </BrowserRouter>
    );

    expect(screen.getByTestId('type-checkbox')).toBeInTheDocument();
  });
});
