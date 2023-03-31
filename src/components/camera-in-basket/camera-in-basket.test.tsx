
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {makeShoppingPosition} from '../../mocks';
import {CameraInBasket} from './camera-in-basket';

const mockStore = configureMockStore();
const shoppingPosition = makeShoppingPosition;

const store = mockStore({
  basket: {
    camerasInBasket: shoppingPosition,
    discount: 0,
    coupon: undefined,
  },
});

describe('Component: CameraInBasket', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <CameraInBasket shoppingPosition={shoppingPosition} />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByText('Общая цена:')).toBeInTheDocument();
  });
});
