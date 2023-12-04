import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initialState = {
  contacts: initialContacts,
  filter: '',
};

export const contact = value => {
  return {
    type: 'app/contact',
    payload: value,
  };
};

// const rootReducer = (state = initialState, action) => {
//   return state;
// };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
