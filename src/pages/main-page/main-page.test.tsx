import {configureMockStore} from '@jedmao/redux-mock-store';
import {makeCamera, makeCameraInBasket} from '../../mocks';
import {Provider} from 'react-redux';
import {MainPage} from './main-page';
import {render, screen} from '@testing-library/react';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const cameras = Array.from({ length: 10 }, () => makeCamera());
const promo = makeCamera();
const camerasInBasket = makeCameraInBasket;

const store = mockStore({
  camera: {cameras: cameras},
  promo: {promo: promo},
  basket: {camerasInBasket: camerasInBasket}
});

describe('Component: MainPage', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <MainPage />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByText('Каталог фото- и видеотехники')).toBeInTheDocument();
  });
});
