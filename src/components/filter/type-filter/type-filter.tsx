import {FILTER_CAMERA_TYPES} from '../../../const';
import {TypeCheckbox} from './type-checkbox/type-checkbox';

export function TypeFilter(): JSX.Element {
  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Тип камеры</legend>
      {
        FILTER_CAMERA_TYPES
          .map((item) => (
            <div className="custom-checkbox catalog-filter__item" key={item.id}>
              <label>
                <TypeCheckbox id={item.id} key={item.id}/>
                <span className="custom-checkbox__icon"/>
                <span className="custom-checkbox__label">{item.name}</span>
              </label>
            </div>
          ))
      }
    </fieldset>

  );
}
