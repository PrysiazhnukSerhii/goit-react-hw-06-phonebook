import { DeleteButton } from './listContacts.styled';

import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../../redux/pfoneBookSlice';

export function ListContacts() {
  const dispatch = useDispatch();

  let listContacts = useSelector(state => state.contacts.items);
  const filtrName = useSelector(state => state.contacts.filter);

  if (filtrName.length > 0) {
    listContacts = listContacts.filter(information =>
      information.name.toLowerCase().includes(filtrName.toLowerCase())
    );
  }

  return (
    <>
      <ul>
        {listContacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              {name}: {number};
              <DeleteButton
                onClick={() => {
                  dispatch(removeContact(id));
                }}
              >
                Delete
              </DeleteButton>
            </li>
          );
        })}
      </ul>
    </>
  );
}
