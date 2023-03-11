import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Sort} from './sort';
import { MemoryRouter } from 'react-router-dom';

const mockStore = configureMockStore();
const store = mockStore();

describe('Component: Sort', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Sort />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByText(/Сортировать:/i)).toBeInTheDocument();
  });
});
