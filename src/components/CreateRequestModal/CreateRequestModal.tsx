import React from "react";
import * as S from "./style";
import img from "../../assets/img/close.svg";
import { AvalibleVacations } from "../AvalibleVacations/AvalibleVacations";
import { VacationModalBody } from "../VacationModalBody/VacationModalBody";
import { ModalProps } from "../../types & interfaces/vacations";
export const CreateRequestModal: React.FC<ModalProps> = ({toggleModal}): React.JSX.Element => {

  return (
    <S.StyledModal>
      <S.StyledModalHeader>
        <S.StyledModalTextHeader>
          <S.Text>Запланировать отпуск</S.Text>
          <S.StyledCloseButton onClick={toggleModal}>
            <img src={img} />
          </S.StyledCloseButton>
        </S.StyledModalTextHeader>
        <S.StyledModalVactionsHeader>
        <AvalibleVacations isModal={true}/>
        </S.StyledModalVactionsHeader>
      </S.StyledModalHeader>
      <VacationModalBody/>
    </S.StyledModal>
  );
};
