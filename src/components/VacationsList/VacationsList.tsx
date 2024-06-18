import React, { useEffect,memo } from "react";
import * as S from "./style";
import { useGetVacationsListQuery } from "../../redux/store/requests/requests";
import { VacationRow } from "../VacationListRow/VacationRow";
import { useAppSelector } from "../../redux/store/store";
import { useDispatch } from "react-redux";
import { setFetching } from "../../redux/store/initialDays/initialDays";
import { VacationListProps } from "../../types & interfaces/vacations";

export const VacationsList: React.FC<VacationListProps> = memo(({
  setReqnumber,
}): React.JSX.Element => {
  const { data, error, isLoading,refetch } = useGetVacationsListQuery();
  const isFetching = useAppSelector((state) => state.countVacation.isRefetch)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    if (isFetching) {
      refetch() 
      dispatch(setFetching(false))
    }
  },[isFetching])

   if (error) {
    return <p>...error</p>
   }
   if (isLoading) {
    return <p>...loading</p>
   }
  return (
    <S.StyledVacationsList>
      <S.StyledListHeader>
        <S.StyledHeader>План отпусков</S.StyledHeader>
      </S.StyledListHeader>
      {data?.map((item) => (
        <VacationRow item={item} setReqnumber={setReqnumber} key={item.id}/>
      ))}
    </S.StyledVacationsList>
  );
})
