interface BasicData {
  id: number;
}

export interface Project extends BasicData {
  projectDs: string;
  projectNm: string;
  scenarios: Scenario[];
}

export interface Scenario extends BasicData {
  scenarioDs: string;
  scenarioNm: string;
  pricing?: Pricing;
  areas?: Areas
  cashFlows?: CashFlow[]
}

export interface Pricing {
  squareAmount: number;
  fee: number;
  feeModel: string;
  installments: number;
  startAmount: number;
  feeIndex: string;
}
export interface Areas {
  totalArea: number;
  decorationArea: number;
  protectedArea: number;
  streetArea: number;
  totalSlots: number
}

export interface CashFlow { }
