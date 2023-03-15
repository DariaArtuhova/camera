import { ChangeEvent, useEffect, useState } from 'react';
import {useAppSelector} from '../../../store';
import {useUpdateUrlWithParams} from '../../../hooks/useUpdate';
import {QueryParamsList} from '../../../const';
import {getAllQuests} from '../../../store/camera/camera-selector';
import {calcMaxCamerasPrice, calcMinCamerasPrice} from '../../../utils';

function PriceFilter(): JSX.Element {
  const cameras = useAppSelector(getAllQuests);
  const originalCameras = useAppSelector(getAllQuests);

  const minPriceInCameras = calcMinCamerasPrice(cameras);
  const maxPriceInCameras = calcMaxCamerasPrice(cameras);
  const { queryParams, updateUrlWithParams } = useUpdateUrlWithParams();

  const initialMinPrice =
    Number(queryParams.get(QueryParamsList.PriceStart)) || '';
  const initialMaxPrice =
    Number(queryParams.get(QueryParamsList.PriceEnd)) || '';

  const [minPrice, setMinPrice] = useState<number | ''>(initialMinPrice);
  const [maxPrice, setMaxPrice] = useState<number | ''>(initialMaxPrice);

  useEffect(() => {
    setMinPrice(initialMinPrice);
    setMaxPrice(initialMaxPrice);
  }, [cameras]);

  const handleMinPriceFilterChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const minPriceValue = Number(evt.target.value);

    if (minPriceValue > 0) {
      setMinPrice(minPriceValue);
    }
  };

  const handleMinPriceFilterBlur = () => {
    if (cameras.length <= 0) {
      const originalMinPrice = calcMinCamerasPrice(originalCameras);
      setMinPrice(originalMinPrice);
      updateUrlWithParams(QueryParamsList.PriceStart, String(originalMinPrice));
    } else if (minPrice) {
      const currentMaxPrice = maxPrice || maxPriceInCameras;

      if (minPrice < minPriceInCameras || minPrice >= currentMaxPrice) {
        setMinPrice(minPriceInCameras);
        updateUrlWithParams(
          QueryParamsList.PriceStart,
          String(minPriceInCameras),
        );
      } else {
        updateUrlWithParams(QueryParamsList.PriceStart, String(minPrice));
      }

      if (!maxPrice) {
        updateUrlWithParams(
          QueryParamsList.PriceEnd,
          String(maxPriceInCameras),
        );
      }
    }
  };

  const handleMaxPriceFilterChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const maxPriceValue = Number(evt.target.value);

    if (maxPriceValue > 0) {
      setMaxPrice(maxPriceValue);
    }
  };

  const handleMaxPriceFilterBlur = () => {
    if (cameras.length <= 0) {
      const originalMaxPrice = calcMaxCamerasPrice(originalCameras);
      setMaxPrice(originalMaxPrice);
      updateUrlWithParams(QueryParamsList.PriceEnd, String(originalMaxPrice));
    } else if (maxPrice) {
      if (maxPrice < minPrice || maxPrice >= maxPriceInCameras) {
        setMaxPrice(maxPriceInCameras);
        updateUrlWithParams(
          QueryParamsList.PriceEnd,
          String(maxPriceInCameras),
        );
      } else {
        updateUrlWithParams(QueryParamsList.PriceEnd, String(maxPrice));
      }

      if (!minPrice) {
        updateUrlWithParams(
          QueryParamsList.PriceStart,
          String(minPriceInCameras),
        );
      }
    }
  };

  return (
    <fieldset className="catalog-filter__block" data-testid="price-filter">
      <legend className="catalog-filter__block-title">Цена, ₽</legend>
      <div className="catalog-filter__price-range">
        <div className="form-input">
          <label className="visually-hidden">Минимальная цена</label>
          <input
            id="priceMin"
            name="от"
            placeholder={String(minPriceInCameras)}
            value={minPrice}
            onChange={handleMinPriceFilterChange}
            onBlur={handleMinPriceFilterBlur}
          />
        </div>
        <div className="form-input">
          <label className="visually-hidden">Максимальная цена</label>
          <input
            id="priceMax"
            name="до"
            placeholder={String(maxPriceInCameras)}
            value={maxPrice}
            onChange={handleMaxPriceFilterChange}
            onBlur={handleMaxPriceFilterBlur}
          />
        </div>
      </div>
    </fieldset>
  );
}

export default PriceFilter;
