import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import {ShowMoreButton} from './show-more-button';

const mockStore = configureMockStore();

const store = mockStore();


describe('Component: CameraPage', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <ShowMoreButton />
      </Provider>
    );

    expect(screen.getByText('Показать больше отзывов')).toBeInTheDocument();
  });
});
