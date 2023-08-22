interface BasicData { id: number }

export interface Project extends BasicData {
  projectDs: string;
  projectNm: string;
  scenarios: Scenario[]
}

export interface Scenario extends BasicData {
  scenarioDs: string;
  scenarioNm: string;
  totalArea: number;
  decorationArea: number;
  protectedArea: number;
  streetArea: number;
  totalSlots: number;
  pricing?: Pricing;
}

export interface Pricing {
  squareAmount: number;
  fee: number;
  feeModel: string;
  installments: number;
  startAmount: number;
  feeIndex: string;
}
