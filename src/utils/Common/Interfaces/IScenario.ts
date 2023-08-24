
import { Saved } from "../Interfaces";
import { IAreas } from "./IAreas";
import { IPricing } from "./IPricing";

export interface IScenario {
  projectId: number
  scenarioDs: string
  scenarioNm: string
}

export interface IGetScenarioById extends Saved<IScenario> {
  areas: IAreas
  pricing?: IPricing
  cashFlows?: unknown[]
}

export interface ICashFlow {
  id: number
  scenarioId: number
}