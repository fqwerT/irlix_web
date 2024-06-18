
import styled from "styled-components";
import { Button } from "../ui/button";

export const StyledRow = styled.li`
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  width: 94%;
  justify-content: space-between;
  height: 2.9rem;
  margin-top:1rem;
`;

export const DeleteRowButton = styled(Button)`
  background-color: white;
  border: 1px solid #7e5ab8;
  font-family: Roboto;
  color: #7e5ab8;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 3rem;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  font-size: 0.9rem;

`;


export const StyledSelect = styled.div`
  max-width: 34%;
  width: 100%;
  display: flex;
  flex-direction:column;
`

export const StyledDatePicker = styled.div<{$isError:boolean}>`
  width: 40%;
  height: 100%;
  display:flex;
  flex-direction:column;

  input {
    border-color: ${(({$isError}) => $isError && 'red')};
  }
`