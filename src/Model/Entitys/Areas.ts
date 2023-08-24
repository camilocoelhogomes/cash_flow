import {Column, Entity, JoinColumn, OneToOne, PrimaryColumn} from 'typeorm';
import {IAreas} from '../../utils/Common/Interfaces/IAreas';
import {Scenario} from './Scenario';

@Entity({name: 'areas'})
export class Areas implements IAreas {
  @PrimaryColumn({name: 'scenario_id'})
  scenarioId: number;

  @Column({name: 'total_area'})
  totalArea: number;

  @Column({name: 'decoration_area'})
  decorationArea: number;

  @Column({name: 'protected_area'})
  protectedArea: number;

  @Column({name: 'street_area'})
  streetArea: number;

  @Column({name: 'total_slots'})
  totalSlots: number;

  @OneToOne(() => Scenario)
  @JoinColumn({name: 'scenario_id'})
  scenario: Scenario;
}
