import {Scenario} from '../../Model/Entitys/Scenario';
import {scenarioRepository} from '../../Model/Repositories/ScenarioRepository';
import {
  ListScenariosInput,
  PaginationSearch,
} from '../../utils/Common/Interfaces';

export class ScenarioController {
  constructor(private readonly scenarioRepo = scenarioRepository) {}

  async createScenario(scenario: Partial<Scenario>): Promise<Scenario> {
    const result = await this.scenarioRepo.createScneario(scenario);
    return result;
  }

  async listScenarios(
    input: ListScenariosInput
  ): Promise<PaginationSearch<Scenario>> {
    return this.scenarioRepo.listScenarios(input.projectId, input.query);
  }
}

export const scenarioController = new ScenarioController();
