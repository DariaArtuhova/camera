import {
  CameraTypeInBasket,
  decreaseProductCount,
  increaseProductCount,
  setCountCameraInBasket
} from '../../store/basket/basket-reduser';
import {useAppDispatch} from '../../store';
import {ChangeEvent, useState} from 'react';
import {DeleteModal} from '../delete-modal/delete-modal';
import {deleteScrollLock, getScrollLock} from '../../utils';


type CartItemProps = {
  shoppingPosition: CameraTypeInBasket;
}

export function CameraInBasket({shoppingPosition}: CartItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { camera} = shoppingPosition;
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [quantity, setQuantity] = useState<number | string>(shoppingPosition.count);

  const handleQuantityBlur = () => {
    const cameraInBasket = {...shoppingPosition};
    if(quantity === '') {
      dispatch(setCountCameraInBasket(cameraInBasket));
      setQuantity(1);
    }
  };

  const handleQuantityChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const cameraInBasket = {...shoppingPosition};

    if(Number(evt.currentTarget.value) < 1 || Number(evt.currentTarget.value) > 99) {
      dispatch(setCountCameraInBasket(cameraInBasket));
      return setQuantity('');

    }
    setQuantity(Number(evt.currentTarget.value));
    cameraInBasket.count = Number(evt.currentTarget.value);
    dispatch(setCountCameraInBasket(cameraInBasket));

  };
  const handleQuantityKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (/[+-]/.test(evt.key)) {
      evt.preventDefault();
    }
  };
  const handleDecreaseCountButtonClick = () => {
    if(quantity <= 1) {
      return;
    }
    setQuantity(Number(quantity) - 1);
    dispatch(decreaseProductCount(camera));
  };

  const handleIncreaseCountButtonClick = () => {
    if(quantity === 99) {
      return;
    }
    setQuantity(Number(quantity) + 1);

    dispatch(increaseProductCount(camera));

  };

  return (
    <>
      <ul className="basket__list">
        <li className="basket-item">
          <div className="basket-item__img">
            <picture>
              <source type="image/webp"
                srcSet={`../${camera.previewImgWebp2x}`}
              />
              <img src={`../${camera.previewImg}`}
                srcSet={`../${camera.previewImg2x}`} width="280" height="240"
                alt="Фотоаппарат «Орлёнок»"
              />
            </picture>
          </div>
          <div className="basket-item__description">
            <p className="basket-item__title">{camera.name}</p>
            <ul className="basket-item__list">
              <li className="basket-item__list-item">
                <span className="basket-item__article">Артикул:</span>
                <span className="basket-item__number">{camera.vendorCode}</span>
              </li>
              <li className="basket-item__list-item">{camera.type} {camera.category}</li>
              <li className="basket-item__list-item">{camera.level} уровень</li>
            </ul>
          </div>
          <p className="basket-item__price"><span className="visually-hidden">Цена:</span>{camera.price}
          </p>
          <div className="quantity">
            <button className="btn-icon btn-icon--prev" aria-label="уменьшить количество товара" onClick={handleDecreaseCountButtonClick} disabled={quantity <= 1}>
              <svg width="7" height="12" aria-hidden="true">
                <use xlinkHref="#icon-arrow"/>
              </svg>
            </button>
            <label className="visually-hidden" htmlFor="counter1"/>
            <input type="number"
              id={`counter${quantity}`}
              name={`${quantity}-count`}
              value={quantity}
              aria-label="количество товара"
              onChange={handleQuantityChange}
              onBlur={handleQuantityBlur}
              onKeyDown={handleQuantityKeyDown}
            />

            <button className="btn-icon btn-icon--next" aria-label="увеличить количество товара" onClick={handleIncreaseCountButtonClick} disabled={quantity >= 99}>
              <svg width="7" height="12" aria-hidden="true">
                <use xlinkHref="#icon-arrow"/>
              </svg>
            </button>
          </div>
          <div className="basket-item__total-price"><span className="visually-hidden">Общая цена:</span>{camera.price * Number(quantity)}
          </div>
          <button className="cross-btn" type="button" aria-label="Удалить товар" onClick={() => {
            getScrollLock();
            setOpenDeleteModal(true);
          }}
          >
            <svg width="10" height="10" aria-hidden="true">
              <use xlinkHref="#icon-close"/>
            </svg>
          </button>
        </li>
      </ul>
      <DeleteModal isOpenModal={openDeleteModal}
        currentCamera={camera}
        onClose={() => {
          deleteScrollLock();
          setOpenDeleteModal(false);
        }}
      />
    </>
  );
}

