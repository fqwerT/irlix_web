import React from "react";
import * as S from "./style";
import { StatusConverter } from "./utils";
interface StatusProps {
  value: string;
}

export const Status: React.FC<StatusProps> = ({ value }):React.JSX.Element  => {
  return (
    <S.StyledStatusWrapper>
      <S.StyledStatus $status={value}>{StatusConverter(value)}</S.StyledStatus>
    </S.StyledStatusWrapper>
  );
};
