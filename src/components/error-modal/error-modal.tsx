import {deleteScrollLock} from '../../utils';
import {useEffect} from 'react';


type ModalCameraProps = {
  openModal: boolean;
  onClose: () => void;
}

export function ErrorModal({openModal, onClose}: ModalCameraProps): JSX.Element {

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
    <div className={`modal ${openModal ? 'is-active' : ''}`}>
      <div className="modal__wrapper">
        <div className="modal__overlay" onClick={onClose}/>
        <div className="modal__content">
          <h1>Произошла ошибка,<br/> <br/> попробуйте снова</h1>
          <div className="modal__buttons">
            <button className="btn btn--purple modal__btn modal__btn--fit-width" type="button" onClick={onClose}>
                Закрыть
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

  );
}
