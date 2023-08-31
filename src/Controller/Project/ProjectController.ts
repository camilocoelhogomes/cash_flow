import {NotFoundError} from '../../Model/Errors/Errors';
import {ProjectRepository} from '../../Model/Repositories/ProjectRepository';
import {ScenarioRepository} from '../../Model/Repositories/ScenarioRepository';
import {
  PaginationSearch,
  QuerySearch,
  Saved,
} from '../../utils/Common/Interfaces';
import {
  ICreateProject,
  IGetProjectById,
  IProject,
} from '../../utils/Common/Interfaces/IProject';
import {AreaRepository} from '../../Model/Repositories/AreaRepository';

export class ProjectController {
  constructor(
    private readonly projectRepo: ProjectRepository,
    private readonly scenarioRepo: ScenarioRepository,
    private readonly areaRepo: AreaRepository
  ) {}

  async create(project: ICreateProject): Promise<Saved<IProject>> {
    const newProject = await this.projectRepo.create(project);
    const newScenario = await this.scenarioRepo.createScneario({
      scenarioDs: 'BASE',
      scenarioNm: 'BASE',
      projectId: newProject.id,
    });
    await this.areaRepo.upInsert({
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
    query: QuerySearch<IProject>
  ): Promise<PaginationSearch<IProject>> {
    return this.projectRepo.list(query.query, query.pagination, query.limit);
  }

  async get(id: number): Promise<IGetProjectById> {
    const result = await this.projectRepo.get(id);
    if (!result) {
      throw new NotFoundError('Projeto não encontrado');
    }
    return result;
  }

  async update(project: Saved<IProject>): Promise<void> {
    await this.projectRepo.update(project);
  }
}
