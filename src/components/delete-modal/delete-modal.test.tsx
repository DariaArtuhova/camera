
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {makeCamera} from '../../mocks';
import {DeleteModal} from './delete-modal';
import {deleteScrollLock} from '../../utils';

const mockStore = configureMockStore();
const currentCamera = makeCamera();

const store = mockStore({
  camera: {
    currentCamera: currentCamera,
  },
});

describe('Component: DeleteModal', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <DeleteModal isOpenModal={false} currentCamera={currentCamera} onClose={() => deleteScrollLock()} />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByText('Удалить')).toBeInTheDocument();
  });
});
