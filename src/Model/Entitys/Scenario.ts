import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {CashFlow} from './CashFlow';
import {Project} from './Project';
import {IGetScenarioById} from '../../utils/Common/Interfaces/IScenario';
import {IAreas} from '../../utils/Common/Interfaces/IAreas';
import {IPricing} from '../../utils/Common/Interfaces/IPricing';

@Entity({name: 'scenario'})
export class Scenario implements IGetScenarioById {
  @PrimaryGeneratedColumn({name: 'id', type: 'int8'})
  id: number;

  @OneToMany(() => CashFlow, cashFlow => cashFlow.scenario)
  cashFlows: CashFlow[];

  @Column({name: 'scenario_ds'})
  scenarioDs: string;

  @Column({name: 'scenario_nm'})
  scenarioNm: string;

  @Column({name: 'project_id'})
  projectId: number;

  @ManyToOne(() => Project, project => project.id)
  @JoinColumn({name: 'project_id'})
  project: Project;

  areas: IAreas;
  pricing: IPricing;
}
