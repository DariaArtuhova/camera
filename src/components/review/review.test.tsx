import {configureMockStore} from '@jedmao/redux-mock-store';
import {makeReview} from '../../mocks';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import {Review} from './review';

const mockStore = configureMockStore();
const currentReview = {...makeReview(1)};

const store = mockStore({
  review: {currentReview},
});

describe('Component: CameraPage', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Review reviews={currentReview}/>
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByText(`${currentReview.advantage}`)).toBeInTheDocument();
  });
});
