import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {AppRoute} from '../../const';
import App from './app';
import {makeCamera, makeCameraInBasket, makeReview} from '../../mocks';
import thunk from 'redux-thunk';
import HistoryRouter from '../history-router/history-router';
const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);

const cameras = Array.from({ length: 10 }, () => makeCamera());
const promo = makeCamera();
const currentCamera = {...makeCamera(), id: 1};
const reviews = Array.from({ length: 10 }, () => makeReview(1));
const similar = Array.from({ length: 10 }, () => makeCamera());
const camerasInBasket = makeCameraInBasket;

const store = mockStore({
  camera: {cameras: cameras, currentCamera: currentCamera, similar: similar},
  promo: {promo: promo},
  review: {review: reviews},
  basket: {camerasInBasket: camerasInBasket},

});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store} >
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('Application Routing', () => {
  it('should render "MainPaige" when user navigate to  "/"', () => {
    history.push(AppRoute.Root);

    render(fakeApp);

    expect(screen.getByText('Каталог фото- и видеотехники')).toBeInTheDocument();
  });


  it('should render "RoomPage" when user navigate to "/offer/:id"', () => {
    history.push(`${AppRoute.Card}/13'`);

    render(fakeApp);


    expect(screen.getByText(/Характеристики/i)).toBeInTheDocument();
    expect(screen.getByText(/Описание/i)).toBeInTheDocument();

  });

  it('should render "NotFoundPage" when user navigate to non-existent route', () => {
    history.push('/unknown-route');

    render(fakeApp);


    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
    expect(screen.getByText(/Go to main page/i)).toBeInTheDocument();
  });

  it('should render "Basket" when user navigate to non-existent route', () => {
    history.push(AppRoute.Basket);

    render(fakeApp);


    expect(screen.getByText(/Скидка/i)).toBeInTheDocument();
  });
});
