import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { addNewContact } from '../../redux/pfoneBookSlice';
import { BookForm, BookItem, BookButton } from './pfoneBook.styled';

export function PhoneBookForm() {
  const dispatch = useDispatch();
  const listContacts = useSelector(state => state.contacts.items);

  let nameContact = '';
  let numberContact = '';

  const reset = e => {
    e.target[0].value = '';
    e.target[1].value = '';
  };

  const onSubmitForm = e => {
    e.preventDefault();

    let findedСoincidence = listContacts.find(evn => evn.name === nameContact);

    if (findedСoincidence) {
      alert(`${nameContact} is already in contacts`);
      reset(e);
      return;
    }

    let contactInformation = {
      id: nanoid(),
      name: nameContact,
      number: numberContact,
    };

    dispatch(addNewContact(contactInformation));

    reset(e);
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
          onChange={e => (nameContact = e.target.value)}
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
          onChange={e => (numberContact = e.target.value)}
        />
      </BookItem>
      <BookButton type="submit">Add contact</BookButton>
    </BookForm>
  );
}
