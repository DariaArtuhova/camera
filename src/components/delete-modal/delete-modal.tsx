import { deleteCameraInBasket} from '../../store/basket/basket-reduser';
import {CameraType} from '../../types/camera-type';
import {deleteScrollLock} from '../../utils';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

type DeleteModalProps = {
  isOpenModal: boolean;
  currentCamera: CameraType;
  onClose: () => void;
}
export function DeleteModal({isOpenModal, currentCamera, onClose}:DeleteModalProps):JSX.Element {
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

  const handleDeleteObject = () => {
    dispatch(deleteCameraInBasket(currentCamera));
    onClose();
  };

  return (
    <div className={`modal ${isOpenModal ? 'is-active' : ''}`}>
      <div className="modal__wrapper">
        <div className="modal__overlay" onClick={onClose}/>
        <div className="modal__content">
          <p className="title title--h4">Удалить этот товар?</p>
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
            </div>
          </div>
          <div className="modal__buttons">
            <button className="btn btn--purple modal__btn modal__btn--half-width" type="button" onClick={handleDeleteObject}>Удалить
            </button>
            <a className="btn btn--transparent modal__btn modal__btn--half-width" href="/#" onClick={onClose}>Продолжить покупки
            </a>
          </div>
          <button className="cross-btn" type="button" aria-label="Закрыть попап" onClick={onClose}>
            <svg width="10" height="10" aria-hidden="true">
              <use xlinkHref="#icon-close"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

  );
}
