import {DataSource} from 'typeorm';
import {Analisys} from '../Entitys/Analisys';
import {PaginationSearch} from '../Constants/PaginationSearch';
import {dataSourceManager} from '../../utils/dataSourceManager';

export class AnalisysRepository {
  private readonly analisysRepository;

  constructor(dataSource: DataSource = dataSourceManager.getDataSource()) {
    this.analisysRepository = dataSource.getRepository(Analisys);
  }

  async create(props: {
    analisysDs: string;
    analisysNm: string;
  }): Promise<Analisys> {
    const analisys = this.analisysRepository.create();
    analisys.analisysDs = props.analisysDs;
    analisys.analisysNm = props.analisysNm;
    return this.analisysRepository.save(analisys);
  }

  async list(
    query: Partial<Analisys>,
    pagination: number,
    limit: number
  ): Promise<PaginationSearch<Analisys>> {
    console.log({query, pagination, limit});
    const [result, total] = await this.analisysRepository.findAndCount({
      where: {
        analisysDs: query.analisysDs,
        analisysNm: query.analisysNm,
      },
      take: limit,
      skip: limit * pagination,
    });

    return {
      result,
      total,
      hasMore: pagination * (limit - 1) + result.length < total,
    };
  }

  async update(analisys: Analisys): Promise<void> {
    await this.analisysRepository.save(analisys);
  }

  async get(id: number): Promise<Analisys> {
    return this.analisysRepository.findOneBy({id});
  }
}

export const analisyRepository = new AnalisysRepository();
