export type Saved<T> = T & {
  id: number;
};
interface SavedData {
  id: number;
}

export interface ICreateProject {
  projectDs: string;
  projectNm: string;
  totalArea: number;
  decorationArea: number;
  protectedArea: number;
  streetArea: number;
  totalSlots: number;
}

export interface IListProject extends SavedData {
  projectDs: string;
  projectNm: string;
}

export interface IGetProjectById extends Saved<IListProject> {
  scenarios: Saved<IScenario>[];
}

export interface IScenario {
  scenarioDs: string;
  scenarioNm: string;
  totalArea: number;
  decorationArea: number;
  protectedArea: number;
  streetArea: number;
  totalSlots: number;
  pricing?: IPricing;
}

export interface IPricing {
  squareAmount: number;
  fee: number;
  feeModel: string;
  installments: number;
  startAmount: number;
  feeIndex: string;
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
