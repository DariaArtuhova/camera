import {useEffect} from "react";
import {deleteScrollLock} from "../../utils";


type newCommentProps = {
  isVisible: boolean;
  onClose: () => void;
}

export function NewReviewSuccess({isVisible, onClose}:newCommentProps) : JSX.Element {
  const onKeydown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case 'Escape':
        onClose()
        deleteScrollLock()
        break
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', onKeydown)
    return () => document.removeEventListener('keydown', onKeydown)
  })
  return (
    <div className={`modal ${
      isVisible ? 'is-active' : ''
    } modal--narrow`}
    >
      <div className="modal__wrapper">
        <div className="modal__overlay" onClick={onClose}></div>
        <div className="modal__content">
          <p className="title title--h4">Спасибо за отзыв</p>
          <svg className="modal__icon" width="80" height="78" aria-hidden="true">
            <use xlinkHref="#icon-review-success"/>
          </svg>
          <div className="modal__buttons">
            <a className="btn btn--purple modal__btn modal__btn--fit-width" onClick={onClose}>Вернуться к покупкам
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
