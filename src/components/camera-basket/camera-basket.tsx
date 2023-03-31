import {CameraListInBasket} from '../camera-list-in-basket/camera-list-in-basket';
import {CameraTypeInBasket} from '../../types/camera-type';


type CartProps = {
  camerasInBasket: {[id: number]: CameraTypeInBasket};
};

export function CameraBasket({camerasInBasket}: CartProps): JSX.Element {
  return (
    <div className="cart" data-testid='cart'>
      <CameraListInBasket camerasInBasket={camerasInBasket}/>
    </div>
  );
}

