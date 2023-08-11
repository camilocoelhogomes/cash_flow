import {NotFoundError} from '../../Model/Errors/Errors';
import {
  AnalisysRepository,
  analisyRepository,
} from '../../Model/Repositories/AnalisysRepository';
import {IAnalisys} from '../../utils/Common/Interfaces';

export class GetAnalisys {
  constructor(
    private readonly analisysRepository: AnalisysRepository = analisyRepository
  ) {}

  async getAnalisys(id: number): Promise<IAnalisys> {
    const result = await this.analisysRepository.get(id);
    if (!result) {
      throw new NotFoundError('Analise não encontrada');
    }
    return result;
  }
}

export const getAnalisys = new GetAnalisys();
