import styled from "styled-components";

export const StyledRow = styled.li`
  list-style-type: none;
  width: 97%;
  background-color: white;
  height: 3.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const Text = styled.p`
  font-size: 0.7rem;
  width: 9rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledDate = styled(Text)`
  color: #643f9e;
`;
export const StyledCountDays = styled(Text)`
  width: 3rem;
  color: #643f9e;
`;
