import {QueryParamsList} from '../../const';
import {useUpdateUrlWithParams} from '../../hooks/useUpdate';
import PriceFilter from './price-filter/price-filter';
import {CategoryFilter} from './category-filter/category-filter';
import {TypeFilter} from './type-filter/type-filter';
import {LevelFilter} from './level-filter/level-filter';

export function Filter(): JSX.Element {
  const {deleteAllUrlParams} = useUpdateUrlWithParams();

  const handleClearFilterButtonClick = () => {
    deleteAllUrlParams([QueryParamsList.Count, QueryParamsList.Type, QueryParamsList.Level, QueryParamsList.Category, QueryParamsList.PriceEnd, QueryParamsList.PriceStart]);
  };
  return (
    <form>
      <h2 className="visually-hidden">Фильтр</h2>
      <PriceFilter />
      <CategoryFilter />
      <TypeFilter />
      <LevelFilter />
      <button className="btn catalog-filter__reset-btn" type="reset" onClick={handleClearFilterButtonClick}>Сбросить фильтры
      </button>
    </form>

  );
}
