import {Camera} from '../camera/camera';
import usePagination from '../../hooks/usePagination';
import { useAppSelector} from '../../store';
import {getAllQuests} from '../../store/camera/camera-selector';
import {CONTENT_PER_PAGE, pages} from '../../const';
import {useMemo} from 'react';
import {CamerasType} from '../../types/camera-type';
import {useUpdateUrlWithParams} from '../../hooks/useUpdate';

type CamerasProps = {
  cameras: CamerasType;
}

export function CameraList({cameras}: CamerasProps) : JSX.Element {
  const camerasList = useAppSelector(getAllQuests);
  const {deleteUrlParam, addUrlWithParams} = useUpdateUrlWithParams();

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: CONTENT_PER_PAGE,
    count: camerasList.length,
  });

  return (
    <>
      <div className="cards catalog__cards">
        {useMemo(() => cameras.map((camera) => <Camera key={camera.id} camera={camera}/>), [cameras])}

        {camerasList
          .slice(firstContentIndex, lastContentIndex)
          .map((camera) => (
            <Camera camera={camera} key={camera.id}/>
          ))}
      </div>
      <div className="pagination">
        <ul className="pagination__list">
          <li className="pagination__item">
            <button className="pagination__link pagination__link--text"
              onClick={()=> {
                deleteUrlParam('page', String(page + 1));
                addUrlWithParams('page', String(page - 1));
                prevPage();
              }}
              style={page === 1 ? {display:'none'} : {}}
            >Назад
            </button>
          </li>
          {
            pages
              .slice(0, totalPages)
              .map((items)=> (
                <li className="pagination__item" key={items}>
                  <button className={`pagination__link pagination__link${
                    page === items ? '--active' : ''
                  }`}
                  onClick={() => {
                    setPage(items);
                    deleteUrlParam('page', String(page - 1));
                    deleteUrlParam('page', String(page + 1));
                    deleteUrlParam('page', items.toString());
                    addUrlWithParams('page', items.toString());
                  }}
                  >{items}
                  </button>
                </li>
              ))
          }

          <li className="pagination__item">
            <button className="pagination__link pagination__link--text"
              onClick={()=> {
                deleteUrlParam('page', String(page - 1));
                addUrlWithParams('page', String(page + 1));
                nextPage();
              }}
              style={page === totalPages ? {display:'none'} : {}}
            >Далее
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
