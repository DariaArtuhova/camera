import {CameraInBasket} from '../camera-in-basket/camera-in-basket';
import {CameraTypeInBasket} from '../../types/camera-type';


type CartListProps = {
  camerasInBasket: {[id: number]: CameraTypeInBasket};
}

export function CameraListInBasket({camerasInBasket}: CartListProps): JSX.Element {
  return (
    <>
      {Object.values(camerasInBasket).map((cameraInBasket) => <CameraInBasket key={cameraInBasket.camera.id} shoppingPosition={cameraInBasket}/>)}
    </>
  );
}

