import { GlobalStyle } from '../../GlobalStyle';
import { Container, Title, SubTitle } from './App.styled';

import { ContactList } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';

export const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts </SubTitle>

      <Filter />
      <ContactList />
      <GlobalStyle />
    </Container>
  );
};
