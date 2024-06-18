import React from "react";
import * as S from "./style";
import { getStringDate } from "../../utils/helpers";
import { requestsApi } from "../../redux/store/requests/requests";
import { Vacation } from "../../types & interfaces/vacations";
import { handleRejectStatus } from "./utils";
interface SingleVacationProps {
  item: Vacation;
}

export const SingleVacationInfo: React.FC<SingleVacationProps> = ({
  item,
}): React.JSX.Element => {
  const [initiate] = requestsApi.endpoints.vacationStatus.useMutation();

  return (
    <S.StyledSingleVacation>
      <S.StyledHeader>
        <S.StyledHeading>No {item?.number_request}</S.StyledHeading>
        <S.StyledRejectBtn
          onClick={() =>
            handleRejectStatus(item?.number_request, initiate, item?.status)
          }
          disabled={item?.status === "pending_approval"}
        >
          {item?.status === "pending_approval"
            ? "На согласовании"
            : "Отозвать заявку"}
        </S.StyledRejectBtn>
      </S.StyledHeader>
      <S.StyledWrap>
        <S.StyledRowsHeader>
          <div>
            <S.StyledHeadingGhost>Название справки</S.StyledHeadingGhost>
            <S.StyledRowContent>Трудовая книжка</S.StyledRowContent>
          </div>
          <div>
            <S.StyledHeadingGhost>Период</S.StyledHeadingGhost>
            <S.StyledRowContent>
              {getStringDate(item?.start_date)} -{" "}
              {getStringDate(item?.end_date)}
            </S.StyledRowContent>
          </div>
        </S.StyledRowsHeader>
        <S.StyledHeadingGhost>Комментарий</S.StyledHeadingGhost>
        <S.StyledRowContent>
          Прошу предоставить мне справку, она мне очень нужна, прям пожалуйста
          поскорее
        </S.StyledRowContent>
      </S.StyledWrap>
    </S.StyledSingleVacation>
  );
};
