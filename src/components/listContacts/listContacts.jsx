import { DeleteButton } from './listContacts.styled';

export function ListContacts({ filteredContacts, deletePhoneItem }) {
  return (
    <>
      <ul>
        {filteredContacts().map(friend => {
          return (
            <li key={friend.id}>
              {friend.name}: {friend.number};
              <DeleteButton
                onClick={() => {
                  deletePhoneItem(friend.id);
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
