import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {ApiRoute} from '../const';
import {Store} from '../types/store';
import {createAPI} from './api';
import {makeCamera, makeReviews} from '../mocks';
import {fetchCamerasAction, fetchReviewsAction} from './api-actions';
import {CamerasType} from '../types/camera-type';


describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    Store,
    Action<string>,
    ThunkDispatch<Store, typeof api, Action>
    >(middlewares);

  it('should dispatch Load_Cameras when GET /cameras', async () => {
    const mockCameras: CamerasType = Array.from({ length: 4 }, makeCamera);
    mockAPI
      .onGet(ApiRoute.Cameras)
      .reply(200, mockCameras);

    const store = mockStore();

    await store.dispatch(fetchCamerasAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchCamerasAction.pending.type,
      fetchCamerasAction.fulfilled.type,
    ]);
  });

  it('should dispatch Load_Cameras when GET /reviews', async () => {
    const mockReviews = makeReviews();
    mockAPI
      .onGet(`${ApiRoute.Cameras}/12${ApiRoute.Reviews}`)
      .reply(200, mockReviews);

    const store = mockStore();

    await store.dispatch(fetchReviewsAction('12'));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchReviewsAction.pending.type,
      fetchReviewsAction.fulfilled.type,
    ]);
  });
});
