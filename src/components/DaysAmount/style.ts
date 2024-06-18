import styled from "styled-components";

export const Text = styled.p`
  color: #492682;
  font-size: 0.7rem;
  text-align: center;
`;

export const StyledBlockHeading = styled.p`
  font-size: 1.2rem;
  padding-top:0.9rem;
  padding-left:1rem;
  font-weight:500!important;
`;

export const StyledDayBallance = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 16.4rem;
`;

export const StyledDiagramDaysWrap = styled.article`
  height: 100%;
  width: 100%;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  background-color: white;
  min-width:450px;
`;

export const StyledAvalibleDaysWrap = styled.div`
  height: 90%;
  display: flex;
  align-items: center;
  padding-top:1rem;
  padding-left:1.3rem;
  padding-bottom:0.8rem;
`;

export const StyledAvalibleDaysDiagram = styled.div`
  height: 9.3rem;
  width: 9.3rem;
  border: 0.9rem solid #eeeef0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  border-radius: 50%;
`;



export const StyledVacationsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
  width: 50%;
  list-style-type: none;
  padding-left:3rem;
`;

