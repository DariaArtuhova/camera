import {configureMockStore} from '@jedmao/redux-mock-store';
import {makeCamera} from '../../mocks';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import {Promo} from './promo';

const mockStore = configureMockStore();
const promo = makeCamera();

const store = mockStore({
  camera: {promo},
});

describe('Component: Promo', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Promo />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByText(`${promo.name}`)).toBeInTheDocument();
  });
});
