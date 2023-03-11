import cn from 'classnames';
import { useLocation } from 'react-router-dom';
import {browserHistory} from '../../utils';
import {CameraType} from '../../types/camera-type';

type ProductTabsProps = {
  product: CameraType;
}

export function Tabs({product}: ProductTabsProps) {
  const {hash} = useLocation();
  const currentAnchor = hash ? hash : '#desc';

  const {
    vendorCode,
    category,
    type,
    level,
    description
  } = product;

  const FeatureTabCn = {
    Element: cn(
      'tabs__element',
      {
        'is-active': currentAnchor === '#charac'
      }
    ),
    Control: cn(
      'tabs__control',
      {
        'is-active': currentAnchor === '#charac'
      }
    ),
  } as const;

  const DescriptionTabCn = {
    Element: cn(
      'tabs__element',
      {
        'is-active': currentAnchor === '#desc'
      }
    ),
    Control: cn(
      'tabs__control',
      {
        'is-active': currentAnchor === '#desc'
      }
    ),
  } as const;

  return (
    <div className="tabs product__tabs" data-testid='tabs'>
      <div className="tabs__controls product__tabs-controls">
        <button
          type="button"
          onClick={() => browserHistory.replace({hash: '#charac'})}
          className={FeatureTabCn.Control}
          data-testid='feat'
        >
          Характеристики
        </button>
        <button
          type="button"
          onClick={() => browserHistory.replace({hash: '#desc'})}
          className={DescriptionTabCn.Control}
        >
          Описание
        </button>
      </div>
      <div className="tabs__content">
        <div className={FeatureTabCn.Element}>
          <ul className="product__tabs-list">
            <li className="item-list"><span className="item-list__title">Артикул:</span>
              <p className="item-list__text"> {vendorCode}</p>
            </li>
            <li className="item-list"><span className="item-list__title">Категория:</span>
              <p className="item-list__text">{category}</p>
            </li>
            <li className="item-list"><span className="item-list__title">Тип камеры:</span>
              <p className="item-list__text">{type}</p>
            </li>
            <li className="item-list"><span className="item-list__title">Уровень:</span>
              <p className="item-list__text">{level}</p>
            </li>
          </ul>
        </div>
        <div className={DescriptionTabCn.Element}>
          <div className="product__tabs-text">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

