import {CameraType} from '../../types/camera-type';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {Rating} from '../rating/rating';

type CardProps = {
  camera: CameraType;
}
export function Camera({camera}: CardProps): JSX.Element {
  const {id, name, previewImg, previewImg2x, price, previewImgWebp2x, reviewCount, rating} = camera;
  return (
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
      <div className="product-card__info">
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
        <button className="btn btn--purple product-card__btn" type="button">Купить
        </button>
        <Link to={`${AppRoute.Card}/${id}`} className="btn btn--transparent">Подробнее
        </Link>
      </div>
    </div>

  );
}
