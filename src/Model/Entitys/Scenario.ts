import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {CashFlow} from './CashFlow';
import {Project} from './Project';

@Entity({name: 'scenario'})
export class Scenario {
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
}
