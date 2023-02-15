import {createAction} from '@reduxjs/toolkit';
import {CamerasType} from '../../types/camera-type';

export const loadCameras = createAction<CamerasType>('data/loadCameras');
export const setError = createAction<string | null>('offer/setError');
export const loadSimilarCameras = createAction<CamerasType>('data/loadSimilarCameras');
