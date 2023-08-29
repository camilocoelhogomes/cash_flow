import {DataSource} from 'typeorm';
import {dataSourceManager} from '../../utils/config/dataSourceManager';
import {Project} from '../Entitys/Project';
import {PaginationSearch, Saved} from '../../utils/Common/Interfaces';
import {IProject} from '../../utils/Common/Interfaces/IProject';
import {Scenario} from '../Entitys/Scenario';

export class ProjectRepository {
  private readonly projectRepository;

  constructor(dataSource: DataSource = dataSourceManager.getDataSource()) {
    this.projectRepository = dataSource.getRepository(Project);
  }

  async create(props: IProject): Promise<Saved<IProject>> {
    const project = this.projectRepository.create();
    project.projectDs = props.projectDs;
    project.projectNm = props.projectNm;

    const result = await this.projectRepository.save(project);

    return result;
  }

  async list(
    query: Partial<Project>,
    pagination: number,
    limit: number
  ): Promise<PaginationSearch<Project>> {
    const [result, total] = await this.projectRepository.findAndCount({
      where: {
        projectDs: query.projectDs,
        projectNm: query.projectNm,
      },
      loadEagerRelations: false,
      take: limit,
      skip: limit * (pagination - 1 < 0 ? 0 : pagination - 1),
    });
    return {
      result,
      total,
      hasMore: pagination * (limit - 1) + result.length < total,
    };
  }

  async update(project: Saved<IProject>): Promise<void> {
    const updatedProject = this.projectRepository.create();
    updatedProject.id = project.id;
    updatedProject.projectDs = project.projectDs;
    updatedProject.projectNm = project.projectNm;
    await this.projectRepository.save(updatedProject);
  }

  async get(id: number): Promise<Project> {
    return this.projectRepository.findOne({
      where: {id},
      relations: {
        scenarios: true,
      },
    });
  }
}

export const projectRepository = new ProjectRepository();
