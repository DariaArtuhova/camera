import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import {LevelCheckbox} from './level-checkbox';

describe('LevelCheckbox component', () => {
  it('should LevelCheckbox render is success', () => {
    render(
      <BrowserRouter>
        <LevelCheckbox id='1'/>
      </BrowserRouter>
    );

    expect(screen.getByTestId('level-checkbox')).toBeInTheDocument();
  });
});
