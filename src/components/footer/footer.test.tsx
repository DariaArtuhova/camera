import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {Footer} from './footer';
import { BrowserRouter } from 'react-router-dom';

const mockStore = configureMockStore();

const store = mockStore();

describe('Component: Footer', () => {
  it('should render correctly', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Footer />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByText('Навигация')).toBeInTheDocument();
  });
});
