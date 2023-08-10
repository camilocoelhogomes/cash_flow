import {PaginationSearch} from '../../Model/Constants/PaginationSearch';
import {Analisys} from '../../Model/Entitys/Analisys';

class ListAnalisys {
  constructor() {} //  @inject(AnalisysRepository) private readonly repository: AnalisysRepository

  async listAnalisys(
    query: Partial<Analisys>,
    pagination: number,
    limit: number
  ): Promise<PaginationSearch<Analisys>> {
    return {
      hasMore: false,
      result: [
        {
          analisysDs: 'MockAnalisysDs',
          analisysNm: 'MockAnalisysName',
          id: 1,
          scenarios: [],
        },
      ],
      total: 1,
    };
  }
}

const listAnalisys = new ListAnalisys();

export function listAnalisysFactory(): ListAnalisys {
  return listAnalisys;
}
