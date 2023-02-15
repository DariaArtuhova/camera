import { CamerasType, CameraType, PromoType} from '../../types/camera-type';
import {createReducer} from '@reduxjs/toolkit';
import { loadSimilarCameras, setError} from './camera-action';
import {fetchCamerasAction, fetchCurrentCameraAction, fetchPromoAction} from '../../services/api-actions';

export type InitialState = {
  cameras: CamerasType;
  currentCamera: CameraType | null;
  promo: PromoType | null;
  error: string | null;
  similar: CamerasType;
  isLoading: boolean;
}
export const initialState: InitialState = {
  cameras: [],
  currentCamera: null,
  promo: null,
  error: null,
  similar: [],
  isLoading: false,

};

export const cameraReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchCurrentCameraAction.fulfilled, (state, action) => {
      state.currentCamera = action.payload;
    })
    .addCase(fetchCurrentCameraAction.pending, (state, action) => {
      state.isLoading = false;
    })
    .addCase(fetchCamerasAction.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(fetchCamerasAction.fulfilled, (state, action) => {
      state.cameras = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchPromoAction.fulfilled, (state, action) => {
      state.promo = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(loadSimilarCameras, (state, action) => {
      state.similar = action.payload;
    });
});
