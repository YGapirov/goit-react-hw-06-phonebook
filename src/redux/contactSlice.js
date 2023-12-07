import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactSlice = createSlice({
  name: 'app',
  initialState: { contacts: initialContacts },

  reducers: {
    addPhone: {
      prepare(contact) {
        return {
          payload: {
            id: nanoid(),
            ...contact,
          },
        };
      },
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
    },

    deletePhone(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

const addReducer = contactSlice.reducer;

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

export const contactsReducer = persistReducer(persistConfig, addReducer);

export const { addPhone, deletePhone } = contactSlice.actions; //експортуємо генератор акшіон
