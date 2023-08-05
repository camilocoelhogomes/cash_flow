import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {CashFlow} from './CashFlow';

@Entity({name: 'cash_movment'})
export class CashMovement {
  @PrimaryGeneratedColumn({name: 'id', type: 'int8'})
  id: number;

  @Column()
  date: Date;

  @Column()
  value: number;

  @ManyToOne(() => CashFlow, cashFlow => cashFlow.cashMovements)
  cashFlow: CashFlow;
}
