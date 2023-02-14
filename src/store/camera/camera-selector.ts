import {Store} from '../../types/store';

export const getAllQuests = (state: Store) => state.camera.cameras;
export const getCurrentCameras = (state: Store) => state.camera.currentCamera;
export const getPromo = (state: Store) => state.camera.promo;
export const getSimilarCameras = (state: Store) => state.camera.similar;
export const getCamerasDataLoadingStatus = (state: Store): boolean => state.camera.isLoading;

