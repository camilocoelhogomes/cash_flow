import {IAnalisys, IApi, PaginationSearch} from '../../utils/Common/Interfaces';

type IWindow = Window & {
  api: IApi;
};

export class Api implements IApi {
  constructor() {}

  listAnalisys(props: {
    query: Partial<IAnalisys>;
    pagination: number;
    limit: number;
  }): Promise<PaginationSearch<IAnalisys>> {
    return (window as unknown as IWindow).api.listAnalisys(props);
  }
  createAnalisys(props: {
    analisysDs: string;
    analisysNm: string;
  }): Promise<IAnalisys> {
    return (window as unknown as IWindow).api.createAnalisys(props);
  }
}

export const api = new Api();