import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Sort} from './sort';

const mockStore = configureMockStore();
const store = mockStore();

describe('Component: Sort', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Sort />
      </Provider>
    );

    expect(screen.getByText(/Сортировать:/i)).toBeInTheDocument();
  });
});
