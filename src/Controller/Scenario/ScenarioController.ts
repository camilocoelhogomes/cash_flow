import {ValidationError} from '../../Model/Errors/Errors';
import {AreaRepository} from '../../Model/Repositories/AreaRepository';
import {PricingRepository} from '../../Model/Repositories/PricingRepository';
import {ScenarioRepository} from '../../Model/Repositories/ScenarioRepository';
import {
  PaginationSearch,
  QuerySearch,
  Saved,
} from '../../utils/Common/Interfaces';
import {
  ICreateScenario,
  IGetScenarioById,
  IScenario,
} from '../../utils/Common/Interfaces/IScenario';

export class ScenarioController {
  constructor(
    private readonly scenarioRepo: ScenarioRepository,
    private readonly areaRepo: AreaRepository,
    private readonly pricingRepo: PricingRepository
  ) {}

  async createScenario(scenario: ICreateScenario): Promise<Saved<IScenario>> {
    const result = await this.scenarioRepo.createScneario(scenario);
    await this.areaRepo.upInsert({
      ...scenario,
      scenarioId: result.id,
    });
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

  async update(scenario: Saved<IScenario>): Promise<void> {
    return this.scenarioRepo.updateScneario(scenario);
  }
}
