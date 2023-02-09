import {createAction} from '@reduxjs/toolkit';
import {CamerasType, CameraType, PromoType} from '../../types/camera-type';

export const loadCameras = createAction<CamerasType>('data/loadCameras');
export const loadCurrentCamera = createAction<CameraType>('data/loadCamera');
export const loadPromo = createAction<PromoType>('data/loadPromo');
export const setError = createAction<string | null>('offer/setError');
export const loadSimilarCameras = createAction<CamerasType>('data/loadSimilarCameras');
