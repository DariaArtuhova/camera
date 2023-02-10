import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {makeReviews} from '../../mocks';
import {ReviewList} from './review-list';

const mockStore = configureMockStore();

const comments = makeReviews();

const store = mockStore({
  reviews: {currentComments: comments, reviewCounter: 3},
});

describe('Component: Reviews', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <ReviewList />
      </Provider>
    );

    expect(screen.getAllByText(comments[0].review)[0]).toBeInTheDocument();
  });
});
