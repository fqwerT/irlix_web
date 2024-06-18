import React, { useEffect, useRef, useMemo } from "react";
import * as S from "./style";
import { createLabel } from "../../utils/helpers";
import { useAppSelector } from "../../redux/store/store";
import { getCount } from "./utils";
import { colors } from "../../utils/helpers";
import { AvalibleVacationsProps } from "../../types & interfaces/vacations";
import { PickedDaysProps } from "../../types & interfaces/vacations";

export const AvalibleVacations: React.FC<AvalibleVacationsProps> = ({
  isModal,
}) => {
  const vacations = useAppSelector((state) => state.countVacation.vacations);
  const pickedDays: PickedDaysProps[] = useAppSelector(
    (state) => state.countVacation.daysPayload
  );

  return (
    <>
      {vacations?.map((item, index) => {
        const countDays = getCount(item.avalible_days, pickedDays, item.type);
        const label = createLabel(Number(item.avalible_days), [
          "День",
          "Дня",
          "Дней",
        ]);
        return (
          <li key={item.id}>
            <S.VacationType $isModal={isModal} $color={colors[index]}>
              {item.type}
            </S.VacationType>
            {isModal === true ? (
              <S.CountDaysModal $color={colors[index]}>
                {`${countDays} `}
                {label}
              </S.CountDaysModal>
            ) : (
              <S.CountDays $color={colors[index]}>
                Доступно: {item.avalible_days} {label}
              </S.CountDays>
            )}
          </li>
        );
      })}
    </>
  );
};
