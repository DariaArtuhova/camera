import {useAppSelector} from '../../store';
import {getSimilarCameras} from '../../store/camera/camera-selector';
import {Camera} from '../camera/camera';
import usePagination from '../../hooks/usePagination';

export function SimilarList() : JSX.Element {
  const similarCameras = useAppSelector(getSimilarCameras);

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    totalPages,
  } = usePagination({
    contentPerPage: 3,
    count: similarCameras.length,
  });
  if (similarCameras.length !== 0) {
    return (
      <section className="product-similar">
        <div className="container">
          <h2 className="title title--h3">Похожие товары</h2>
          <div className="product-similar__slider">
            <div className="product-similar__slider-list">
              {similarCameras
                .slice(firstContentIndex, lastContentIndex)
                .map((camera) => (
                  <Camera camera={camera} key={camera.id}/>
                ))}
            </div>
            <button className="slider-controls slider-controls--prev" type="button" aria-label="Предыдущий слайд"
              disabled={page === 1} onClick={prevPage}
            >
              <svg width="7" height="12" aria-hidden="true">
                <use xlinkHref="#icon-arrow"/>
              </svg>
            </button>
            <button className="slider-controls slider-controls--next" type="button" aria-label="Следующий слайд"
              onClick={nextPage} disabled={page === totalPages}
            >
              <svg width="7" height="12" aria-hidden="true">
                <use xlinkHref="#icon-arrow"/>
              </svg>
            </button>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <p></p>
    );
  }
}
