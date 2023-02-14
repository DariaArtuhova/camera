import {configureMockStore} from '@jedmao/redux-mock-store';
import {makeCamera, makeReview} from '../../mocks';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import {CameraPage} from './camera-page';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const currentCamera = {...makeCamera(), id: 1};
const reviews = Array.from({ length: 10 }, () => makeReview(1));
const similar = Array.from({ length: 10 }, () => makeCamera());

const store = mockStore({
  camera: { currentCamera: currentCamera, similar: similar },
  review: {review: reviews},
});

describe('Component: CameraPage', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <CameraPage />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByText('Похожие товары')).toBeInTheDocument();
  });
});
