import {ReviewList} from '../../components/review-list/review-list';
import {Link, useParams} from 'react-router-dom';
import {AppRoute, CameraDetailsTypes, QueryParamsList} from '../../const';
import {useEffect} from 'react';
import {Helmet} from 'react-helmet';
import {Header} from '../../components/header/header';
import {Footer} from '../../components/footer/footer';
import {useAppDispatch, useAppSelector} from '../../store';
import {getCamerasDataLoadingStatus, getCurrentCameras} from '../../store/camera/camera-selector';
import {fetchCurrentCameraAction, fetchReviewsAction, fetchSimilarCameras} from '../../services/api-actions';
import {Loading} from '../../components/loading/loading';
import {SimilarList} from '../../components/similar-list/similar-list';
import {getAllReviews} from '../../store/review/review-selector';
import {ShowMoreButton} from '../../components/show-more-button/show-more-button';
import {Rating} from '../../components/rating/rating';
import {Error} from '../error/error';
import {useUpdateUrlWithParams} from '../../hooks/useUpdate';


export function CameraPage() : JSX.Element {
  const {id} = useParams();
  const param = Number(id);
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getCamerasDataLoadingStatus);
  const currentCamera = useAppSelector(getCurrentCameras);
  const {queryParams, updateUrlWithParams} = useUpdateUrlWithParams();
  const allReview = useAppSelector(getAllReviews);
  const reviewCounter = useAppSelector((state) => state.review.reviewCounter);
  const isButtonActive = allReview.length > reviewCounter;

  useEffect(() => {
    dispatch(fetchCurrentCameraAction(param));
    dispatch(fetchReviewsAction(param.toString()));
    dispatch(fetchSimilarCameras(param));
  }, [dispatch, param]);


  const handleCharacteristicClick = () => {
    if(queryParams.has(QueryParamsList.Feature)) {
      updateUrlWithParams(QueryParamsList.Feature, CameraDetailsTypes.Feature);
    } else {
      updateUrlWithParams(QueryParamsList.Feature, CameraDetailsTypes.Feature);
      updateUrlWithParams(QueryParamsList.Feature, CameraDetailsTypes.Description);
    }
  };

  const handleDescriptionClick = () => {
    if(queryParams.has(QueryParamsList.Feature)) {
      updateUrlWithParams(QueryParamsList.Feature, CameraDetailsTypes.Description);
    } else {
      updateUrlWithParams(QueryParamsList.Feature, CameraDetailsTypes.Description);
      updateUrlWithParams(QueryParamsList.Feature, CameraDetailsTypes.Feature);
    }
  };

  if (isLoading) {
    return (
      <Loading isLoading={isLoading}/>
    );
  } else if (!currentCamera) {
    return (
      <Error />
    );
  } else
  {
    return (
      <>
        <Helmet>
          <title>{currentCamera.name}</title>
        </Helmet>
        <Header/>
        <div className="page-content">
          <div className="breadcrumbs">
            <div className="container">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={AppRoute.Root} className="breadcrumbs__link">Главная
                    <svg width="5" height="8" aria-hidden="true">
                      <use xlinkHref="#icon-arrow-mini"/>
                    </svg>
                  </Link>
                </li>
                <li className="breadcrumbs__item">
                  <Link to={AppRoute.Root} className="breadcrumbs__link">Каталог
                    <svg width="5" height="8" aria-hidden="true">
                      <use xlinkHref="#icon-arrow-mini"/>
                    </svg>
                  </Link>
                </li>
                <li className="breadcrumbs__item">
                  <span className="breadcrumbs__link breadcrumbs__link--active">{currentCamera.name}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="page-content__section">
            <section className="product">
              <div className="container">
                <div className="product__img">
                  <picture>
                    <source type="image/webp"
                      srcSet={`../${currentCamera.previewImgWebp2x}`}
                    />
                    <img src={`../${currentCamera.previewImg}`}
                      srcSet={`../${currentCamera.previewImg2x}`} width="560" height="480"
                      alt="Ретрокамера Das Auge IV"
                    />
                  </picture>
                </div>
                <div className="product__content">
                  <h1 className="title title--h3">{currentCamera.name}</h1>
                  <div className="rate product__rate">
                    <Rating rating={currentCamera.rating}/>
                    <p className="visually-hidden">Рейтинг: {currentCamera.rating}</p>
                    <p className="rate__count">
                      <span className="visually-hidden">Всего оценок:</span>{currentCamera.reviewCount}
                    </p>
                  </div>
                  <p className="product__price"><span className="visually-hidden">Цена:</span>{currentCamera.price} ₽
                  </p>
                  <button className="btn btn--purple" type="button">
                    <svg width="24" height="16" aria-hidden="true">
                      <use xlinkHref="#icon-add-basket"/>
                    </svg>
                    Добавить в корзину
                  </button>
                  <div className="tabs product__tabs">
                    <div className="tabs__controls product__tabs-controls">

                      <a
                        className={`tabs__control ${queryParams.get(QueryParamsList.Feature) === CameraDetailsTypes.Feature ? 'is-active' : ''}`}
                        href=''
                        onClick={(evt) => {
                          evt.preventDefault();
                          handleCharacteristicClick();
                        }}

                        tabIndex={0}
                      >Характеристики
                      </a>
                      <a
                        className={`tabs__control ${queryParams.get(QueryParamsList.Feature) === CameraDetailsTypes.Description ? 'is-active' : ''}`}
                        type="button"
                        href=''
                        onClick={(evt) => {
                          evt.preventDefault();
                          handleDescriptionClick();
                        }}
                        tabIndex={1}
                      >Описание
                      </a>
                    </div>
                    <div className="tabs__content">
                      <div
                        className={`tabs__element ${queryParams.get(QueryParamsList.Feature) === CameraDetailsTypes.Feature ? 'is-active' : ''}`}
                      >
                        <ul className="product__tabs-list">
                          <li className="item-list"><span className="item-list__title">Артикул:</span>
                            <p className="item-list__text"> {currentCamera.vendorCode}</p>
                          </li>
                          <li className="item-list"><span className="item-list__title">Категория:</span>
                            <p className="item-list__text">{currentCamera.category}</p>
                          </li>
                          <li className="item-list"><span className="item-list__title">Тип камеры:</span>
                            <p className="item-list__text">{currentCamera.type}</p>
                          </li>
                          <li className="item-list"><span className="item-list__title">Уровень:</span>
                            <p className="item-list__text">{currentCamera.level}</p>
                          </li>
                        </ul>
                      </div>
                      <div
                        className={`tabs__element ${queryParams.get(QueryParamsList.Feature) === CameraDetailsTypes.Description ? 'is-active' : ''}`}
                      >
                        <div className="product__tabs-text">
                          <p>{currentCamera.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="page-content__section">
            <SimilarList />
          </div>
          <div className="page-content__section">
            <ReviewList/>
            {isButtonActive && <ShowMoreButton />}
          </div>
        </div>
        <Footer/>
      </>
    );
  }
}
