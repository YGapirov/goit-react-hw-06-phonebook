import { Label, Input } from './Filter.styled';

export const Filter = ({ filter, onFilter }) => {
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        placeholder="Search"
        value={filter.value}
        onChange={e => onFilter(e.target.value)}
      />
    </Label>
  );
};
