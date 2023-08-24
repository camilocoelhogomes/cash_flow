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
  PaginationSearch,
  QuerySearch,
  Saved,
} from '../../utils/Common/Interfaces';
import {ICreateProject, IProject} from '../../utils/Common/Interfaces/IProject';
import {
  AreaRepository,
  areaRepository,
} from '../../Model/Repositories/AreaRepository';

export class ProjectController {
  constructor(
    private readonly projectRepo: ProjectRepository = projectRepository,
    private readonly scenarioRepo: ScenarioRepository = scenarioRepository,
    private readonly areaRepo: AreaRepository = areaRepository
  ) {}

  async create(project: ICreateProject): Promise<Saved<IProject>> {
    const newProject = await this.projectRepo.create(project);
    const newScenario = await this.scenarioRepo.createScneario({
      scenarioDs: 'BASE',
      scenarioNm: 'BASE',
      projectId: newProject.id,
    });
    await this.areaRepo.createArea({
      decorationArea: project.decorationArea,
      protectedArea: project.protectedArea,
      streetArea: project.streetArea,
      totalArea: project.totalArea,
      totalSlots: project.totalSlots,
      scenarioId: newScenario.id,
    });
    return {
      id: newProject.id,
      projectDs: 'BASE',
      projectNm: 'BASE',
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
