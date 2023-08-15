import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Scenario} from './Scenario';

@Entity({name: 'project'})
export class Project {
  @PrimaryGeneratedColumn({name: 'id', type: 'int8'})
  id: number;

  @OneToMany(() => Scenario, scenario => scenario.project)
  scenarios: Scenario[];

  @Column({name: 'Project_ds'})
  projectDs: string;

  @Column({name: 'Project_nm'})
  projectNm: string;

  @Column({name: 'total_area'})
  totalArea: number;

  @Column({name: 'protected_area'})
  protectedArea: number;
}
