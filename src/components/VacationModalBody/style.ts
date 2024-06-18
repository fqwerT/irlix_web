import styled from "styled-components";
import { Button } from "../ui/button";

export const StyledInputsWrap = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  width: 100%;
`;

export const StyledButton = styled(Button)<{ $isError: boolean }>`
  transition: 0.3s ease-in-out;
  background-color: ${({ $isError }) => ($isError ? "red" : "#7e5ab8")};
  color: white;
  font-family: Roboto;
  &:disabled {
    background-color: white;
    border: 1px solid lightgray;
    color: black;
  }
`;

export const StyledError = styled.h1`
  color: red;
  padding: 1rem;
`;

export const StyledAddrow = styled.button`
  transition: 0.3s ease-in-out;
  border: 1px solid white;
  outline: 0;
  color: #7e5ab8;
  font-family: Roboto;
  font-size: 0.9rem;
  margin-left: 1rem;
  background-color: white;
  max-width: 9rem;
  margin-top: 2rem;
  padding: 0.5rem 0.2rem 0.5rem 0.2rem;
  border-radius: 7px;
  &:hover {
    border: 1px solid #7e5ab8;
  }
`;
