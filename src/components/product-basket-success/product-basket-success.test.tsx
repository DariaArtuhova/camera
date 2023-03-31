
import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import {deleteScrollLock} from '../../utils';
import {ProductBasketSuccess} from './product-basket-success';


describe('Component: ProductBasketSuccess', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <ProductBasketSuccess openModal={false} onClose={() => deleteScrollLock()} />
      </MemoryRouter>
    );

    expect(screen.getByText('Спасибо за покупку')).toBeInTheDocument();
  });
});
