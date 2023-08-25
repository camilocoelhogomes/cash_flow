import {Saved} from '../Interfaces';
import {IScenario} from './IScenario';

export interface IProject {
  projectDs: string;
  projectNm: string;
}
export interface ICreateProject extends IProject {
  totalArea: number;
  decorationArea: number;
  protectedArea: number;
  streetArea: number;
  totalSlots: number;
}

export interface IGetProjectById extends Saved<IProject> {
  scenarios: Saved<IScenario>[];
}
