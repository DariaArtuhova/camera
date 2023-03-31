
import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import {deleteScrollLock} from '../../utils';
import {ProductBasketSuccessCameraPage} from './product-basket-success-camera-page';


describe('Component: ProductBasketSuccessCameraPage', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <ProductBasketSuccessCameraPage openModal={false} onClose={() => deleteScrollLock()} />
      </MemoryRouter>
    );

    expect(screen.getByText('Товар успешно добавлен в корзину')).toBeInTheDocument();
  });
});
