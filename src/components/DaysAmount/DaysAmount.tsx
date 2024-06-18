import React from "react";
import * as S from "./style";
import { useAppSelector } from "../../redux/store/store";
import { DaysDiagram } from "../DaysDiagram/DaysDiagram";
import { AvalibleVacations } from "../AvalibleVacations/AvalibleVacations";
export const DaysAmount: React.FC = (): React.JSX.Element => {
  const avalibleDays = useAppSelector((state)=> state.countVacation.avalible)
  const avalibleVacations = useAppSelector(
    (state) => state.countVacation.vacations
  );
  return (
    <S.StyledDayBallance>
      <S.StyledDiagramDaysWrap>
        <S.StyledBlockHeading>Баланс дней на отпуск</S.StyledBlockHeading>
        <S.StyledAvalibleDaysWrap>
           <DaysDiagram total={avalibleDays} list={avalibleVacations}/>
           <S.StyledVacationsList>
           <AvalibleVacations isModal={false}/>
           </S.StyledVacationsList>
        </S.StyledAvalibleDaysWrap>
      </S.StyledDiagramDaysWrap>
    </S.StyledDayBallance>
  );
};

