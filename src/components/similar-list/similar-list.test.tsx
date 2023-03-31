import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {makeCamera, makeCameraInBasket} from '../../mocks';
import {SimilarList} from './similar-list';
import {BrowserRouter} from 'react-router-dom';

const mockStore = configureMockStore();

const cameras = Array.from({ length: 2 }, () => makeCamera());
const camerasInBasket = makeCameraInBasket;


const store = mockStore({
  camera: {similar: cameras },
  basket: {camerasInBasket: camerasInBasket}

});

describe('Component: SimilarList', () => {
  it('should render correctly', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <SimilarList />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getAllByText(cameras[0].name)[0]).toBeInTheDocument();
  });
});
