import {Scenario} from '../../Model/Entitys/Scenario';
import {
  QuerySearch,
  PaginationSearch,
  Saved,
} from '../../utils/Common/Interfaces';
import {
  ICreateProject,
  IGetProjectById,
  IProject,
} from '../../utils/Common/Interfaces/IProject';
import {IScenario} from '../../utils/Common/Interfaces/IScenario';

type IApi = Window & {api: Record<string, Function>};

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

  createScenario(scenario: IScenario): Promise<Saved<IScenario>> {
    return (window as unknown as IApi).api.createScenario(scenario);
  }
}

export const api = new Api();
