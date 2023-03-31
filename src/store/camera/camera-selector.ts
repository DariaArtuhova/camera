import {Store} from '../../types/store';
import {CamerasType} from '../../types/camera-type';
import { NameSpace} from '../../const';
import {createSelector} from '@reduxjs/toolkit';

export const getAllQuests = (state: Store): CamerasType => state.camera.cameras;
export const getCurrentCameras = (state: Store) => state.camera.currentCamera;
export const getPromo = (state: Store) => state.camera.promo;
export const getSimilarCameras = (state: Store) => state.camera.similar;
export const getCamerasDataLoadingStatus = (state: Store): boolean => state.camera.isLoading;
export const getCartDiscountPercents = (state: Store): number => state[NameSpace.Basket].discount;
export const getCamerasInBasket = (state: Store) => state[NameSpace.Basket].camerasInBasket;
export const getCoupon = (state: Store) => state[NameSpace.Basket].coupon;
export const orderSelector = createSelector(
  [
    getCoupon,
    getCamerasInBasket
  ], (coupon, products) => ({
    camerasIds: [+Object.keys(products).map((product) => product.match(/\d/g)).join('')],
    coupon: !coupon ? null : coupon,
  })
);

