import {CameraType} from '../../types/camera-type';
import {Link} from 'react-router-dom';
import {AppRoute, CameraDetailsTypes} from '../../const';
import {Rating} from '../rating/rating';
import {deleteScrollLock, getScrollLock} from '../../utils';
import {ModalBuyCamera} from '../modal-buy-camera/modal-buy-camera';
import {useState} from 'react';
import {useAppSelector} from '../../store';
import {getCamerasInBasket} from '../../store/basket/basket-selector';

type CardProps = {
  camera: CameraType;
}
export function Camera({camera}: CardProps): JSX.Element {
  const {id, name, previewImg, previewImg2x, price, previewImgWebp2x, reviewCount, rating} = camera;
  const [isModal, setModal] = useState(false);
  const camerasInBasket = useAppSelector(getCamerasInBasket);

  return (
    <>
      <div className="product-card is-active" key={id}>
        <div className="product-card__img">
          <picture>
            <source type="image/webp"
              srcSet={`../${previewImgWebp2x}`}
            />
            <img src={`../${previewImg}`}
              srcSet={`../${previewImg2x}`} width="280" height="240"
              alt={name}
            />
          </picture>
        </div>
        <div className="product-card__info" data-testid="product-card">
          <div className="rate product-card__rate">
            <Rating rating={rating} />
            <p className="visually-hidden">Рейтинг: {rating}</p>
            <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{reviewCount}</p>
          </div>
          <p className="product-card__title">{name}</p>
          <p className="product-card__price">{`${price} ₽`}
          </p>
        </div>
        <div className="product-card__buttons">
          {
            camerasInBasket[camera.id] ?
              <Link to={AppRoute.Basket} className="btn btn--purple-border product-card__btn product-card__btn--in-cart" >
                <svg width="16" height="16" aria-hidden="true">
                  <use xlinkHref="#icon-basket"/>
                </svg>
              В корзине
              </Link>
              :
              <button className="btn btn--purple product-card__btn" type="button" onClick={() => {
                getScrollLock();
                setModal(true);
              }}
              >Купить
              </button>
          }
          <Link to={{
            pathname: `${AppRoute.Card}/${id}`,
            search: `${CameraDetailsTypes.Feature}=${CameraDetailsTypes.Feature}`
          }}
          className="btn btn--transparent"
          >Подробнее
          </Link>
        </div>
      </div>
      <ModalBuyCamera openModal={isModal}
        currentCamera={camera}
        onClose={() => {
          deleteScrollLock();
          setModal(false);
        }}
      />
    </>
  );
}
