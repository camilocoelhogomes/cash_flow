import {ValidationError} from '../../Model/Errors/Errors';
import {AreaRepository} from '../../Model/Repositories/AreaRepository';
import {IAreas} from '../../utils/Common/Interfaces/IAreas';

export class AreaController {
  constructor(private readonly areaRepo: AreaRepository) {}

  upInsert(area: IAreas): Promise<IAreas> {
    const {decorationArea, lotArea, protectedArea, streetArea, totalArea} =
      area;

    if (totalArea < decorationArea + lotArea + protectedArea + streetArea) {
      throw new ValidationError('Somatório de áreas maior que área total');
    }

    return this.areaRepo.upInsert(area);
  }

  getById(id: number): Promise<IAreas> {
    return this.areaRepo.getById(id);
  }
}
