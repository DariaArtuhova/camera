import {createAction} from '@reduxjs/toolkit';
import {CameraType} from '../../types/camera-type';

export const setCamerasInBasket = createAction<CameraType>('cameras/setCamerasInBasket');
