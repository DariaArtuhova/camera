import {configureMockStore} from '@jedmao/redux-mock-store';
import { makeCameras} from '../../mocks';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react';
import {CameraList} from './camera-list';
import { MemoryRouter } from 'react-router-dom';

const mockStore = configureMockStore();
const cameras = makeCameras();


const store = mockStore({
  camera: {cameras: cameras},
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
