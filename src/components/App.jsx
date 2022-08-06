import { useState, useEffect, useRef } from 'react';
import { PhoneBookForm } from './pfoneBook/pfoneBookForm';
import { ListContacts } from './listContacts/listContacts';
import { Filter } from './filter';

import { useSelector, useDispatch } from 'react-redux';

export function App() {
  const dispatch = useDispatch();
  const listContacts = useSelector(state => state.listContacts);

  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const isFirstRender = useRef(true);

  // const [name, setName] = useState('');

  // const filterContacts = () => {
  //   const result = contacts.filter(information =>
  //     information.name.toLowerCase().includes(name.toLowerCase())
  //   );
  //   return result;
  // };

  const deletePhoneItem = phoneId => {
    // setContacts(contacts.filter(contact => contact.id !== phoneId));
  };

  // useEffect(() => {
  //   let returnedContacnts = JSON.parse(localStorage.getItem('contacts'));

  //   if (!returnedContacnts) {
  //     return;
  //   }

  //   setContacts(returnedContacnts);
  // }, []);

  // useEffect(() => {
  //   if (isFirstRender.current) {
  //     isFirstRender.current = false;
  //     return;
  //   }

  //   let userContacts = JSON.stringify(contacts);

  //   localStorage.setItem('contacts', userContacts);
  // }, [contacts]);

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
