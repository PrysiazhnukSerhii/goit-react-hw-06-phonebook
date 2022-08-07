import { PhoneBookForm } from './pfoneBook/pfoneBookForm';
import { ListContacts } from './listContacts/listContacts';
import { Filter } from './filter';

export function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <PhoneBookForm />

      <h2>Contacts</h2>
      <Filter />
      <ListContacts />
    </div>
  );
}
