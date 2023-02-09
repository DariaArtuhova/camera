import {ApiRoute} from '../const';
import {CamerasType, CameraType, PromoType} from '../types/camera-type';
import {loadCameras, loadCurrentCamera, loadPromo, loadSimilarCameras, setError} from '../store/camera/camera-action';
import {loadReviews} from '../store/review/review-action';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import {AppDispatch, Store} from '../types/store';
import {store} from '../store';
import {ReviewPostType, ReviewType} from '../types/review-type';

export const clearErrorAction = createAsyncThunk(
  'offer/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      2000,
    );
  },
);

export const fetchCamerasAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: Store;
  extra: AxiosInstance;
}> (
  'data/loadCameras',
  async (_arg, {dispatch, extra: api}) => {

    const {data} = await api.get<CamerasType>(ApiRoute.Cameras);

    dispatch(loadCameras(data));
  }
);

export const fetchCurrentCameraAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: Store;
  extra: AxiosInstance;
}> (
  'data/loadCamera',
  async (cameraId, {dispatch, extra: api}) => {

    const {data} = await api.get<CameraType>(`${ApiRoute.Cameras}/${cameraId}`);

    dispatch(loadCurrentCamera(data));
  }
);


export const fetchReviewsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: Store;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async (id, {dispatch, extra: api}) => {
    const response = await api.get<ReviewType[]>(`${ApiRoute.Cameras}/${id}${ApiRoute.Reviews}`);
    dispatch(loadReviews(response.data));
  },
);

export const fetchPromoAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: Store;
  extra: AxiosInstance;
}> (
  'data/loadPromo',
  async (_arg, {dispatch, extra: api}) => {

    const {data} = await api.get<PromoType>(ApiRoute.Promo);

    dispatch(loadPromo(data));
  }
);

export const fetchSimilarCameras = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: Store;
  extra: AxiosInstance;
}>(
  'data/fetchSimilarCameras',
  async (id, {dispatch, extra: api}) => {
    const response = await api.get<CamerasType>(`${ApiRoute.Cameras}/${id}${ApiRoute.Similar}`);
    dispatch(loadSimilarCameras(response.data));
  },
);

export const sendNewReview = createAsyncThunk<void, ReviewPostType, {
  dispatch: AppDispatch;
  state: Store;
  extra: AxiosInstance;
}>(
  'data/sendNewReview',
  async ({userName, advantage, disadvantage, cameraId, review, rating}, {dispatch, extra: api}) => {

    await api.post<ReviewType>(`${ApiRoute.Reviews}`, {userName, advantage, disadvantage, cameraId, review, rating});
    dispatch(fetchReviewsAction(cameraId.toString()));
  }
);
