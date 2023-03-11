import {ApiRoute} from '../const';
import {CamerasType, CameraType, PromoType, SortParams} from '../types/camera-type';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import {AppDispatch, Store} from '../types/store';
import {ReviewPostType, ReviewType} from '../types/review-type';
import {loadCameras, setCountCameras} from '../store/camera/camera-action';


export const fetchCamerasAction = createAsyncThunk<CamerasType, undefined, {
  dispatch: AppDispatch;
  state: Store;
  extra: AxiosInstance;
}> (
  'fetchCamerasAction',
  async (_arg, { extra: api}) => {

    const {data} = await api.get<CamerasType>(ApiRoute.Cameras);

    return data;
  }
);

export const fetchCurrentCameraAction = createAsyncThunk<CameraType, number, {
  dispatch: AppDispatch;
  state: Store;
  extra: AxiosInstance;
}> (
  'data/loadCamera',
  async (cameraId, { extra: api}) => {

    const {data} = await api.get<CameraType>(`${ApiRoute.Cameras}/${cameraId}`);

    return data;
  }
);


export const fetchReviewsAction = createAsyncThunk<ReviewType[], string, {
  dispatch: AppDispatch;
  state: Store;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async (id, { extra: api}) => {
    const response = await api.get<ReviewType[]>(`${ApiRoute.Cameras}/${id}${ApiRoute.Reviews}`);
    return response.data;
  },
);

export const fetchPromoAction = createAsyncThunk<PromoType, undefined, {
  dispatch: AppDispatch;
  state: Store;
  extra: AxiosInstance;
}> (
  'data/loadPromo',
  async (_arg, { extra: api}) => {

    const {data} = await api.get<PromoType>(ApiRoute.Promo);

    return data;
  }
);

export const fetchSimilarCameras = createAsyncThunk<CamerasType, number, {
  dispatch: AppDispatch;
  state: Store;
  extra: AxiosInstance;
}>(
  'data/fetchSimilarCameras',
  async (id, { extra: api}) => {
    const response = await api.get<CamerasType>(`${ApiRoute.Cameras}/${id}${ApiRoute.Similar}`);
    return response.data;
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

export const fetchCamerasWithParamsAction = createAsyncThunk<void, SortParams, {
  dispatch: AppDispatch;
  state: Store;
  extra: AxiosInstance;
}>(
  'cameras/fetchCamerasWithParamsAction',
  async ({sort, order, priceStart, priceEnd, type, count, level, category}, {dispatch, extra: api}) => {

    const { data } = await api.get<CameraType[]>(ApiRoute.Cameras,
      {
        params: {
          '_sort': sort,
          '_order': order,
          'price_gte': priceStart,
          'price_lte': priceEnd,
          'type': type,
          'level': level,
          'category': category,
          'stringCount': count,
        }});

    dispatch(setCountCameras(data.length));
    dispatch(loadCameras(data));
  },
);
