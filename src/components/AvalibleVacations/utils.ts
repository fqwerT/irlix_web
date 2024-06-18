import { PickedDaysProps } from "../../types & interfaces/vacations";
/**
 * 
 * @param initial 
 * @param days 
 * @param type 
 * @returns number - колличество дней
 */
export const getCount = (initial: number , days: PickedDaysProps[], type: string):number | string => {

  const finded = days.filter((el: any) => el.type === type);
  if (finded[0]) {
    return initial - finded[0].count 
  }

  return initial;
};
