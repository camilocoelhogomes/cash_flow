import {NotFoundError} from '../../Model/Errors/Errors';
import {
  AnalisysRepository,
  analisyRepository,
} from '../../Model/Repositories/AnalisysRepository';

export class GetAnalisys {
  constructor(
    private readonly analisysRepository: AnalisysRepository = analisyRepository
  ) {}

  async getAnalisys(id: number) {
    const result = await this.analisysRepository.get(id);
    if (!result) {
      throw new NotFoundError('Analise não encontrada');
    }
    return result;
  }
}
