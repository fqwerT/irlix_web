import styled, { css } from "styled-components";

export const StyledVacationsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
  width: 50%;
`;

export const StyledVacationsItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const CountDays = styled.p<{ $color: string }>`
  font-size: 0.7rem;
  padding-top: 0.3rem;
  color: ${({ $color }) => $color};
  padding-left: 1.5rem;
`;

export const CountDaysModal = styled.p<{ $color: string }>`
  font-size: 2rem;
  padding-top: 0.3rem;
  font-family: Druk;
  color: ${({ $color }) => $color};
`;

export const VacationType = styled.p<{ $isModal: boolean; $color: string }>`
  font-size: 1rem;
  padding-top: 0.3rem;
  display: flex;
  align-items: center;

  ${({ $isModal, $color }) =>
    $isModal
      ? ""
      : css`
          &::before {
            content: ".";
            width: 1rem;
            display: flex;
            justify-content: center;
            height: 1rem;
            background-color: ${$color};
            margin-right: 0.5rem;
            border-radius: 50%;
            color: ${$color};
          }
        `}
`;
