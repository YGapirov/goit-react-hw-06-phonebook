import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledForm,
  StyleField,
  StyledButton,
  StyledWrapper,
  StyledError,
  Label,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addPhone } from '../../redux/contactSlice';

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(
      /^(\d{2,}-\d{2,}-\d{2,}|\d{2,}-\d{2,}|\d{5,})$/,
      'It must be min 5 numbers (1234567 or 123-45-67)'
    )
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts); //отримує значення контакт із store

  const addContact = value => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === value.name.toLowerCase()
      )
    ) {
      alert(`${value.name} is already on contacts.`);
      return;
    }
    dispatch(addPhone(value)); //якщо контакта такого нема, діспатчить  новий контакт в список
  };

  return (
    <StyledWrapper>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={formSchema}
        onSubmit={(values, actions) => {
          addContact(values);
          actions.resetForm();
        }}
      >
        <StyledForm>
          <Label>
            Name
            <StyleField type="text" name="name" />
            <StyledError name="name" component="p" />
          </Label>

          <Label>
            Number
            <StyleField type="tel" name="number" />
            <StyledError name="number" component="p" />
          </Label>

          <StyledButton type="submit">Add contact</StyledButton>
        </StyledForm>
      </Formik>
    </StyledWrapper>
  );
};
