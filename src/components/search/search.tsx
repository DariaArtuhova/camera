import { useAppSelector} from '../../store';
import {getAllQuests} from '../../store/camera/camera-selector';
import {ChangeEvent, useState} from 'react';
import { useNavigate} from 'react-router-dom';
import {AppRoute} from '../../const';
import { KeyboardEvent } from 'react';

export function Search() :JSX.Element {
  const camerasList = useAppSelector(getAllQuests);
  const [searchInput, setSearchInput] = useState('');
  const filterList = camerasList.filter((camera) => camera.name.match(new RegExp(searchInput, 'i')));
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const redirectToCameraPage = (evt: KeyboardEvent<HTMLLIElement>, id: number) => {
    if (evt.key === 'Enter' || evt.key === ' ') {
      evt.preventDefault();

      navigate({
        pathname: `${AppRoute.Card}/${id}`
      });
    }
  };

  return (
    <div className={searchInput && filterList.length ? 'form-search list-opened' : 'form-search'}>
      <form>
        <label>
          <svg className="form-search__icon" width="16" height="16" aria-hidden="true">
            <use xlinkHref="#icon-lens"/>
          </svg>
          <input className="form-search__input" type="text" autoComplete="off" placeholder="Поиск по сайту"
            data-testid="form-search__input"
            onChange={handleChange}
            value={searchInput}
          />
        </label>
        <ul className="form-search__select-list">
          {filterList
            .map((camera) => (
              <li className="form-search__select-item"
                tabIndex={0}
                key={camera.id}
                onClick={() => navigate({
                  pathname: `${AppRoute.Card}/${camera.id}`
                })}
                onKeyDown={(evt) => redirectToCameraPage(evt, camera.id)}
              >{camera.name}
              </li>
            ))}
        </ul>
      </form>
      <button className="form-search__reset" type="reset" onClick={() => setSearchInput('')}>
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"/>
        </svg>
        <span className="visually-hidden">Сбросить поиск</span>
      </button>
    </div>

  );
}
