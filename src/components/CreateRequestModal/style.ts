import styled from "styled-components";

export const StyledModal = styled.aside`
  height: 99.8%;
  width: 40rem;
  background-color: white;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  border-bottom-left-radius: 12px;
  border-top-left-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items:center;
  //justify-content:center;
  border: 1px solid gray;
`;

export const StyledModalHeader = styled.div`
  width: 100%;
  height: 6.3rem;
  background-color: #f1effc;
  border-top-left-radius: 12px;
  display: flex;
  flex-direction: column;
  padding-bottom:3.5rem;

`;

export const StyledModalTextHeader = styled(StyledModalHeader)`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding-bottom:0;
  
`;

export const StyledModalVactionsHeader = styled(StyledModalTextHeader)`
  width: 70%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  flex-direction: row;
  padding-left: 1rem;
  padding-top: 1rem;
`;

export const Text = styled.p`
  padding-top: 1rem;
  padding-left: 1rem;
  font-size: 1.2rem;
  height: 2rem;
`;

export const StyledCloseButton = styled.button`
  border: 0;
  background-color: inherit;
  height: 2rem;
  padding-top: 1rem;
`;
