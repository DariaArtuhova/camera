
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { makeCameraInBasket} from '../../mocks';
import {CameraListInBasket} from './camera-list-in-basket';

const mockStore = configureMockStore();
const camerasInBasket = makeCameraInBasket;

const store = mockStore({
  basket: {
    camerasInBasket: camerasInBasket,
    discount: 0,
    coupon: undefined,
  },
});

describe('Component: CameraListInBasket', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <CameraListInBasket camerasInBasket={camerasInBasket} />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByText('Общая цена:')).toBeInTheDocument();
  });
});
