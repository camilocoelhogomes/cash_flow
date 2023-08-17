import {DataSource} from 'typeorm';
import {dataSourceManager} from '../../utils/config/dataSourceManager';
import {Project} from '../Entitys/Project';
import {PaginationSearch} from '../../utils/Common/Interfaces';

export class ProjectRepository {
  private readonly projectRepository;

  constructor(dataSource: DataSource = dataSourceManager.getDataSource()) {
    this.projectRepository = dataSource.getRepository(Project);
  }

  async create(props: Partial<Project>): Promise<Project> {
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

  async update(project: Project): Promise<void> {
    await this.projectRepository.save(project);
  }

  async get(id: number): Promise<Project> {
    return this.projectRepository.findOne({
      where: {id},
      loadEagerRelations: true,
    });
  }
}

export const projectRepository = new ProjectRepository();
