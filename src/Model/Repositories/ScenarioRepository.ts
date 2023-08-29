import {DataSource} from 'typeorm';
import {dataSourceManager} from '../../utils/config/dataSourceManager';
import {Scenario} from '../Entitys/Scenario';
import {
  PaginationSearch,
  QuerySearch,
  Saved,
} from '../../utils/Common/Interfaces';
import {
  IGetScenarioById,
  IScenario,
} from '../../utils/Common/Interfaces/IScenario';

export class ScenarioRepository {
  private readonly repository;

  constructor(dataSource: DataSource = dataSourceManager.getDataSource()) {
    this.repository = dataSource.getRepository(Scenario);
  }

  async updateScneario(scenario: Saved<IScenario>): Promise<void> {
    const newScenario = this.repository.create();
    newScenario.scenarioDs = scenario.scenarioDs;
    newScenario.scenarioNm = scenario.scenarioNm;
    newScenario.id = scenario.id;
    await this.repository.save(newScenario);
  }

  async createScneario(scenario: IScenario): Promise<Saved<IScenario>> {
    const newScenario = this.repository.create();
    newScenario.scenarioDs = scenario.scenarioDs;
    newScenario.scenarioNm = scenario.scenarioNm;
    newScenario.projectId = scenario.projectId;
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

  async getById(id: number): Promise<Scenario> {
    const result = await this.repository.findOne({
      where: {
        id,
      },
    });
    return result;
  }
}

export const scenarioRepository = new ScenarioRepository();
