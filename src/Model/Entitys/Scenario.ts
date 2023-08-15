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

  @Column({name: 'scenario_ds'})
  scenarioDs: string;

  @Column({name: 'scenario_nm'})
  scenarioNm: string;

  @ManyToOne(() => Analisys, analisys => analisys.scenarios)
  analisys: Analisys;

  @Column({name: 'slot_area'})
  slotArea: number;

  @Column({name: 'decoration_area'})
  decorationArea: number;

  @Column({name: 'street_area'})
  streetArea: number;

  @Column({name: 'square_value'})
  squareValue: number;
}
