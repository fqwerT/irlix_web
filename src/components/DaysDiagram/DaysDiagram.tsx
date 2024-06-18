import React, { useMemo } from "react";
import * as S from "./style";
import { VacationsTypes } from "../../types & interfaces/vacations";
import DonutChart from "react-donut-chart";
import { colors } from "../../utils/helpers";
import { DaysDiagramProps } from "../../types & interfaces/vacations";
export const DaysDiagram: React.FC<DaysDiagramProps> = ({
  total,
  list,
}): React.JSX.Element => {
  const filltered = useMemo(() => {
    if (list) {
      return list.map((item) => {
        return { ...item, value: item.avalible_days, label: item.type };
      });
    }
    return [];
  }, [list]);

  return (
    <S.StyledDaysWrap>
      <DonutChart
        height={200}
        width={200}
        colors={colors}
        data={filltered}
        legend={false}
      />
      <S.StyledAmountDaysWrap>
      <S.StyledAvalibleText>
        Доступно дней к планированию отпуска
      </S.StyledAvalibleText>
      <S.StyledDaysValue>{total}</S.StyledDaysValue>
      </S.StyledAmountDaysWrap>
    </S.StyledDaysWrap>
  );
};
