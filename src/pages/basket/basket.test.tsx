import {configureMockStore} from '@jedmao/redux-mock-store';
import {makeCamera, makeCameraInBasket} from '../../mocks';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import {Basket} from './basket';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const camerasInBasket = makeCameraInBasket;
const cameras = Array.from({ length: 10 }, () => makeCamera());

const store = mockStore({
  camera: {cameras: cameras},
  basket: { camerasInBasket: camerasInBasket},
});

describe('Component: Basket', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Basket />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByText(/Скидка/i)).toBeInTheDocument();
  });
});
