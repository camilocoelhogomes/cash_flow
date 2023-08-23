import {Project} from '../../Model/Entitys/Project';
import {NotFoundError} from '../../Model/Errors/Errors';
import {
  ProjectRepository,
  projectRepository,
} from '../../Model/Repositories/ProjectRepository';
import {
  ScenarioRepository,
  scenarioRepository,
} from '../../Model/Repositories/ScenarioRepository';
import {
  ICreateProject,
  PaginationSearch,
  QuerySearch,
  Saved,
} from '../../utils/Common/Interfaces';

export class ProjectController {
  constructor(
    private readonly projectRepo: ProjectRepository = projectRepository,
    private readonly scenarioRepo: ScenarioRepository = scenarioRepository
  ) {}

  async create(
    project: Partial<ICreateProject>
  ): Promise<Saved<ICreateProject>> {
    const newProject = await this.projectRepo.create(project);
    const newScenario = await this.scenarioRepo.createScneario({
      scenarioDs: newProject.projectDs,
      scenarioNm: newProject.projectNm,
      decorationArea: project.decorationArea,
      protectedArea: project.protectedArea,
      streetArea: project.streetArea,
      totalArea: project.totalArea,
      totalSlots: project.totalSlots,
      project: newProject,
    });
    return {
      decorationArea: newScenario.decorationArea,
      id: newProject.id,
      projectDs: 'BASE',
      projectNm: 'BASE',
      protectedArea: newScenario.protectedArea,
      totalSlots: newScenario.totalSlots,
      streetArea: newScenario.streetArea,
      totalArea: newScenario.totalArea,
    };
  }

  async list(
    query: QuerySearch<Project>
  ): Promise<PaginationSearch<Saved<Project>>> {
    return this.projectRepo.list(query.query, query.pagination, query.limit);
  }

  async get(id: number): Promise<Project> {
    const result = await this.projectRepo.get(id);
    if (!result) {
      throw new NotFoundError('Projeto não encontrado');
    }
    return result;
  }
}

export const projectController = new ProjectController();
