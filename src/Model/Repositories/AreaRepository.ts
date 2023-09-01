import {DataSource} from 'typeorm';
import {Area} from '../Entitys/Area';
import {IAreas} from '../../utils/Common/Interfaces/IAreas';

export class AreaRepository {
  private readonly repository;

  constructor(dataSource: DataSource) {
    this.repository = dataSource.getRepository(Area);
  }

  async upInsert(area: IAreas): Promise<IAreas> {
    const newArea = this.repository.create();
    newArea.decorationArea = area.decorationArea;
    newArea.protectedArea = area.protectedArea;
    newArea.scenarioId = area.scenarioId;
    newArea.streetArea = area.streetArea;
    newArea.totalArea = area.totalArea;
    newArea.totalSlots = area.totalSlots;
    newArea.lotArea = area.lotArea;
    const result = await this.repository.save(newArea);
    return result;
  }

  async getById(id: number) {
    const result = await this.repository.findOne({
      where: {
        scenarioId: id,
      },
    });
    return result;
  }
}
