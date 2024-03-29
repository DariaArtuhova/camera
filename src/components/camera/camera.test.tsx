import {configureMockStore} from '@jedmao/redux-mock-store';
import {makeCamera, makeCameraInBasket} from '../../mocks';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import {Camera} from './camera';
import { MemoryRouter } from 'react-router-dom';

const mockStore = configureMockStore();
const currentCamera = {...makeCamera(), id: 1};
const camerasInBasket = makeCameraInBasket;

const store = mockStore({
  camera: {currentCamera},
  basket: {camerasInBasket: camerasInBasket},

});

describe('Component: CameraPage', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Camera camera={currentCamera}/>
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByTestId('product-card')).toBeInTheDocument();
  });
});
