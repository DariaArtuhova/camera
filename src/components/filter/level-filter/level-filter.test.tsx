import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import {LevelFilter} from './level-filter';

describe('LevelFilter component', () => {
  it('should LevelFilter render is success', () => {
    render(
      <BrowserRouter>
        <LevelFilter />
      </BrowserRouter>
    );

    expect(screen.getByText('Уровень')).toBeInTheDocument();
  });
});
