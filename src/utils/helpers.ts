import { VacationsTypes } from "../types & interfaces/vacations";
export const colors = ["#9100E5", "#D629E5", "#446FFF"]
export const baseUrl = "http://localhost:8000/api/vacation/";

export const getStringDate = (date: any) => {
  const updated_date = new Date(date);
  const day =
    updated_date.getDate() < 10
      ? `0${updated_date.getDate()}`
      : updated_date.getDate();
  const month =
    updated_date.getMonth() < 10
      ? `0${updated_date.getMonth()}`
      : updated_date.getMonth();
  const year = updated_date.getFullYear();
  return `${day}.${month}.${year}`;
};

export const createLabel = (number: number, titles: string[]):string => {
  const cases = [2, 0, 1, 1, 1, 2];
  if (number > 0) {
    return `${
      titles[
        number % 100 > 4 && number % 100 < 20
          ? 2
          : cases[number % 10 < 5 ? number % 10 : 5]
      ]
    }`;
  } 
  return ''
};

export const getDateCount = (data: VacationsTypes[]) => {
  let res = 0;
  data.forEach((item) => {
    res += Number(item.avalible_days);
  });
  return res;
};

