import {FILTER_CATEGORY_TYPES} from '../../../const';
import {CategoryCheckbox} from './category-checkbox/category-checkbox';

export function CategoryFilter(): JSX.Element{
  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Категория</legend>
      {
        FILTER_CATEGORY_TYPES
          .map((item) => (
            <div className="custom-checkbox catalog-filter__item" key={item.id}>
              <label>
                <CategoryCheckbox id={item.id} key={item.id}/>
                <span className="custom-checkbox__icon"/>
                <span className="custom-checkbox__label">{item.name}</span>
              </label>
            </div>
          ))
      }
    </fieldset>

  );
}
