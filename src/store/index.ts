import {configureStore} from '@reduxjs/toolkit/';
import {AppDispatch, Store} from '../types/store';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {createAPI} from '../services/api';
import {cameraReducer} from './camera/camera-reducer';
import {reviewReducer} from './review/review-reducer';
import {CartProcess} from './basket/basket-reduser';

export const api = createAPI();

export const store = configureStore({
  reducer: {
    camera: cameraReducer,
    review: reviewReducer,
    basket: CartProcess.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<Store> = useSelector;
