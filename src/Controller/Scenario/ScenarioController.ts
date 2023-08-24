import {scenarioRepository} from '../../Model/Repositories/ScenarioRepository';
import {IScenario, Saved} from '../../utils/Common/Interfaces';

export class ScenarioController {
  constructor(private readonly scenarioRepo = scenarioRepository) {}

  async createScenario(scenario: IScenario): Promise<Saved<IScenario>> {
    const result = await this.scenarioRepo.createScneario(scenario);
    return result;
  }
}

export const scenarioController = new ScenarioController();
