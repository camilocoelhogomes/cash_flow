export interface IScenario {
  id: number;

  scenarioDs: string;

  scenarioNm: string;

  analisys: IAnalisys;
}

export interface IAnalisys {
  id: number;
  scenarios: IScenario[];

  analisysDs: string;

  analisysNm: string;
}

export interface PaginationSearch<T> {
  result: T[];
  total: number;
  hasMore: boolean;
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
