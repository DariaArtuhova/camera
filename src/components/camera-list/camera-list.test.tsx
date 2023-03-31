import {configureMockStore} from '@jedmao/redux-mock-store';
import {makeCameraInBasket, makeCameras} from '../../mocks';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react';
import {CameraList} from './camera-list';
import { MemoryRouter } from 'react-router-dom';

const mockStore = configureMockStore();
const cameras = makeCameras();
const camerasInBasket = makeCameraInBasket;


const store = mockStore({
  camera: {cameras: cameras},
  basket: {camerasInBasket: camerasInBasket}

});

describe('Component: CameraList', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <CameraList cameras={cameras}/>
        </Provider>
      </MemoryRouter>
    );

    expect(`${cameras[0].name}`).toEqual(`${cameras[0].name}`);
  });
});
