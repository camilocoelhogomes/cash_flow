export interface IProject {
  projectDs: string;
  projectNm: string;
  totalArea: number;
  decorationArea: number;
  protectedArea: number;
  streetArea: number;
  totalSlots: number;
}

export interface IScenario {
  scenarioDs: string;
  scenarioNm: string;

  pricing?: IPricing;
  cashFlows?: ICashFlow[]
}

export interface IPricing {
  squareAmount: number;
  fee: number;
  feeModel: string;
  installments: string;
  startAmount: number;
  feeIndex: string;
}
export interface ICashFlow {
  cash_flow_nm: string
  cash_flow_ds: string
  cash_flow_tp: string
  cashMovements: ICashMovement[]
}
export interface ICashMovement {
  date: Date
  value: number
}


export interface PaginationSearch<T> {
  result: T[];
  total: number;
  hasMore: boolean;
}

export interface QuerySearch<T> {
  query: Partial<T>;
  pagination: number;
  limit: number;
}
