// import { useEffect } from 'react';

import { GlobalStyle } from '../../GlobalStyle';
// import { nanoid } from 'nanoid';

import { ContactList } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { Container, Title, SubTitle } from './App.styled';

import { useDispatch, useSelector } from 'react-redux';

import { addPhone, deletePhone, filterPhone } from '../../redux/store';

// const LsKey = 'contacts';

// //зовнішня функція, яку передаєм в useState
// const getInitialContacts = () => {
//   const savedContacts = window.localStorage.getItem(LsKey); //виклакається і відображається ЛС до монтування
//   return savedContacts !== null ? JSON.parse(savedContacts) : initialContacts; //тернарний
// };

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts); //отримує значення контакт із store
  const filter = useSelector(state => state.filter.filter); // Отримання значення filter зі стану Redux

  // useEffect(() => {
  //   window.localStorage.setItem(LsKey, JSON.stringify(contacts));
  // }, [contacts]); //під капотом порівняється значення контакт попередні з введеним

  const addContact = value => {
    dispatch(addPhone(value));

    if (contacts.some(contact => contact.name === value.name)) {
      alert(`${value.name} is already on contacts.`);
      return;
    }
  };

  const updateFilter = value => {
    dispatch(filterPhone(value));
  };

  const handleDelete = contactId => dispatch(deletePhone(contactId));

  const visibleContacts = contacts.filter(contact => {
    const hasName = contact.name.toLowerCase().includes(filter.toLowerCase());
    return hasName;
  });

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onAddContact={addContact} />
      <SubTitle>Contacts </SubTitle>

      <Filter filter={filter} onFilter={updateFilter} />
      {visibleContacts.length > 0 && (
        <ContactList contacts={visibleContacts} onDelete={handleDelete} />
      )}
      <GlobalStyle />
    </Container>
  );
};
