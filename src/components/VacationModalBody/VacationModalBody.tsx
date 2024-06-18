import React, { useState, useCallback, useMemo, useEffect } from "react";
import * as S from "./style";
import { VacationModalRow } from "../VacationModalRow/VacationModalRow";
import { handleSetRow, sendRequest, deleteRow, getSumDays } from "./utils";
import { VacationPayload } from "../../types & interfaces/vacations";
import { requestsApi } from "../../redux/store/requests/requests";
import { useAppDispatch, useAppSelector } from "../../redux/store/store";
import { setDaysPayload } from "../../redux/store/initialDays/initialDays";
import { Error } from "../../types & interfaces/vacations";
import { StyledError } from "../ui/error";
// import {
//   useGetVacationsListQuery,
//   useGetVacationsQuery,
// } from "../../redux/store/requests/requests";
import { setFetching } from "../../redux/store/initialDays/initialDays";

export const VacationModalBody: React.FC = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<VacationPayload[]>([]);
  const [isError, setError] = useState<Error[]>([]);
  const [pickedDays, setPickedDays] = useState([]);
  const [initiate, { error }] =
    requestsApi.endpoints.postVacation.useMutation();

  const avalibleVacations = useAppSelector(
    (state) => state.countVacation.vacations
  );

  const handleRemoveRow = useCallback(
    (data: VacationPayload[], remove: any, id: string) => {
      deleteRow(data, remove, id);
      deleteRow(pickedDays, setPickedDays, id);
    },
    [data]
  );

  const handleAddRow = useCallback(() => {
    handleSetRow(setData);
  }, [data]);

  useEffect(() => {
    if (pickedDays) {
      dispatch(setDaysPayload(getSumDays(pickedDays, avalibleVacations)));
    }
    return () => {
      dispatch(setDaysPayload([]))
    }
  }, [pickedDays]);

  const handleCheckError = useCallback(
    (err: Error[]) => {
      setError(err);
    },
    [isError]
  );

  const errorCheck = useMemo(() => {
    return isError.some((item) => item.error === true);
  }, [isError]);

  return (
    <>
      <S.StyledInputsWrap>
        {data.map((item, index) => (
          <VacationModalRow
            item={item}
            setData={setData}
            key={index}
            handleRemove={() => handleRemoveRow(data, setData, item.id)}
            setDays={setPickedDays}
            days={pickedDays}
            setError={handleCheckError}
            errors={isError}
          />
        ))}
        <S.StyledAddrow onClick={() => handleAddRow()}>
          + Добавить строку
        </S.StyledAddrow>
      </S.StyledInputsWrap>

      <S.StyledButton
        onClick={() => {
          sendRequest(data, initiate).finally(() =>
            dispatch(setFetching(true))
          );
        }}
        disabled={errorCheck}
      >
        Отправить на согласование
      </S.StyledButton>
      <StyledError>{error && "data" in error && `${error.data}`}</StyledError>
    </>
  );
};
