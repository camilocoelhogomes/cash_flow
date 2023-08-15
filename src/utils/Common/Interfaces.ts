export interface IAnalisys {
  id: number;
  analisysNm: string;
  analisysDs: string;
  totalArea: number;
  protectedArea: number;
  scenarios: IScenario[];
}

export interface IScenario {
  id: number;
  scenarioDs: string;
  scenarioNm: string;
  slotArea: number;
  decorationArea: number;
  streetArea: number;
  slots: number;
  pricing?: Pricing;
}

interface Pricing {
  squareAmount: number;
  scenario: IScenario;
  fee: number;
  feeModel: string;
  installments: string;
  startAmount: number;
  feeIndex: string;
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
