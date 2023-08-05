import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Scenario} from './Scenario';

@Entity({name: 'analisys'})
export class Analisys {
  @PrimaryGeneratedColumn({name: 'id', type: 'int8'})
  id: number;

  @OneToMany(() => Scenario, scenario => scenario.analisys)
  scenarios: Scenario[];

  @Column()
  analisysDs: string;

  @Column()
  analisysNm: string;
}
