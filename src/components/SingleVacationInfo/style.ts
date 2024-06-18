import styled from "styled-components";
import { Button } from "../ui/button";

export const StyledSingleVacation = styled.div`
  background-color: white;
  width: 99%;
  height: 20rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Text = styled.p`
  padding-left: 1rem;
  font-size: 1rem;
  text-align: left;
`;

export const StyledWrap = styled.div`
  border: 1px solid lightgrey;
  border-radius: 7px;
  width: 80%;
  height: 13rem;
  margin-left: 1rem;
  padding-right: 1rem;
`;

export const StyledHeader = styled.div`
  width: 100%;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StyledRejectBtn = styled(Button)<{ disabled: boolean }>`
  background-color: white;
  border: ${({ disabled }) =>
    disabled === true ? "1px solid lightgray" : "1px solid #7e5ab8 "};
  color: ${({ disabled }) => (disabled === true ? "lightgray" : "#7e5ab8")};
  margin-top: 1rem;
`;

export const StyledHeadingGhost = styled(Text)`
  font-size: 0.9rem;
  color: black;
  opacity: 0.5;
  padding-top: 1rem;
`;

export const StyledHeading = styled(Text)`
  font-size: 0.9rem;
  color: black;
  padding-top: 1rem;
`;

export const StyledRowContent = styled(Text)`
  font-size: 0.8rem;
  color: black;
  padding-top: 0.5rem;
`;

export const StyledRowsHeader = styled(StyledHeader)`
  width: 47%;
`;
