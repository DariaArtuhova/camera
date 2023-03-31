import {Store} from '../../types/store';
import {NameSpace} from '../../const';
import {createSelector} from '@reduxjs/toolkit';

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
