import {DataSource} from 'typeorm';
import {dataSourceManager} from '../../utils/config/dataSourceManager';
import {Scenario} from '../Entitys/Scenario';

export class ScenarioRepository {
  private readonly repository;

  constructor(dataSource: DataSource = dataSourceManager.getDataSource()) {
    this.repository = dataSource.getRepository(Scenario);
  }

  async createScneario(scenario: Partial<Scenario>): Promise<Scenario> {
    const newScenario = this.repository.create();
    newScenario.decorationArea = scenario.decorationArea;
    newScenario.project.id = scenario.project.id;
    newScenario.protectedArea = scenario.protectedArea;
    newScenario.scenarioDs = scenario.scenarioDs;
    newScenario.scenarioNm = scenario.scenarioNm;
    newScenario.totalSlots = scenario.totalSlots;
    newScenario.squareValue = scenario.squareValue;
    newScenario.streetArea = scenario.streetArea;
    newScenario.totalArea = scenario.totalArea;
    const result = await this.repository.save(newScenario);
    return result;
  }
}

export const scenarioRepository = new ScenarioRepository();
