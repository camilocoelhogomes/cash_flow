import {inject, singleton} from 'tsyringe';
import {Analisys} from '../../Model/Entitys/Analisys';
import {AnalisysRepository} from '../../Model/Repositories/AnalisysRepository';

@singleton()
export class CreateAnalisys {
  constructor(
    @inject(AnalisysRepository) private readonly repository: AnalisysRepository
  ) {}

  async createAnalisys(props: {
    analisysDs: string;
    analisysNm: string;
  }): Promise<Analisys> {
    return await this.repository.create(props);
  }
}
