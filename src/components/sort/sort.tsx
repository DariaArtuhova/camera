import { changeTypeSorting} from '../../store/camera/camera-action';
import {useAppDispatch} from '../../store';
import {OrderTypes, QueryParamsList, SortTypes} from '../../const';
import {useUpdateUrlWithParams} from '../../hooks/useUpdate';

export function Sort(): JSX.Element {
  const dispatch = useAppDispatch();
  const {queryParams, updateUrlWithParams} = useUpdateUrlWithParams();

  const handlePriceSortClick = () => {
    if(queryParams.has(QueryParamsList.Sort)) {
      updateUrlWithParams(QueryParamsList.Sort, SortTypes.Price);
    } else {
      updateUrlWithParams(QueryParamsList.Sort, SortTypes.Price);
      updateUrlWithParams(QueryParamsList.Order, OrderTypes.Asc);
    }
  };

  const handleRatingSortClick = () => {
    if(queryParams.has(QueryParamsList.Order)) {
      updateUrlWithParams(QueryParamsList.Sort, SortTypes.Popular);
    } else {
      updateUrlWithParams(QueryParamsList.Sort, SortTypes.Popular);
      updateUrlWithParams(QueryParamsList.Order, OrderTypes.Asc);
    }
  };

  const handleAscOrderClick = () => {
    if(queryParams.has(QueryParamsList.Sort)) {
      updateUrlWithParams(QueryParamsList.Order, OrderTypes.Asc);
    } else {
      updateUrlWithParams(QueryParamsList.Sort, SortTypes.Price);
      updateUrlWithParams(QueryParamsList.Order, OrderTypes.Asc);
    }
  };

  const handleDescOrderClick = () => {
    if(queryParams.has(QueryParamsList.Sort)) {
      updateUrlWithParams(QueryParamsList.Order, OrderTypes.Desc);
    } else {
      updateUrlWithParams(QueryParamsList.Sort, SortTypes.Price);
      updateUrlWithParams(QueryParamsList.Order, OrderTypes.Desc);
    }
  };

  return (
    <div className="catalog-sort">
      <form action="#">
        <div className="catalog-sort__inner">
          <p className="title title--h5">Сортировать:</p>
          <div className="catalog-sort__type">
            <div className="catalog-sort__btn-text">
              <input type="radio" id="sortPrice" name="sort"
                onChange={()=>{
                  dispatch(changeTypeSorting);
                  handlePriceSortClick();
                }}
                checked={
                  queryParams.get(QueryParamsList.Sort) === SortTypes.Price ||
                queryParams.get(QueryParamsList.Sort) === OrderTypes.Asc
                }
              />
              <label htmlFor="sortPrice">по цене</label>
            </div>
            <div className="catalog-sort__btn-text">
              <input type="radio" id="sortPopular" name="sort"
                onChange={()=>{
                  dispatch(changeTypeSorting);
                  handleRatingSortClick();
                }}
                checked={
                  queryParams.get(QueryParamsList.Sort) === SortTypes.Popular &&
                       true
                }
              />
              <label htmlFor="sortPopular">по популярности</label>
            </div>
          </div>
          <div className="catalog-sort__order">
            <div className="catalog-sort__btn catalog-sort__btn--up">
              <input type="radio" id="up" name="sort-icon" aria-label="По возрастанию"
                onChange={()=>{
                  dispatch(changeTypeSorting);
                  handleAscOrderClick();
                }}
                checked={
                  queryParams.get(QueryParamsList.Order) === OrderTypes.Asc &&
                       true
                }
              />
              <label htmlFor="up">
                <svg width="16" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-sort"/>
                </svg>
              </label>
            </div>
            <div className="catalog-sort__btn catalog-sort__btn--down">
              <input type="radio" id="down" name="sort-icon" aria-label="По убыванию"
                onChange={()=>{
                  dispatch(changeTypeSorting);
                  handleDescOrderClick();
                }}
                checked={
                  queryParams.get(QueryParamsList.Order) === OrderTypes.Desc &&
                       true
                }
              />
              <label htmlFor="down">
                <svg width="16" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-sort"/>
                </svg>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>

  );
}
