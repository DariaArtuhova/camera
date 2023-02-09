import {Camera} from '../camera/camera';
import usePagination from '../../hooks/usePagination';
import {useAppSelector} from '../../store';
import {getAllQuests} from '../../store/camera/camera-selector';
import {pages} from '../../const';


export function CameraList() : JSX.Element {
  const camerasList = useAppSelector(getAllQuests);

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 9,
    count: camerasList.length,
  });

  return (
    <>
      <div className="cards catalog__cards">
        {camerasList
          .slice(firstContentIndex, lastContentIndex)
          .map((camera) => (
            <Camera camera={camera} key={camera.id}/>
          ))}
      </div>
      <div className="pagination">
        <ul className="pagination__list">
          <li className="pagination__item">
            <a className="pagination__link pagination__link--text"
              onClick={prevPage}
              style={page === 1 ? {display:'none'} : {}}
            >Назад
            </a>
          </li>
          {
            pages
              .slice(0, totalPages)
              .map((items)=> (
                <li className="pagination__item" key={items}>
                  <a className={`pagination__link pagination__link${
                    page === items ? '--active' : ''
                  }`}
                  onClick={() => setPage(items)}
                  >{items}
                  </a>
                </li>
              ))
          }

          <li className="pagination__item">
            <a className="pagination__link pagination__link--text"
              onClick={nextPage}
              style={page === totalPages ? {display:'none'} : {}}
            >Далее
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
