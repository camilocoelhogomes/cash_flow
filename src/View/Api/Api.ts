import {Project} from '../../Model/Entitys/Project';
import {Scenario} from '../../Model/Entitys/Scenario';
import {
  QuerySearch,
  ICreateProject,
  PaginationSearch,
} from '../../utils/Common/Interfaces';

type IApi = Window & {api: Record<string, Function>};

export class Api {
  constructor() {}

  listProject(props: QuerySearch<Project>): Promise<PaginationSearch<Project>> {
    return (window as unknown as IApi).api.listProject(props);
  }
  createProject(project: Partial<ICreateProject>): Promise<Project> {
    return (window as unknown as IApi).api.createProject(project);
  }

  getProject(id: number): Promise<Project> {
    return (window as unknown as IApi).api.getProject(id);
  }

  createScenario(scenario: Partial<Scenario>): Promise<Scenario> {
    return (window as unknown as IApi).api.createScenario(scenario);
  }
}

export const api = new Api();
