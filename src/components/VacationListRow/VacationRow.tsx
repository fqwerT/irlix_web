import React, { memo, useMemo } from "react";
import { Vacation } from "../../types & interfaces/vacations";
import * as S from "./style";
import { handletReqnumber } from "./utils";
import { getStringDate, createLabel } from "../../utils/helpers";
import { Status } from "../Status/Status";
import { VacationRowProps } from "../../types & interfaces/vacations";

export const VacationRow: React.FC<VacationRowProps> = memo(
  ({ item, setReqnumber }): React.JSX.Element => {
    const data = useMemo(() => {
      return {
        dates: `${getStringDate(item.start_date)} - ${getStringDate(
          item.end_date
        )}`,
        label: createLabel(Number(item.count_days), ["День", "Дня", "Дней"]),
      };
    }, []);

    return (
      <S.StyledRow>
        <S.Text>{item.type}</S.Text>
        <S.StyledDate>{data.dates}</S.StyledDate>
        <S.StyledCountDays>
          {item.count_days} {data.label}
        </S.StyledCountDays>
        <Status value={item.status} />
        <S.Text
          onClick={() => handletReqnumber(item.number_request, setReqnumber)}
        >
          {item.number_request}
        </S.Text>
      </S.StyledRow>
    );
  }
);
