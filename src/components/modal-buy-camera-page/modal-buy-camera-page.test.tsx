
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {makeCamera} from '../../mocks';
import {deleteScrollLock} from '../../utils';
import {ModalBuyCameraPage} from './modal-buy-camera-page';

const mockStore = configureMockStore();
const currentCamera = makeCamera();

const store = mockStore({
  camera: {
    currentCamera: currentCamera,
  },
});

describe('Component: ModalBuyCameraPage', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <ModalBuyCameraPage openModal={false} currentCamera={currentCamera} onClose={() => deleteScrollLock()} />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByText('Добавить в корзину')).toBeInTheDocument();
  });
});
