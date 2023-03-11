import {ChangeEvent} from 'react';
import {useUpdateUrlWithParams} from '../../../../hooks/useUpdate';
import {QueryParamsList} from '../../../../const';

type LevelCheckboxProps = {
  id: string;
}

export function LevelCheckbox({id}: LevelCheckboxProps): JSX.Element {
  const {queryParams, deleteUrlParam, addUrlWithParams} = useUpdateUrlWithParams();

  const handleCheckboxLevelChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if(evt.target.checked) {
      addUrlWithParams(QueryParamsList.Level, id);
    } else {
      deleteUrlParam(QueryParamsList.Level, id);
    }
  };
  return (
    <input type="checkbox"
      data-testid="level-checkbox"
      name={id}
      onChange={handleCheckboxLevelChange}
      checked={queryParams.getAll(QueryParamsList.Level).includes(id)}
    />
  );
}
