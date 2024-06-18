import styled from "styled-components";

export const StyledStatus = styled.div<{ $status: string }>`
  text-align:left;
  font-size: 0.7rem;
  border-radius:6px;
  padding-top:0.2rem;
  padding-bottom:0.2rem;
  padding-left:0.4rem;
  padding-right:0.4rem;
  background-color: ${({ $status }) => {
    if ($status === "approved") {
      return "#DAF5F5";
    } else if ($status === "pending_approval") {
      return "#F2F5FF";
    } else if ($status === "rejected") {
      return "#FCEEF1";
    }
  }};

  color: ${({ $status }) => {
    if ($status === "approved") {
      return "#01877D";
    } else if ($status === "pending_approval") {
      return "#446FFF";
    } else if ($status === "rejected") {
      return "#F15471";
    }
  }};
`;


export const StyledStatusWrapper = styled.div`
width:9rem;
display:flex;
align-items:center;
justify-content:flex-start;

`