import styled from "styled-components";
import { Button } from "../ui/button";
import backgroundImg from '../../assets/img/background.svg';
export const StyledCreateReqWrap = styled.div`
  width: 98%;
  display: flex;
  align-items: flex-end;
  height: 14.8rem;
  border-radius: 12px;
  text-align: center;
  background-color: white;
  padding-bottom:1.6rem;
  padding-left: 1rem;
  background-image:url(${backgroundImg});
  background-repeat:no-repeat;
  background-size:cover;
  min-width: 450px;
`;

export const StyledButton = styled(Button)`
  text-align: center;
  background-color: #7e5ab8;
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  font-family: Roboto-light;
  font-size: 1rem;
  display: flex;
  align-items: center;
  //justify-content: center;
  gap: 0.7rem;
`;
