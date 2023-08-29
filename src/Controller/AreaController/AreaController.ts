import {
  AreaRepository,
  areaRepository,
} from '../../Model/Repositories/AreaRepository';
import {IAreas} from '../../utils/Common/Interfaces/IAreas';

export class AreaController {
  constructor(private readonly areaRepo: AreaRepository = areaRepository) {}

  upInsert(pricing: IAreas): Promise<IAreas> {
    return this.areaRepo.upInsert(pricing);
  }
}

export const areaController = new AreaController();
