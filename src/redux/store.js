import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { nanoid } from 'nanoid';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

// const initialState = {
//   contacts: initialContacts,
//   filter: '',
// };

export const addPhone = values => {
  return {
    type: 'app/addPhone',
    payload: { ...values, id: nanoid() },
  };
};

export const deletePhone = contactId => {
  return {
    type: 'app/deletePhone',
    payload: contactId,
  };
};

export const filterPhone = value => {
  return {
    type: 'filters/filterPhone',
    payload: value,
  };
};

const addInitialState = {
  contacts: initialContacts,
};

const addReducer = (state = addInitialState, action) => {
  //приймає попередній стан, і дію
  switch (
    action.type //тип дії
  ) {
    case 'app/addPhone':
      return {
        ...state, //розпилюєм попередній стан
        contacts: [...state.contacts, action.payload], // оновлюємо дані і додаєм, дані які приходять з актіоном
      };
    case 'app/deletePhone':
      return {
        ...state,
        contacts: state.contacts.filter(
          //видаляє через фільр по співпадінню id
          contact => contact.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

const filterInitialState = {
  filter: '',
};

const filterReducer = (state = filterInitialState, action) => {
  //приймає попередній стан, і дію
  switch (
    action.type //тип дії
  ) {
    case 'filters/filterPhone':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

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

const rootReducer = combineReducers({
  contacts: addReducer,
  filter: filterReducer,
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
