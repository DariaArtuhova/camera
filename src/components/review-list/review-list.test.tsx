import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {makeCamera, makeReview} from '../../mocks';
import {ReviewList} from './review-list';

const mockStore = configureMockStore();

const reviews = Array.from({ length: 2 }, () => makeReview(1));
const currentCamera = {...makeCamera(), id: 1};

const store = mockStore({
  review: {review: reviews },
  camera: {currentCamera: currentCamera}
});

describe('Component: Reviews', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <ReviewList />
      </Provider>
    );

    expect(screen.getByText(reviews[0].review)).toBeInTheDocument();
  });
});
