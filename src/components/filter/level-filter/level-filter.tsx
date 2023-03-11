import {FILTER_LEVEL_TYPES} from '../../../const';
import {LevelCheckbox} from './level-checkbox/level-checkbox';

export function LevelFilter(): JSX.Element {
  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Уровень</legend>
      {
        FILTER_LEVEL_TYPES
          .map((item) => (
            <div className="custom-checkbox catalog-filter__item" key={item.id}>
              <label>
                <LevelCheckbox id={item.id} key={item.id}/>
                <span className="custom-checkbox__icon"/>
                <span className="custom-checkbox__label">{item.name}</span>
              </label>
            </div>
          ))
      }
    </fieldset>

  );
}
