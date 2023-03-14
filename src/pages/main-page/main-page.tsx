import {CameraList} from '../../components/camera-list/camera-list';
import {Promo} from '../../components/promo/promo';
import {Header} from '../../components/header/header';
import {Footer} from '../../components/footer/footer';
import {Sort} from '../../components/sort/sort';
import {useAppDispatch, useAppSelector} from '../../store';
import {useEffect, useState} from 'react';
import {
  fetchCamerasWithParamsAction,
  fetchPromoAction
} from '../../services/api-actions';
import {getAllQuests, getCamerasDataLoadingStatus} from '../../store/camera/camera-selector';
import {Loading} from '../../components/loading/loading';
import {Filter} from '../../components/filter/filter';
import {QueryParamsList} from '../../const';
import {useUpdateUrlWithParams} from '../../hooks/useUpdate';
import {CamerasType, SortParams} from '../../types/camera-type';

export function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const camerasList = useAppSelector(getAllQuests);
  const isLoading = useAppSelector(getCamerasDataLoadingStatus);
  const [showerCameras, ] = useState<CamerasType>([]);

  useEffect(() => {
    dispatch(fetchPromoAction());
  }, [dispatch]);

  const {queryParams} = useUpdateUrlWithParams();
  useEffect(() => {
    const params: SortParams = {};

    const sort = queryParams.get(QueryParamsList.Sort);
    sort && (params[QueryParamsList.Sort] = sort);

    const order = queryParams.get(QueryParamsList.Order);
    order && (params[QueryParamsList.Order] = order);

    const minPrice = queryParams.get(QueryParamsList.PriceStart);
    minPrice && (params[QueryParamsList.PriceStart] = minPrice);

    const maxPrice = queryParams.get(QueryParamsList.PriceEnd);
    maxPrice && (params[QueryParamsList.PriceEnd] = maxPrice);

    const type = queryParams.getAll(QueryParamsList.Type);
    type && (params[QueryParamsList.Type] = type);

    const category = queryParams.getAll(QueryParamsList.Category);
    type && (params[QueryParamsList.Category] = category);

    const level = queryParams.getAll(QueryParamsList.Level);
    type && (params[QueryParamsList.Level] = level);

    const count = queryParams.getAll(QueryParamsList.Count);
    count && (params[QueryParamsList.Count] = count);

    dispatch(fetchCamerasWithParamsAction(params));
  }, [queryParams]);

  return (
    <div className="wrapper">
      <Header/>
      {
        !camerasList ?
          <h2>Извините, произошла ошибка, попробуйте перезагрузить страницу или зайти позже</h2> :
          <main>
            <Promo/>
            <div className="page-content">
              <div className="breadcrumbs">
                <div className="container">
                  <ul className="breadcrumbs__list">
                    <li className="breadcrumbs__item">
                      <a className="breadcrumbs__link" href="index.html">Главная
                        <svg width="5" height="8" aria-hidden="true">
                          <use xlinkHref="#icon-arrow-mini"/>
                        </svg>
                      </a>
                    </li>
                    <li className="breadcrumbs__item">
                      <span className="breadcrumbs__link breadcrumbs__link--active">Каталог</span>
                    </li>
                  </ul>
                </div>
              </div>
              <section className="catalog">
                <div className="container">
                  <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
                  <div className="page-content__columns">
                    <div className="catalog__aside">
                      <div className="catalog-filter">
                        <Filter />
                      </div>
                    </div>
                    <div className="catalog__content">
                      <Sort/>
                      <Loading isLoading={isLoading} />
                      {
                        showerCameras.length === 0 && camerasList.length === 0 ?
                          <h2>Ничего не найдено</h2> :
                          <CameraList cameras={showerCameras}/>
                      }
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </main>
      }
      <Footer/>
    </div>
  );
}

