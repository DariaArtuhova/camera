import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import {deleteScrollLock} from '../../utils';
import {NewReviewSuccess} from './new-review-success';

const mockStore = configureMockStore();

const store = mockStore({
  isVisible: false,
});

describe('Component: MainPage', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <NewReviewSuccess isVisible={false} onClose={() => deleteScrollLock()}/>
      </Provider>
    );

    expect(screen.getByText('Спасибо за отзыв')).toBeInTheDocument();
  });
});
