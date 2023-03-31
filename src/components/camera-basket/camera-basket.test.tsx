
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { makeCameraInBasket} from '../../mocks';
import {CameraBasket} from './camera-basket';

const mockStore = configureMockStore();
const camerasInBasket = makeCameraInBasket;

const store = mockStore({
  basket: {
    camerasInBasket: camerasInBasket,
    discount: 0,
    coupon: undefined,
  },
});

describe('Component: CameraBasket', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <CameraBasket camerasInBasket={camerasInBasket} />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByTestId('cart')).toBeInTheDocument();
  });
});
