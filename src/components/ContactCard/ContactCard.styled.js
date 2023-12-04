import styled from 'styled-components';

export const Item = styled.li`
  border-radius: 4px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding-top: 12px;
  color: darkblue;
`;

export const Btn = styled.button`
  width: 60px;
  border-radius: 10px;
  border: none;
  background-color: white;
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
