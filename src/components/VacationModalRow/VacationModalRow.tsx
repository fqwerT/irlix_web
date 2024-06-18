import React, { useCallback, useEffect, useState, useMemo } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { StyledError } from "../ui/error";
import { AddData, changeCell, handleDateChange, errorHandler } from "./utils";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as S from "./style";
import { ReactComponent as Icon } from "../../assets/img/union.svg";
import { RowProps } from "../../types & interfaces/vacations";
import { useAppSelector } from "../../redux/store/store";
import { Dates } from "../../types & interfaces/vacations";
import { shallowEqual } from "react-redux";
export const VacationModalRow: React.FC<RowProps> = ({
  item,
  setData,
  handleRemove,
  setDays,
  setError,
  errors,
}): React.JSX.Element => {
  const [datesCount, setDates] = useState<Dates>([null, null]);
  const [value, setValue] = useState<string | null>("");
  const avalibleVacation = useAppSelector(
    (state) => state.countVacation.vacations,
    shallowEqual
  );

  const handleDate = useCallback(
    (
      dates: [Date | null, Date | null],
      id: string,
      setData: React.Dispatch<React.SetStateAction<any[]>>
    ) => {
      handleDateChange(dates, id, setData);
      AddData(null, dates, id, setDays);
      setDates(dates);
    },
    []
  );

  const handleType = useCallback(
    (
      id: string,
      type: string,
      setData: React.Dispatch<React.SetStateAction<any[]>>
    ) => {
      changeCell(id, type, null, setData);
      AddData(type, null, id, setDays);
      setValue(type as string);
    },
    []
  );

  useEffect(() => {
    errorHandler({
      dates: datesCount,
      value: value,
      setValue: setError,
      id: item.id,
      type: item.type,
      vacations: avalibleVacation,
    });
  }, [value, datesCount, avalibleVacation, item]);

  const fillteredMessage = useMemo(() => {
    return errors.find((er: any) => er.id == item.id);
  }, [item.id, errors]);

  return (
    <>
      <S.StyledRow key={item.id}>
        <S.StyledSelect>
          <Select
            onChange={(e) =>
              handleType(item.id, e.target.value as string, setData)
            }
            value={item.type}
            error={!value}
          >
            <MenuItem value={"Ежегодный"}>Ежегодный</MenuItem>
            <MenuItem value={"Ненормированный"}>Ненормированный</MenuItem>
            <MenuItem value={"Студенческий"}>Студенческий</MenuItem>
          </Select>
        </S.StyledSelect>
        <S.StyledDatePicker
          $isError={datesCount?.[0] === null || datesCount?.[1] === null}
        >
          <ReactDatePicker
            className="custom-date"
            selected={item.startDate}
            onChange={(dates) => handleDate(dates, item.id, setData)}
            startDate={item.startDate}
            endDate={item.endDate}
            selectsRange
          />
        </S.StyledDatePicker>
        <S.DeleteRowButton onClick={handleRemove}>
          <Icon />
          Удалить
        </S.DeleteRowButton>
      </S.StyledRow>
      <StyledError>{fillteredMessage?.message}</StyledError>
    </>
  );
};
