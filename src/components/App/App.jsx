import { useEffect } from 'react';
import { GlobalStyle } from '../../GlobalStyle';
import { ContactList } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { Container, Title, SubTitle } from './App.styled';
import { nanoid } from 'nanoid';

import { useSelector, useDispatch } from 'react-redux';

const LsKey = 'contacts';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    window.localStorage.setItem(LsKey, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = values => {
    if (contacts.some(contact => contact.name === values.name)) {
      alert(`${values.name} is already on contacts.`);
      return;
    }

    //діспатч доставляє в store
    dispatch({ type: 'ADD_CONTACT', payload: { ...values, id: nanoid() } });
  };

  const updateFilter = value => {
    dispatch({ type: 'SET_FILTER', payload: value });
  };

  const handleDelete = contactId => {
    dispatch({ type: 'DELETE_CONTACT', payload: contactId });
  };

  const visibleContacts = contacts.filter(contact => {
    const hasName = contact.name.toLowerCase().includes(filter.toLowerCase());
    return hasName;
  });

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onAddContact={addContact} />
      <SubTitle>Contacts</SubTitle>
      <Filter filter={filter} onFilter={updateFilter} />
      {visibleContacts.length > 0 && (
        <ContactList contacts={visibleContacts} onDelete={handleDelete} />
      )}
      <GlobalStyle />
    </Container>
  );
};
