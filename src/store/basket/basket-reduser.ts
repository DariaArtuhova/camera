import {CameraType} from '../../types/camera-type';
import { NameSpace} from '../../const';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {postPromocodeDiscrountAction} from '../../services/api-actions';

export type CameraTypeInBasket = {
  camera: CameraType;
  count: number;
}

export type CartProcessType = {
  camerasInBasket: {
    [id: number]: CameraTypeInBasket;
  };
  discount: number;
  coupon?: string;
}
const initialState: CartProcessType = {
  camerasInBasket: {},
  discount: 0,
  coupon: undefined,
};

export const CartProcess = createSlice({
  initialState,
  name: NameSpace.Basket,
  extraReducers(builder) {
    builder
      .addCase(postPromocodeDiscrountAction.fulfilled, (state, action) => {
        state.coupon = action.payload;
      });
  },
  reducers: {
    setCameraInBasket: (state, action: PayloadAction<CameraType>) => {
      if (state.camerasInBasket[action.payload.id]) {
        state.camerasInBasket[action.payload.id].count += 1;
      } else {
        state.camerasInBasket[action.payload.id] = {camera: action.payload, count: 1};
      }

      localStorage.setItem('camerasInBasket', JSON.stringify(state.camerasInBasket));
    },
    deleteCameraInBasket: (state, action: PayloadAction<CameraType>) => {
      delete state.camerasInBasket[action.payload.id];
      localStorage.setItem('camerasInBasket', JSON.stringify(state.camerasInBasket));
    },
    checkSaveCameraInBasket: (state) => {
      if(localStorage.getItem('camerasInBasket')) {
        state.camerasInBasket = JSON.parse(localStorage.getItem('camerasInBasket') || '') as CameraType;
      }
    },
    setCountCameraInBasket: (state, action: PayloadAction<CameraTypeInBasket>) => {
      state.camerasInBasket[action.payload.camera.id].count = action.payload.count;
      localStorage.setItem('camerasInBasket', JSON.stringify(state.camerasInBasket));
    },
    increaseProductCount: (state, action: PayloadAction<CameraType>) => {
      state.camerasInBasket[action.payload.id].count += 1;
      localStorage.setItem('camerasInBasket', JSON.stringify(state.camerasInBasket));
    },
    decreaseProductCount: (state, action: PayloadAction<CameraType>) => {
      state.camerasInBasket[action.payload.id].count -= 1;
      localStorage.setItem('camerasInBasket', JSON.stringify(state.camerasInBasket));
    },
    setDiscount: (state, action:PayloadAction<number>) => {
      state.discount = action.payload;
      localStorage.setItem('setDiscount', JSON.stringify(state.discount));

    },
    clearCart: (state) => {
      Object.assign(state, initialState);
      localStorage.removeItem('camerasInBasket');
    },
    setCoupon: (state, action:PayloadAction<string>) => {
      state.coupon = action.payload;
    },
  }
});
export const {setCameraInBasket,
  checkSaveCameraInBasket,
  setCountCameraInBasket,
  increaseProductCount,
  decreaseProductCount,
  deleteCameraInBasket,
  setDiscount,
  clearCart,
  setCoupon
} = CartProcess.actions;
