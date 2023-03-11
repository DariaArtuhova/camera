import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PriceFilter from './price-filter';
import {makeCameras} from '../../../mocks';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';

const mockStore = configureMockStore();
const cameras = makeCameras();

const store = mockStore({
  camera: {cameras: cameras},
});

describe('PriceFilter component', () => {
  it('should PriceFilter render is success', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <PriceFilter />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByText('Цена, ₽')).toBeInTheDocument();
  });
});
