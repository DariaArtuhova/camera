import {configureMockStore} from '@jedmao/redux-mock-store';
import {makeCamera} from '../../mocks';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import {Camera} from './camera';
import { MemoryRouter } from 'react-router-dom';

const mockStore = configureMockStore();
const currentCamera = {...makeCamera(), id: 1};

const store = mockStore({
  camera: {currentCamera},
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

    expect(screen.getByText(`${currentCamera.name}`)).toBeInTheDocument();
  });
});
