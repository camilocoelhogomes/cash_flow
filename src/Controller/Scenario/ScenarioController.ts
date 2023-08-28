import {ValidationError} from '../../Model/Errors/Errors';
import {
  AreaRepository,
  areaRepository,
} from '../../Model/Repositories/AreaRepository';
import {
  PricingRepository,
  pricingRepository,
} from '../../Model/Repositories/PricingRepository';
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
  constructor(
    private readonly scenarioRepo = scenarioRepository,
    private readonly areaRepo: AreaRepository = areaRepository,
    private readonly pricingRepo: PricingRepository = pricingRepository
  ) {}

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
    const [scenario, area, pricing] = await Promise.all([
      this.scenarioRepo.getById(id),
      this.areaRepo.getById(id),
      this.pricingRepo.getById(id),
    ]);

    return {
      ...scenario,
      pricing: pricing ?? undefined,
      areas: area,
    };
  }
}

export const scenarioController = new ScenarioController();
