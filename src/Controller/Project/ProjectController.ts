import {PaginationSearch} from '../../Model/Constants/PaginationSearch';
import {Project} from '../../Model/Entitys/Project';
import {NotFoundError} from '../../Model/Errors/Errors';
import {
  ProjectRepository,
  projectRepository,
} from '../../Model/Repositories/ProjectRepository';
import {QuerySearch} from '../../utils/Common/Interfaces';

export class ProjectController {
  constructor(
    private readonly repository: ProjectRepository = projectRepository
  ) {}

  async create(project: Partial<Project>): Promise<Project> {
    return this.repository.create(project);
  }

  async list(query: QuerySearch<Project>): Promise<PaginationSearch<Project>> {
    return this.repository.list(query.query, query.pagination, query.limit);
  }

  async get(id: number): Promise<Project> {
    const result = await this.repository.get(id);
    if (!result) {
      throw new NotFoundError('Analise não encontrada');
    }
    return result;
  }
}

export const projectController = new ProjectController();
