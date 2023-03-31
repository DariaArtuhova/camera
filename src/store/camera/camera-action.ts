import {createAction} from '@reduxjs/toolkit';
import {CamerasType, CameraType} from '../../types/camera-type';

export const loadCameras = createAction<CamerasType>('data/loadCameras');
export const setError = createAction<string | null>('camera/setError');
export const changeSorting = createAction<string>('camera/changeSorting');
export const changeTypeSorting = createAction<string>('camera/changeTypeSorting');
export const setCountCameras = createAction<number>('camera/setCountCameras');
export const setCamerasInBasket = createAction<CameraType>('cameras/setCamerasInBasket');
