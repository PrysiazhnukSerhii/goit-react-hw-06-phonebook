import { configureStore } from '@reduxjs/toolkit';

const contacts = {
  items: [],
  filter: '',
};

export default configureStore({
  reducer: { contacts },
});
