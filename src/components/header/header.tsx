import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {memo, useEffect, useState} from 'react';
import {Search} from '../search/search';
import {useAppSelector} from '../../store';
import {getCamerasInBasket} from '../../store/basket/basket-selector';

export function Header(): JSX.Element {
  const camerasInBasket = useAppSelector(getCamerasInBasket);
  const [countGuitarsInCart, setCountGuitarsInCart] = useState(0);

  useEffect(() => {
    let count = 0;
    Object.values(camerasInBasket).forEach((cameraInBasket) => {
      count += cameraInBasket.count;
    });

    setCountGuitarsInCart(count);
  }, [camerasInBasket]);
  return (
    <header className="header" id="header">
      <div className="container">
        <Link to={AppRoute.Root} className="header__logo" aria-label="Переход на главную">
          <svg width="100" height="36" aria-hidden="true">
            <use xlinkHref="#icon-logo"/>
          </svg>
        </Link>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item"><Link to={AppRoute.Root} className="main-nav__link">Каталог</Link>
            </li>
            <li className="main-nav__item"><a className="main-nav__link" href="#/" onClick={(e) => e.preventDefault()}>Гарантии</a>
            </li>
            <li className="main-nav__item"><a className="main-nav__link" href="#/" onClick={(e) => e.preventDefault()}>Доставка</a>
            </li>
            <li className="main-nav__item"><a className="main-nav__link" href="#/" onClick={(e) => e.preventDefault()}>О компании</a>
            </li>
          </ul>
        </nav>
        <Search />
        <Link to={AppRoute.Basket} className="header__basket-link">
          <svg width="16" height="16" aria-hidden="true">
            <use xlinkHref="#icon-basket"/>
          </svg>
          {countGuitarsInCart > 0 && <span className="header__basket-count">{countGuitarsInCart}</span>}

        </Link>
      </div>
    </header>

  );
}
export default memo(Header);
