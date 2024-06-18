import styled from "styled-components";

export const StyledVacationsList = styled.article`
  width: 99%;
  border: 2px solid #f1effc;
  max-height: 100%;
  border-radius: 12px;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  :nth-last-child() {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
  
`;

export const StyledListHeader = styled.div`
  height: 3.5rem;
  background-color: #f1effc;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  width:100%;
`;

export const StyledHeader = styled.p`
  padding-top:1rem;
  padding-left:1rem;
  font-size: 1.2rem;
`