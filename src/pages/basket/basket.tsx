import {Footer} from '../../components/footer/footer';
import {Helmet} from 'react-helmet';
import {Header} from '../../components/header/header';
import {useAppSelector} from '../../store';
import {CameraBasket} from '../../components/camera-basket/camera-basket';
import {BasketFooter} from '../../components/basket-footer/basket-footer';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {getCamerasInBasket} from '../../store/basket/basket-selector';


export function Basket():JSX.Element {
  const camerasInBasket = useAppSelector(getCamerasInBasket);

  return (
    <>
      <Helmet>
        <title>Корзина</title>
      </Helmet>
      <Header />
      <div className="page-content">
        <div className="breadcrumbs">
          <div className="container">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={AppRoute.Root} className="breadcrumbs__link" >Главная
                  <svg width="5" height="8" aria-hidden="true">
                    <use xlinkHref="#icon-arrow-mini"/>
                  </svg>
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={AppRoute.Catalog} className="breadcrumbs__link">Каталог
                  <svg width="5" height="8" aria-hidden="true">
                    <use xlinkHref="#icon-arrow-mini"/>
                  </svg>
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <span className="breadcrumbs__link breadcrumbs__link--active">Корзина</span>
              </li>
            </ul>
          </div>
        </div>
        <section className="basket">
          <div className="container">
            <h1 className="title title--h2">Корзина</h1>
            {
              Object.values(camerasInBasket).length <= 0 ?
                <h2>В корзине нет товаров</h2>
                :
                <CameraBasket camerasInBasket={camerasInBasket}/>
            }
            <BasketFooter/>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
