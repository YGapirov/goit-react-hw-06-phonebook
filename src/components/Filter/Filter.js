import { Label, Input } from './Filter.styled';

import { useDispatch, useSelector } from 'react-redux';
import { filterPhone } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter); // Отримання значення filter зі стану Redux

  const updateFilter = value => {
    dispatch(filterPhone(value));
  };

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        placeholder="Search"
        value={filter}
        onChange={e => updateFilter(e.target.value)}
      />
    </Label>
  );
};
