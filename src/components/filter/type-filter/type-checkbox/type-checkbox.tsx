import {ChangeEvent} from 'react';
import {useUpdateUrlWithParams} from '../../../../hooks/useUpdate';
import {LimitedFilter, QueryParamsList} from '../../../../const';

type TypeCheckboxProps = {
  id: string;
}

export function TypeCheckbox({id}: TypeCheckboxProps): JSX.Element {
  const {queryParams, deleteUrlParam, addUrlWithParams} = useUpdateUrlWithParams();
  const currentParams = Array.from(queryParams.values());

  const handleCheckboxTypeChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if(evt.target.checked) {
      addUrlWithParams(QueryParamsList.Type, id);
    } else {
      deleteUrlParam(QueryParamsList.Type, id);
    }
  };

  const isTypeDisabled = currentParams.includes('Видеокамера') && !currentParams.includes('Фотоаппарат') &&
    (id === LimitedFilter.Type['Моментальная'] || id === LimitedFilter.Type['Плёночная']);


  return (
    <input type="checkbox"
      data-testid="type-checkbox"
      name={id}
      onChange={handleCheckboxTypeChange}
      checked={queryParams.getAll(QueryParamsList.Type).includes(id)}
      disabled={isTypeDisabled}
    />
  );
}
