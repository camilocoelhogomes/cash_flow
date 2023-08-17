import {DataSource} from 'typeorm';
import {dataSourceManager} from '../../utils/config/dataSourceManager';
import {Scenario} from '../Entitys/Scenario';
import {PaginationSearch, QuerySearch} from '../../utils/Common/Interfaces';

export class ScenarioRepository {
  private readonly repository;

  constructor(dataSource: DataSource = dataSourceManager.getDataSource()) {
    this.repository = dataSource.getRepository(Scenario);
  }

  async createScneario(scenario: Partial<Scenario>): Promise<Scenario> {
    const newScenario = this.repository.create();
    newScenario.decorationArea = scenario.decorationArea;
    newScenario.protectedArea = scenario.protectedArea;
    newScenario.scenarioDs = scenario.scenarioDs;
    newScenario.scenarioNm = scenario.scenarioNm;
    newScenario.totalSlots = scenario.totalSlots;
    newScenario.squareValue = scenario.squareValue;
    newScenario.streetArea = scenario.streetArea;
    newScenario.totalArea = scenario.totalArea;
    newScenario.project = scenario.project;
    const result = await this.repository.save(newScenario);
    return result;
  }

  async listScenarios(
    projectId: number,
    querySearch: QuerySearch<Scenario>
  ): Promise<PaginationSearch<Scenario>> {
    const {limit, pagination} = querySearch;
    const [result, total] = await this.repository.findAndCount({
      where: {
        project: {
          id: projectId,
        },
      },
      loadEagerRelations: false,
      take: limit,
      skip: limit * (pagination - 1 < 0 ? 0 : pagination - 1),
    });
    return {
      result,
      total,
      hasMore: pagination * (limit - 1) + result.length < total,
    };
  }
}

export const scenarioRepository = new ScenarioRepository();
