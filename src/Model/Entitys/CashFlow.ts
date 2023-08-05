import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {CashMovement} from './CashMovement';
import {Scenario} from './Scenario';

@Entity({name: 'cash_flow'})
export class CashFlow {
  @PrimaryGeneratedColumn({name: 'id', type: 'int8'})
  id: number;

  @Column()
  cashMovementTp: string;

  @OneToMany(() => CashMovement, cashMovement => cashMovement.cashFlow)
  cashMovements: CashMovement[];

  @ManyToOne(() => Scenario, scenario => scenario.cashFlows)
  scenario: Scenario;

  @Column()
  cashFlowTp: string;

  @Column()
  cashFlowDs: string;

  @Column()
  cashFlowNm: string;
}
