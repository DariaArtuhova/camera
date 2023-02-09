import { CamerasType, CameraType, PromoType} from '../../types/camera-type';
import {createReducer} from '@reduxjs/toolkit';
import {loadCameras, loadCurrentCamera, loadPromo, loadSimilarCameras, setError} from './camera-action';

export type InitialState = {
  cameras: CamerasType;
  currentCamera: CameraType | null;
  promo: PromoType | null;
  error: string | null;
  similar: CamerasType;
}
const initialState: InitialState = {
  cameras: [],
  currentCamera: null,
  promo: null,
  error: null,
  similar: []
};

export const cameraReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadCameras, (state, action) => {
      state.cameras = action.payload;
    })
    .addCase(loadCurrentCamera, (state, action) => {
      state.currentCamera = action.payload;
    })
    .addCase(loadPromo, (state, action) => {
      state.promo = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(loadSimilarCameras, (state, action) => {
      state.similar = action.payload;
    });
});
