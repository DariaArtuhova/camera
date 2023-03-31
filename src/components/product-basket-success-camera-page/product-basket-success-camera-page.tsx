import {deleteScrollLock} from '../../utils';
import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

type ModalCameraSuccessProps = {
  openModal: boolean;
  onClose: () => void;
}

export function ProductBasketSuccessCameraPage({openModal, onClose}:ModalCameraSuccessProps): JSX.Element {
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

  return (
    <div className={`modal ${openModal ? 'is-active' : ''} modal--narrow`}>
      <div className="modal__wrapper">
        <div className="modal__overlay" onClick={onClose}/>
        <div className="modal__content">
          <p className="title title--h4">Товар успешно добавлен в корзину</p>
          <svg className="modal__icon" width="86" height="80" aria-hidden="true">
            <use xlinkHref="#icon-success"/>
          </svg>
          <div className="modal__buttons"><Link to={AppRoute.Root} className="btn btn--transparent modal__btn" onClick={onClose}>Продолжить покупки</Link>
            <Link to={AppRoute.Basket} className="btn btn--purple modal__btn modal__btn--fit-width" onClick={deleteScrollLock}>Перейти в корзину</Link>
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
