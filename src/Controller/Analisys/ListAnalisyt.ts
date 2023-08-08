import {inject, singleton} from 'tsyringe';
import {PaginationSearch} from '../../Model/Constants/PaginationSearch';
import {Analisys} from '../../Model/Entitys/Analisys';
import {AnalisysRepository} from '../../Model/Repositories/AnalisysRepository';

@singleton()
export class ListAnalisys {
  constructor(
    @inject(AnalisysRepository) private readonly repository: AnalisysRepository
  ) {}

  listAnalisys(
    query: Partial<Analisys>,
    pagination: number,
    limit: number
  ): Promise<PaginationSearch<Analisys>> {
    return this.repository.list(query, pagination, limit);
  }
}
