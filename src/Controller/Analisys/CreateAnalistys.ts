import {Analisys} from '../../Model/Entitys/Analisys';
import {
  AnalisysRepository,
  analisyRepository,
} from '../../Model/Repositories/AnalisysRepository';

export class CreateAnalisys {
  constructor(
    private readonly repository: AnalisysRepository = analisyRepository
  ) {}

  async createAnalisys(props: {
    analisysDs: string;
    analisysNm: string;
  }): Promise<Analisys> {
    return await this.repository.create(props);
  }
}

export const createAnalisys = new CreateAnalisys();
