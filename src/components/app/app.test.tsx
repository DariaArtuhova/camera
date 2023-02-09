import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {AppRoute} from '../../const';
import App from './app';
import {ReviewType} from "../../types/review-type";
import {makeCamera, makeCameras, makeReview} from "../../mocks";

const mockStore = configureMockStore();

const fakeReview = {...makeCamera(), id: 13};
const fakeReviews = [...makeCameras(), fakeReview];
const similarComments = [{...makeCamera(), id: 14}, {...makeCamera(), id: 15}, {...makeCamera(), id: 16}];
const reviews: ReviewType[] = [{...makeReview(10), id: '13'}, {...makeReview(10), id: '13'}];

const store = mockStore({
  CAMERAS: {cameras: fakeReviews, currentReviews: fakeReview, currentNearSimilar: similarComments},
  REVIEWS: {currentComments: reviews},
});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
      <App />
  </Provider>
);

describe('Application Routing', () => {
  it('should render "MainPaige" when user navigate to  "/"', () => {
    history.push(AppRoute.Root);

    render(fakeApp);

    expect(screen.getByText(/Каталог/i)).toBeInTheDocument();
  });


  it('should render "RoomPage" when user navigate to "/offer/:id"', () => {
    history.push(`${AppRoute.Card}/13'`);

    render(fakeApp);

    expect(screen.getByText(/Характеристики/i)).toBeInTheDocument();
    expect(screen.getByText(/Описание/i)).toBeInTheDocument();

  });

  it('should render "NotFoundPage" when user navigate to non-existent route', () => {
    history.push(AppRoute.Error);

    render(fakeApp);

    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
    expect(screen.getByText(/Go to main page/i)).toBeInTheDocument();
  });
});
