import {OneToOne, JoinColumn, PrimaryColumn, Column, Entity} from 'typeorm';
import {IPricing} from '../../utils/Common/Interfaces/IPricing';
import {Scenario} from './Scenario';

@Entity({name: 'pricing'})
export class Pricing implements IPricing {
  @PrimaryColumn({name: 'scenario_id'})
  scenarioId: number;

  @Column({name: 'square_amount'})
  squareAmount: number;

  @Column({name: 'fee'})
  fee: number;

  @Column({name: 'fee_model'})
  feeModel: string;

  @Column({name: 'installments'})
  installments: number;

  @Column({name: 'entry'})
  startAmount: number;

  @Column({name: 'inflation_index'})
  feeIndex: string;

  @OneToOne(() => Scenario)
  @JoinColumn({name: 'scenario_id'})
  scenario: Scenario;
}
