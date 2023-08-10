import {PaginationSearch} from '../../Model/Constants/PaginationSearch';
import {Analisys} from '../../Model/Entitys/Analisys';
import {
  AnalisysRepository,
  analisyRepository,
} from '../../Model/Repositories/AnalisysRepository';

class ListAnalisys {
  constructor(
    private readonly repository: AnalisysRepository = analisyRepository
  ) {} //

  async listAnalisys(props: {
    query: Partial<Analisys>;
    pagination: number;
    limit: number;
  }): Promise<PaginationSearch<Analisys>> {
    const {query, pagination, limit} = props;
    return this.repository.list(query, pagination, limit);
  }
}

export const listAnalisys = new ListAnalisys();
