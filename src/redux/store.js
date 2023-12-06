// import { createStore, combineReducers } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';

import { addReducer } from './contactSlice';
import { filterReducer } from './filterSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { contacts: addReducer, filter: filterReducer },
});

// const rootReducer = combineReducers({
//   contacts: addReducer,
//   filter: filterReducer,
// });

// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);

// const initialState = {
//   contacts: initialContacts,
//   filter: '',
// };

// const rootReducer = (state = initialState, action) => {
//   //приймає попередній стан, і дію
//   switch (
//     action.type //тип дії
//   ) {
//     case 'app/addPhone':
//       return {
//         ...state, //розпилюєм попередній стан
//         contacts: [...state.contacts, action.payload], // оновлюємо дані і додаєм, дані які приходять з актіоном
//       };
//     case 'app/deletePhone':
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           //видаляє через фільр по співпадінню id
//           contact => contact.id !== action.payload
//         ),
//       };
//     case 'filters/filterPhone':
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     default:
//       return state;
//   }
// };
