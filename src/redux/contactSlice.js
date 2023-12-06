import { nanoid } from 'nanoid';

import { createSlice } from '@reduxjs/toolkit';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactSlice = createSlice({
  name: 'app',
  initialState: { contacts: initialContacts },

  //   reducers: {
  //     addPhone: {
  //       reducer(state, action) {
  //         state.contacts.push(action.payload);
  //       },
  //       prepare(newContact) {
  //         return {
  //           payload: {
  //             id: nanoid(),
  //             ...newContact,
  //           },
  //         };
  //       },
  //     },

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

export const addReducer = contactSlice.reducer;
export const { addPhone, deletePhone } = contactSlice.actions; //експортуємо генератор акшіон

// import { createAction, createReducer } from '@reduxjs/toolkit';

// export const addPhone = createAction('app/addPhone'); //створюємо генератор екшенів
// export const deletePhone = createAction('app/deletePhone');

// const initialState = {
//   contacts: initialContacts,
// };

// export const addReducer = createReducer(initialState, builder => {
//   builder
//     .addCase(addPhone, (state, action) => {
//       state.contacts.push(action.payload); //додаєм новий контакт імутабельно
//     })

//     .addCase(deletePhone, (state, action) => {
//       state.contacts = state.contacts.filter(
//         contact => contact.id !== action.payload
//       );
//     });
// });
