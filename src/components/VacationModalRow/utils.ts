import { Dates, ErrorHandlerProps } from "../../types & interfaces/vacations";

const checkItem = (data: any, id: any): number => {
  return data.findIndex((item: any) => item.id === id);
};

export const changeCell = (
  id: Date | number | string,
  type: string ,
  open: boolean | null,
  setData: React.Dispatch<React.SetStateAction<any[]>>
) => {
  setData((prevData) =>
    prevData.map((item) => {
      if (item.id === id) {
        if (type) {
          return { ...item, type: type };
        }
        if (open) {
          let isOpen = open;
          return { ...item, open: !isOpen };
        }
      }
      return item;
    })
  );
};

export const changeDateCell = (
  id: Date | number | string,
  dates:[Date | null,Date | null],
  setData: React.Dispatch<React.SetStateAction<any[]>>
) => {
   const [start,end] = dates
   setData((prevData) =>
    prevData.map((item) => {
      let newItem;
      if (item.id === id) {
          newItem = { ...item };
        //if (startDate) {
          newItem.startDate = start;
       // }
          newItem.endDate = end;
          return newItem;
      }
      return item 
    })
  );
};

export const DateCalculation = (arg1: string, arg2: string, func: any) => {
  if (arg1 !== "" && arg2 !== "") {
    return `${func(arg1)}-${func(arg2)}`;
  }
};

export const handleDateChange = (
  dates: [Date | null, Date | null],
  id: string,
  setData: React.Dispatch<React.SetStateAction<any[]>>
) => {
  
  changeDateCell(id, dates, setData);
};

export const Converter = (arg1: any, arg2: any): number => {
  const end_date = new Date(arg1);
  const start_date = new Date(arg2);
  const difference_in_time = end_date.getTime() - start_date.getTime();
  const difference_in_days = difference_in_time / (1000 * 3600 * 24);
  return Math.round(difference_in_days);
};

export const AddData = (
  type: string | null ,
  dates: Dates,
  id: number | string,
  setState: React.Dispatch<React.SetStateAction<never[]>>
): void => {
  if (dates) {
    const [start, end] = dates;
    if (start && end) {
      setState((prev: any) => {
        const itemExists = checkItem(prev, id);
        if (itemExists != -1) {
          return prev.map((item: any) => {
            if (item.id === id) {
              return {
                ...item,
                id:id, 
                count: Converter(end, start),
              };
            }
            return item;
          });
        } else {
          return [
            ...prev,
            {
              id: id,
              count: Converter(end, start),
            },
          ];
        }
      });
    }
  }

  if (type) {
    setState((prev: any) => {
      const itemExists = checkItem(prev, id);
      if (itemExists != -1) {
        return prev.map((item: any) => {
          if (item.id === id) {
            return {
              ...item,
              id:id, 
              type: type,
            };
          }
          return item;
        });
      } else {
        return [
          ...prev,
          {
            id: id,
            type: type,
            count: 0,
          },
        ];
      }
    });
  }
};

export const errorHandler = ({
  dates,
  value,
  setValue,
  id,
  type,
  vacations,
}: ErrorHandlerProps): void => {
  const isFullDate = dates?.some((item) => item === null);
  const findedRow = vacations.find((item) => item.type === type);
  const [start, end] = dates!;

  let errorMessage: null | string = null;

  if (findedRow) {
    const daysCountCheck = findedRow.avalible_days < Converter(end, start);
    if (daysCountCheck) {
      errorMessage = "Число дней больше доступных";
    }
  }

  if (isFullDate || !value) {
    errorMessage = "Заполнены не все поля";
  }

  const errorTemplate = {
    error: !!errorMessage,
    id: id,
    message: errorMessage || "",
  };

  setValue((prev: any) => {
    const existingErrorIndex = checkItem(prev, id);
    if (existingErrorIndex !== -1) {
      return prev.map((item: any, index: number) =>
        index === existingErrorIndex ? errorTemplate : item
      );
    }
    return errorMessage ? [...prev, errorTemplate] : prev;
  });


};
