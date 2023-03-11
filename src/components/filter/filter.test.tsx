import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import {Filter} from './filter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {makeCameras} from '../../mocks';
import {Provider} from 'react-redux';

const mockStore = configureMockStore();
const cameras = makeCameras();

const store = mockStore({
  camera: {cameras: cameras},
});

describe('Filter component', () => {
  it('should Filter render is success', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Filter />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByText('Фильтр')).toBeInTheDocument();
  });
});
