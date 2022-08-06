import { useDispatch } from 'react-redux';
import { filterName } from '../redux/pfoneBookSlice';

export function Filter() {
  const dispatch = useDispatch();
  return (
    <form>
      <label>
        Find contacts by name
        <input
          type="text"
          onChange={e => {
            dispatch(filterName(e.target.value));
          }}
        />
      </label>
    </form>
  );
}
