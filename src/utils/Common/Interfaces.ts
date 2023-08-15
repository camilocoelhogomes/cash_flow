export interface IAnalisys {
  id: number;
  analisysNm: string;
  analisysDs: string;
  scenarios: IScenario[];
}

export interface IScenario {
  id: number;
  scenarioDs: string;
  scenarioNm: string;
  totalArea: number
  slotArea: number
  decorationArea: number
  protectedArea: number
  streetArea: number
  slots: number
  pricing?: Pricing
}

interface Pricing {
  squareAmount: number
  fee: number
  feeModel: string
  installments: string
  startAmount: number
  feeIndex: string
}

export interface IApi {
  listAnalisys(props: {
    query: Partial<IAnalisys>;
    pagination: number;
    limit: number;
  }): Promise<PaginationSearch<IAnalisys>>;

  createAnalisys(props: {
    analisysDs: string;
    analisysNm: string;
  }): Promise<IAnalisys>;

  getAnalisys(id: number): Promise<IAnalisys>;
}
export interface PaginationSearch<T> {
  result: T[];
  total: number;
  hasMore: boolean;
}