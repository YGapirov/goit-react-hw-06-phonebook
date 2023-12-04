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

export const ContactForm = ({ onAddContact }) => {
  return (
    <StyledWrapper>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={formSchema}
        onSubmit={(values, actions) => {
          //   console.log(values);
          onAddContact(values);
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
