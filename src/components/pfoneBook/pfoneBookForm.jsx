import { useState } from 'react';
import { nanoid } from 'nanoid';
import { BookForm, BookItem, BookButton } from './pfoneBook.styled';

export function PhoneBookForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const reset = () => {
    setName('');
    setNumber('');
  };

  const onSubmitForm = e => {
    e.preventDefault();

    let contactInformation = {
      name,
      id: nanoid(),
      number,
    };

    onSubmit(contactInformation, name);

    reset();
  };

  return (
    <BookForm onSubmit={onSubmitForm}>
      <BookItem>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={e => setName(e.target.value)}
          value={name}
        />
      </BookItem>
      <BookItem>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={e => setNumber(e.target.value)}
          value={number}
        />
      </BookItem>
      <BookButton type="submit">Add contact</BookButton>
    </BookForm>
  );
}
