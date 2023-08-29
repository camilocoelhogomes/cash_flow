import {
  QuerySearch,
  PaginationSearch,
  Saved,
} from '../../utils/Common/Interfaces';
import {IPricing} from '../../utils/Common/Interfaces/IPricing';
import {
  ICreateProject,
  IGetProjectById,
  IProject,
} from '../../utils/Common/Interfaces/IProject';
import {
  IGetScenarioById,
  IScenario,
} from '../../utils/Common/Interfaces/IScenario';

type IApi = Window & {api: Api};

export class Api {
  constructor() {}

  listProject(
    query: QuerySearch<IProject>
  ): Promise<PaginationSearch<IProject>> {
    return (window as unknown as IApi).api.listProject(query);
  }
  createProject(project: ICreateProject): Promise<Saved<IProject>> {
    return (window as unknown as IApi).api.createProject(project);
  }

  getProject(id: number): Promise<IGetProjectById> {
    return (window as unknown as IApi).api.getProject(id);
  }

  async updateProject(project: Saved<IProject>): Promise<void> {
    await (window as unknown as IApi).api.updateProject(project);
  }

  createScenario(scenario: IScenario): Promise<Saved<IScenario>> {
    return (window as unknown as IApi).api.createScenario(scenario);
  }
  listScenario(
    search: QuerySearch<IScenario>
  ): Promise<PaginationSearch<IScenario>> {
    return (window as unknown as IApi).api.listScenario(search);
  }

  getScenario(id: number): Promise<IGetScenarioById> {
    return (window as unknown as IApi).api.getScenario(id);
  }

  createPricing(pricing: IPricing): Promise<IPricing> {
    return (window as unknown as IApi).api.createPricing(pricing);
  }
}

export const api = new Api();
