import { ContactCard } from '../ContactCard/ContactCard';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ContactCard key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </List>
  );
};
