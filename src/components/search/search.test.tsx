import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import {Search} from './search';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {makeCameras} from '../../mocks';
import {Provider} from 'react-redux';

const mockStore = configureMockStore();
const cameras = makeCameras();

const store = mockStore({
  camera: {cameras: cameras},
});

describe('Search component', () => {
  it('should Search render is success', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Search />
        </Provider>
      </BrowserRouter>
    );

    expect(`${cameras[0].name}`).toEqual(`${cameras[0].name}`);
  });
});
