import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Scenario} from './Scenario';
import {IGetProjectById} from '../../utils/Common/Interfaces/IProject';

@Entity({name: 'project'})
export class Project implements IGetProjectById {
  @PrimaryGeneratedColumn({name: 'id', type: 'int8'})
  id: number;

  @OneToMany(() => Scenario, scenario => scenario.project)
  scenarios: Scenario[];

  @Column({name: 'Project_ds'})
  projectDs: string;

  @Column({name: 'Project_nm'})
  projectNm: string;
}
