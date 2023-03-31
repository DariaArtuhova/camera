import { CameraType} from '../../types/camera-type';
import {deleteScrollLock, getScrollLock} from '../../utils';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {setCameraInBasket} from '../../store/basket/basket-reduser';
import {ProductBasketSuccessCameraPage} from '../product-basket-success-camera-page/product-basket-success-camera-page';


type ModalCameraProps = {
  openModal: boolean;
  currentCamera: CameraType;
  onClose: () => void;

}

export function ModalBuyCamera({openModal, currentCamera, onClose}: ModalCameraProps): JSX.Element {
  const [isModal, setModal] = useState(false);

  const onKeydown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case 'Escape':
        deleteScrollLock();
        onClose();
        break;
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  }, []);

  const dispatch = useDispatch();
  const handleAddObject = () => {
    dispatch(setCameraInBasket(currentCamera));
  };

  return (
    <>
      <div className={`modal ${openModal ? 'is-active' : ''}`}>
        <div className="modal__wrapper">
          <div className="modal__overlay" onClick={onClose}/>
          <div className="modal__content">
            <p className="title title--h4">Добавить товар в корзину</p>
            <div className="basket-item basket-item--short">
              <div className="basket-item__img">
                <picture>
                  <source type="image/webp"
                    srcSet={`../${currentCamera?.previewImgWebp2x}`}
                  />
                  <img src={`../${currentCamera?.previewImg}`}
                    srcSet={`../${currentCamera?.previewImg2x}`} width="140" height="120"
                    alt="Фотоаппарат «Орлёнок»"
                  />
                </picture>
              </div>
              <div className="basket-item__description">
                <p className="basket-item__title">{currentCamera?.name}</p>
                <ul className="basket-item__list">
                  <li className="basket-item__list-item"><span className="basket-item__article">Артикул:</span>
                    <span className="basket-item__number">{currentCamera?.vendorCode}</span>
                  </li>
                  <li className="basket-item__list-item">{currentCamera?.type} {currentCamera?.category}</li>
                  <li className="basket-item__list-item">{currentCamera?.level} уровень</li>
                </ul>
                <p className="basket-item__price"><span className="visually-hidden">Цена:</span>{currentCamera?.price} ₽</p>
              </div>
            </div>
            <div className="modal__buttons">
              <button className="btn btn--purple modal__btn modal__btn--fit-width" type="button" onClick={() => {
                handleAddObject();
                onClose();
                getScrollLock();
                setModal(true);
              }}
              >
                <svg width="24" height="16" aria-hidden="true">
                  <use xlinkHref="#icon-add-basket"/>
                </svg>
              Добавить в корзину
              </button>
            </div>
            <button className="cross-btn" type="button" aria-label="Закрыть попап" onClick={onClose}>
              <svg width="10" height="10" aria-hidden="true">
                <use xlinkHref="#icon-close"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <ProductBasketSuccessCameraPage
        openModal={isModal}
        onClose={() => {
          deleteScrollLock();
          setModal(false);
        }}
      />
    </>
  );
}
