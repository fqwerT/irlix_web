import React, { useState, useCallback, useEffect } from "react";
import { VacationsDashboard } from "../components/VacationsDashboard/VacationsDashboard";
import * as S from "./style";
import { CreateRequestModal } from "../components/CreateRequestModal/CreateRequestModal";
import { useAppDispatch, useAppSelector } from "../redux/store/store";
import { useGetVacationsQuery } from "../redux/store/requests/requests";
import {
  setFetching,
  updateDays,
} from "../redux/store/initialDays/initialDays";
import { getDateCount } from "../utils/helpers";
import { setAvalibleVacations } from "../redux/store/initialDays/initialDays";
import { VacationsTypes } from "../types & interfaces/vacations";

export const Layout: React.FC = (): React.JSX.Element => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { data, isLoading, error, refetch } = useGetVacationsQuery();
  const isFetching = useAppSelector((state) => state.countVacation.isRefetch);

  const toggleModal = useCallback(() => {
    setModalOpen(!isModalOpen);
  }, [isModalOpen]);

  useEffect(() => {
    dispatch(setAvalibleVacations(data as VacationsTypes[]));
  }, [data]);

  useEffect(() => {
    if (data) {
      dispatch(updateDays(getDateCount(data)));
    }
  }, [data]);

  useEffect(() => {
    if (isFetching) {
      refetch();
      dispatch(setFetching(false));
    }
  }, [isFetching]);

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>error</p>;
  }

  return (
    <S.StyledLayoutWrapper>
      <VacationsDashboard toggleModal={toggleModal} />
      {isModalOpen && <CreateRequestModal toggleModal={toggleModal} />}
    </S.StyledLayoutWrapper>
  );
};
