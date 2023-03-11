import {ChangeEvent} from 'react';
import {useUpdateUrlWithParams} from '../../../../hooks/useUpdate';
import {LimitedFilter, QueryParamsList} from '../../../../const';

type CategoryFilterProps = {
  id: string;
}

export function CategoryCheckbox({id}: CategoryFilterProps): JSX.Element {
  const {queryParams, deleteUrlParam, addUrlWithParams} = useUpdateUrlWithParams();
  const currentParams = Array.from(queryParams.values());

  const handleCheckboxCategoryChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if(evt.target.checked) {
      addUrlWithParams(QueryParamsList.Category, id);
    } else {
      deleteUrlParam(QueryParamsList.Category, id);
    }
  };

  const isLimitedCategoryDisabled = (currentParams.includes(LimitedFilter.Type['Моментальная']) ||
    currentParams.includes(LimitedFilter.Type['Плёночная'])) && id === LimitedFilter.Category;

  return (
    <input type="checkbox"
      data-testid="category-checkbox"
      name={id}
      onChange={handleCheckboxCategoryChange}
      checked={queryParams.getAll(QueryParamsList.Category).includes(id)}
      disabled={isLimitedCategoryDisabled}
    />
  );
}
