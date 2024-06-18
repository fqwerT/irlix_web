export type VacationsTypes = {
  id: string;
  type: string;
  avalible_days: number;
  count:number
};

export type Vacation = {
  id: number;
  type: string;
  start_date: string;
  end_date: string;
  status: string;
  count_days: string;
  number_request: string;
  end_request: string;
  start_request: string;
  deadline: string;
};

export type Error = {
  error:boolean,
  id:string,
  message:string
}

export type VacationPayload = {
  id: string;
  type: string;
  startDate: null;
  endDate: null;
};

export type RowProps = {
  item: VacationPayload
  setData: React.Dispatch<React.SetStateAction<VacationPayload[]>>;
  handleRemove: any;
  setDays: React.Dispatch<React.SetStateAction<never[]>>;
  days: any;
  setError: (value: Error[]) => void;
  errors:any,
};

export interface ModalProps {
  toggleModal: () => void ;
}

export type Dates = [Date | null, Date | null] | null;

export type ErrorHandlerProps = {
  dates: Dates;
  value: string | null;
  setValue: (value: any) => void;
  id: string | number;
  type: string | null;
  vacations: VacationsTypes[];
}


export interface VacationListProps {
  setReqnumber: (arg: string | null) => void;
}

export  interface VacationRowProps {
  item: Vacation;
  setReqnumber: (arg: string | null) => void;
}


export interface DaysDiagramProps {
  total: number | null;
  list: VacationsTypes[];
}

export interface AvalibleVacationsProps {
  isModal: boolean;
}

export interface PickedDaysProps {
  type: string;
  count: number;
}


export interface InitialVacationProps {
  avalible: null | number;
  vacations: VacationsTypes[];
  daysPayload: PickedDaysProps[];
  isRefetch: any;
}