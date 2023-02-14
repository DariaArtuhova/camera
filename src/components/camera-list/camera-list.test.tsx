import {configureMockStore} from '@jedmao/redux-mock-store';
import {makeCamera} from '../../mocks';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import {CameraList} from './camera-list';
import { MemoryRouter } from 'react-router-dom';

const mockStore = configureMockStore();
const cameras = Array.from({ length: 10 }, () => makeCamera());


const store = mockStore({
  camera: {cameras :cameras},
});

describe('Component: CameraList', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <CameraList />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByText(`${cameras[0].name}`)).toBeInTheDocument();
  });
});
