import {
  VacationPayload,
  VacationsTypes,
} from "../../types & interfaces/vacations";
import { PickedDaysProps } from "../../types & interfaces/vacations";

export const handleSetRow = (
  setData: React.Dispatch<React.SetStateAction<VacationPayload[]>>
): void => {
  setData((prev) => [
    ...prev,
    {
      id: String(Date.now()),
      type: "",
      startDate: null,
      endDate: null,
    },
  ]);
};

// export const checkValues = (data: VacationPayload[]): boolean => {
//   if (data.length !== 0) {
//     return data.every((item) => item.startDate && item.endDate && item.type);
//   } else return false;
// };

export const sendRequest = (data: VacationPayload[], initiate: any): Promise<PromiseSettledResult<any>[]> => {
  return Promise.allSettled(data.map((item) => initiate(item)))
};

// export const checkDays = (data: any[]): boolean => {
//   return data.some((item) => item.avalible_days < 0);
// };

export const deleteRow = (data: VacationPayload[], setState: any, id: string) => {
  setState((prev:any) => {
  return prev.filter((i:VacationPayload) => i.id !== id)
 })
};

export const getSumDays = (
  days: PickedDaysProps[],
  data: VacationsTypes[]
): PickedDaysProps[] => {
  const result: PickedDaysProps[] = [];
  const sumDaysByType: { [key: string]: number } = {};

  for (let i = 0; i < days.length; i++) {
    const item = days[i];
    if (sumDaysByType[item.type]) {
      sumDaysByType[item.type] += item.count;
    } else {
      sumDaysByType[item.type] = item.count;
    }
  }

  for (const [type, count] of Object.entries(sumDaysByType)) {
    result.push({ type, count });
  }

  return result;
};


