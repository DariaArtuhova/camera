import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {useAppSelector} from '../../store';
import {getPromo} from '../../store/camera/camera-selector';

export function Promo() : JSX.Element {
  const promo = useAppSelector(getPromo);

  if (promo) {
    return (
      <div className="banner">
        <picture>
          <source type="image/webp"
            srcSet={promo?.previewImgWebp2x}
          />
          <img src={promo?.previewImg}
            srcSet={promo?.previewImg2x} width="1280" height="280" alt="баннер"
          />
        </picture>
        <p className="banner__info"><span className="banner__message">Новинка!</span>
          <span className="title title--h1">{promo?.name}</span>
          <span className="banner__text">Профессиональная камера от&nbsp;известного производителя</span>
          <Link to={`${AppRoute.Card}/${promo?.id}`} className="btn">Подробнее</Link>
        </p>
      </div>

    );
  } else {
    return (
      <h2>Нет акций</h2>
    );
  }
}
