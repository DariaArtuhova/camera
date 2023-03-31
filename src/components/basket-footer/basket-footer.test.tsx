
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import {BasketFooter} from './basket-footer';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { makeCameraInBasket} from '../../mocks';

const mockStore = configureMockStore();
const camerasInBasket = makeCameraInBasket;

const store = mockStore({
  basket: {
    camerasInBasket: camerasInBasket,
    discount: 0,
    coupon: undefined,
  },
});

describe('Component: BasketFooter', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <BasketFooter />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByText('Если у вас есть промокод на скидку, примените его в этом поле')).toBeInTheDocument();
  });
});
