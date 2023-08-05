import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CashMovementTp } from "../Constants/CashMovementTp";
import { CashMovement } from "./CashMovement";
import { Scenario } from "./Scenario";
import { CashFlowTp } from "../Constants/CashFlowTp";

@Entity({name: 'cash_flow'})
export class CashFlow{
  @PrimaryGeneratedColumn({name: 'id', type:'int8'})
  id: number;

  @Column()
  cashMovementTp: CashMovementTp;

  @OneToMany(() => CashMovement, (cashMovement) => cashMovement.cashFlow)
  cashMovements: CashMovement[]

  @ManyToOne(() => Scenario, (scenario) => scenario.cashFlows)
  scenario: Scenario

  @Column()
  cashFlowTp: CashFlowTp

  @Column()
  cashFlowDs: string

  @Column()
  cashFlowNm: string
}