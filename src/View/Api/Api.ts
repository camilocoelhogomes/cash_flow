import {PaginationSearch} from '../../Model/Constants/PaginationSearch';
import {Project} from '../../Model/Entitys/Project';
import {IProject, QuerySearch} from '../../utils/Common/Interfaces';

type IApi = Window & {api: Record<string, Function>};

export class Api {
  constructor() {}

  listProject(props: QuerySearch<Project>): Promise<PaginationSearch<Project>> {
    return (window as unknown as IApi).api.listProject(props);
  }
  createProject(project: Partial<IProject>): Promise<IProject> {
    return (window as unknown as IApi).api.createProject(project);
  }

  getProject(id: number): Promise<Project> {
    return (window as unknown as IApi).api.getProject(id);
  }
}

export const api = new Api();
