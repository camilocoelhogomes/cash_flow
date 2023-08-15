import {Project} from '../../Model/Entitys/Project';

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
