import {store} from '../store';
import {clearErrorAction} from './api-actions';
import {setError} from '../store/camera/camera-action';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
