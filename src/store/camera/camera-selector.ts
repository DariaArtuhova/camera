import {Store} from '../../types/store';
import {CamerasType} from '../../types/camera-type';

export const getAllQuests = (state: Store): CamerasType => state.camera.cameras;
export const getCurrentCameras = (state: Store) => state.camera.currentCamera;
export const getPromo = (state: Store) => state.camera.promo;
export const getSimilarCameras = (state: Store) => state.camera.similar;
export const getCamerasDataLoadingStatus = (state: Store): boolean => state.camera.isLoading;

