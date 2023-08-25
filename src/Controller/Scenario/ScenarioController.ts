import {ValidationError} from '../../Model/Errors/Errors';
import {scenarioRepository} from '../../Model/Repositories/ScenarioRepository';
import {
  PaginationSearch,
  QuerySearch,
  Saved,
} from '../../utils/Common/Interfaces';
import {
  IGetScenarioById,
  IScenario,
} from '../../utils/Common/Interfaces/IScenario';

export class ScenarioController {
  constructor(private readonly scenarioRepo = scenarioRepository) {}

  async createScenario(scenario: IScenario): Promise<Saved<IScenario>> {
    const result = await this.scenarioRepo.createScneario(scenario);
    return result;
  }

  async list(
    search: QuerySearch<IScenario>
  ): Promise<PaginationSearch<IScenario>> {
    if (!search.query.projectId) {
      throw new ValidationError('Id de projeto obrigatório');
    }
    const result = await this.scenarioRepo.listScenarios(
      search.query.projectId,
      search
    );
    return result;
  }

  async getById(id: number): Promise<IGetScenarioById> {
    return this.scenarioRepo.getById(id);
  }
}

export const scenarioController = new ScenarioController();
