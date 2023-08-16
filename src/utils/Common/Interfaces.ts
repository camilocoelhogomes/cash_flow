export interface IProject {
  id: number;
  projectDs: string;
  projectNm: string;
  totalArea: number;
  totalSlots: number;
  decorationArea: number;
  streetArea: number;
  squareValue: number;
  protectedArea: number;
}

export interface IScenario {
  id: number;
  scenarioDs: string;
  scenarioNm: string;
  totalArea: number;
  slotArea: number;
  decorationArea: number;
  protectedArea: number;
  streetArea: number;
  slots: number;
  pricing?: Pricing;
}

interface Pricing {
  squareAmount: number;
  fee: number;
  feeModel: string;
  installments: string;
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
