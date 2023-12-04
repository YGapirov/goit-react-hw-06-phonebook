import { Field, Form, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  margin-top: 18px;
  margin-bottom: 36px;
`;
export const StyleField = styled(Field)`
  display: block;
  margin: 8px 0;
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid gray;
`;

export const StyledButton = styled.button`
  width: 100px;
  margin-top: 18px;
  padding: 5px;
  border-radius: 10px;
  border: none;
  /* background-color: whitesmoke; */
  box-shadow: 0 1px 7px grey;
  background-color: navy;
  color: white;

  &:hover,
  &:focus {
    color: white;
    background-color: black;
    cursor: pointer;
  }
`;

export const StyledWrapper = styled.div`
  /* padding: 36px; */
`;

export const StyledError = styled(ErrorMessage)`
  color: red;
  font-weight: bold;
`;

export const Label = styled.label`
  color: darkgray;
`;
