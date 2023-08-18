import {Scenario} from '../../Model/Entitys/Scenario';
import {scenarioRepository} from '../../Model/Repositories/ScenarioRepository';

export class ScenarioController {
  constructor(private readonly scenarioRepo = scenarioRepository) {}

  async createScenario(scenario: Partial<Scenario>): Promise<Scenario> {
    const result = await this.scenarioRepo.createScneario(scenario);
    return result;
  }
}

export const scenarioController = new ScenarioController();
