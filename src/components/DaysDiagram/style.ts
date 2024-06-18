import styled from "styled-components";
import { Text } from "../DaysAmount/style";

export const StyledAmountDaysWrap = styled.div`
  background-color: white;
  width: 8rem;
  position: absolute;
  top: 2.5rem;
  bottom: 0;
  left: 2.2rem;
  right: 0;
  border-radius: 50%;
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledDaysValue = styled(Text)`
  font-size: 2.9rem;
  font-weight: 600;
  font-family: Druk;
  line-height: 3rem;
  
`;

export const StyledAvalibleText = styled(Text)`
  width: 5.5rem;
  text-align: center;
`;

export const StyledDaysWrap = styled.div`
  position: relative;
  height: 100%;
  display: flex;
`;
