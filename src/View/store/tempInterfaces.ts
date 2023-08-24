interface BasicData { id: number }

export interface Project extends BasicData {
  projectDs: string;
  projectNm: string;
  scenarios: Scenario[]
}

export interface Scenario extends BasicData {
  projectId: number
  scenarioDs: string;
  scenarioNm: string;
  pricing?: Pricing;
  areas?: Areas
  cashFlows?: CashFlow[]
}

export interface Pricing extends BasicData {
  scenarioId: number
  squareAmount: number;
  fee: number;
  feeModel: string;
  installments: number;
  startAmount: number;
  feeIndex: string;
}
export interface Areas extends BasicData {
  scenarioId: number
  totalArea: number;
  decorationArea: number;
  protectedArea: number;
  streetArea: number;
  totalSlots: number
}

export interface CashFlow { }
