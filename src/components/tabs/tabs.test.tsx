import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {makeCamera} from '../../mocks';
import {Tabs} from './tabs';

const camera = makeCamera();

describe('Component: Tabs', () => {
  it('should render correctly', () => {
    render(
      <BrowserRouter>
        <Tabs product={camera}/>
      </BrowserRouter>

    );

    expect(screen.getByText('Характеристики')).toBeInTheDocument();
  });
});
