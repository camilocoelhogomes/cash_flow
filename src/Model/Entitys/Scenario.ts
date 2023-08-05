import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {CashFlow} from './CashFlow';
import {Analisys} from './Analisys';

@Entity({name: 'scenario'})
export class Scenario {
  @PrimaryGeneratedColumn({name: 'id', type: 'int8'})
  id: number;

  @OneToMany(() => CashFlow, cashFlow => cashFlow.scenario)
  cashFlows: CashFlow[];

  @Column()
  scenarioDs: string;

  @Column()
  scenarioNm: string;

  @ManyToOne(() => Analisys, analisys => analisys.scenarios)
  analisys: Analisys;
}
