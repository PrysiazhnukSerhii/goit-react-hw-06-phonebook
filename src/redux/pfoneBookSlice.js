import { createSlice } from '@reduxjs/toolkit';

const startListContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const pfoneBookSlice = createSlice({
  name: 'contacts',
  initialState: { items: startListContacts, filter: '' },
  reducers: {
    addNewContact(state, action) {
      state.items = [...state.items, action.payload];
    },
    removeContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    filterName(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addNewContact, removeContact, filterName } =
  pfoneBookSlice.actions;
