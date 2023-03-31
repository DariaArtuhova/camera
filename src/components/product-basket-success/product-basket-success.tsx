import {deleteScrollLock} from '../../utils';
import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

type ModalCameraSuccessProps = {
  openModal: boolean;
  onClose: () => void;
}

export function ProductBasketSuccess({openModal, onClose}:ModalCameraSuccessProps): JSX.Element {
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
          <p className="title title--h4">Спасибо за покупку</p>
          <svg className="modal__icon" width="80" height="78" aria-hidden="true">
            <use xlinkHref="#icon-review-success"/>
          </svg>
          <div className="modal__buttons">
            <Link to={AppRoute.Root} className="btn btn--purple modal__btn modal__btn--fit-width" type="button" >Вернуться к покупкам
            </Link>
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
