import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {Header} from './header';
import {makeCameraInBasket, makeCameras} from '../../mocks';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';

const mockStore = configureMockStore();
const cameras = makeCameras();
const camerasInBasket = makeCameraInBasket;

const store = mockStore({
  camera: {cameras: cameras},
  basket: {camerasInBasket: camerasInBasket}

});

describe('Component: Header', () => {
  it('should render correctly', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>

    );

    expect(screen.getByText('Каталог')).toBeInTheDocument();
  });
});
