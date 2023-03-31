
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {makeCamera} from '../../mocks';
import {deleteScrollLock} from '../../utils';
import {ModalBuyCamera} from './modal-buy-camera';

const mockStore = configureMockStore();
const currentCamera = makeCamera();

const store = mockStore({
  camera: {
    currentCamera: currentCamera,
  },
});

describe('Component: ModalBuyCamera', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <ModalBuyCamera openModal={false} currentCamera={currentCamera} onClose={() => deleteScrollLock()} />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByText('Добавить в корзину')).toBeInTheDocument();
  });
});
