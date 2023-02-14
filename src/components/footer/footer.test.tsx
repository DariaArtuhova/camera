import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {Footer} from './footer';

const mockStore = configureMockStore();

const store = mockStore();

describe('Component: Footer', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Footer />
      </Provider>
    );

    expect(screen.getByText('Навигация')).toBeInTheDocument();
  });
});
