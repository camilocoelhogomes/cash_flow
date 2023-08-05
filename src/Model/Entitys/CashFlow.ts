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

  /**
   * Indica se o movimento é de entrada ou saida
   */
  @Column({name: 'cash_movement_tp'})
  cashMovementTp: string;

  /**
   * Série temporal de movimentos
   */
  @OneToMany(() => CashMovement, cashMovement => cashMovement.cashFlow)
  cashMovements: CashMovement[];

  /**
   * Scenário que pertence
   */
  @ManyToOne(() => Scenario, scenario => scenario.cashFlows)
  scenario: Scenario;

  /**
   * Indica o tipo de cash Flow, para saber qual padrão de curva
   * foi utilizado para calcular
   */
  @Column({name: 'cash_flow_tp'})
  cashFlowTp: string;

  /**
   * Descrição do cashFlow, fornecida pelo usuário
   */
  @Column({name: 'cash_flow_ds'})
  cashFlowDs: string;

  /**
   * Nome do cashFlow, fornecido pelo usuário
   */
  @Column({name: 'cash_flow_nm'})
  cashFlowNm: string;
}
