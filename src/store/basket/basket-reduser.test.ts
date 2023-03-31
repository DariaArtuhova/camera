import {
  CartProcess,
  CartProcessType,
  clearCart, deleteCameraInBasket,
  setCoupon,
  setDiscount
} from './basket-reduser';
import {
  makeCamera,
  makeCameraInBasket
} from '../../mocks';

describe('Reducer: cart process', () => {
  let state: CartProcessType;
  const camerasInBasket = makeCameraInBasket;
  const cameraInBasket = makeCamera();


  beforeEach(() => {
    state = {
      camerasInBasket: {},
      discount: 0,
      coupon: undefined,
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(CartProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  it('Add clearCart work is success', () => {

    expect(CartProcess.reducer({...state, camerasInBasket: camerasInBasket, coupon: ''}, clearCart())).toEqual({
      camerasInBasket: {},
      discount: 0,
      coupon: undefined,
    });
  });

  it('Add setCoupon work is success', () => {

    expect(CartProcess.reducer({...state, coupon: 'camera-333'}, setCoupon('camera-333'))).toEqual({
      camerasInBasket: {},
      discount: 0,
      coupon: 'camera-333',
    });
  });

  it('Add setDiscount work is success', () => {

    expect(CartProcess.reducer({...state, coupon: ''}, setDiscount(15))).toEqual({
      camerasInBasket: {},
      discount: 15,
      coupon: '',
    });
  });

  /*it('Add checkSaveCameraInBasket work is success', () => {

      expect(CartProcess.reducer({...state, camerasInBasket: camerasInBasket, coupon: ''}, checkSaveCameraInBasket())).toEqual({
        camerasInBasket: camerasInBasket,
        discount: 0,
        coupon: '',
      });
    });*/


  it('Add deleteCameraInBasket work is success', () => {

    expect(CartProcess.reducer({...state, camerasInBasket: camerasInBasket, coupon: ''}, deleteCameraInBasket(cameraInBasket))).toEqual({
      camerasInBasket: camerasInBasket,
      discount: 0,
      coupon: '',
    });
  });
});
