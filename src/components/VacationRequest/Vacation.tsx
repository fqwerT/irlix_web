import React from "react";
import * as S from "./style";
import { Button } from "../ui/button";
import img from "../../assets/img/addreq.svg";
import { ModalProps } from "../../types & interfaces/vacations";
export const VacationRequest: React.FC<ModalProps> = ({toggleModal}):React.JSX.Element  => {
  return (
    <S.StyledCreateReqWrap>
      <S.StyledButton onClick={() => toggleModal()}>
        <img src={img} />  <p>Запланировать отпуск</p>
      </S.StyledButton>
    </S.StyledCreateReqWrap>
  );
};
