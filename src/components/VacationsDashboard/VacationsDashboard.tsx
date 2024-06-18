import React, { useState } from "react";
import { DaysAmount } from "../DaysAmount/DaysAmount";
import { VacationRequest } from "../VacationRequest/Vacation";
import { useGetVacactionByIdQuery } from "../../redux/store/requests/requests";
import * as S from "./style";
import { VacationsList } from "../VacationsList/VacationsList";
import { SingleVacationInfo } from "../SingleVacationInfo/SingleVacationInfo";
import { ModalProps } from "../../types & interfaces/vacations";

export const VacationsDashboard: React.FC<ModalProps> = ({toggleModal}): React.JSX.Element => {
  const [reqnumber, setReqNumber] = useState<string | null>(null);
  const { data } = useGetVacactionByIdQuery<Record<string, any>>(reqnumber);

  return (
    <S.StyledDashboardWrap>
      <S.StyledDashboardHeader>
        <DaysAmount />
        <VacationRequest toggleModal={toggleModal}/>
      </S.StyledDashboardHeader>
      <VacationsList setReqnumber={setReqNumber} />
      {reqnumber && <SingleVacationInfo item={data} />}
    </S.StyledDashboardWrap>
  );
};
