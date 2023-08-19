export interface ICreateProject {
  projectDs: string
  projectNm: string
  totalArea: number
  decorationArea: number
  protectedArea: number
  streetArea: number
  totalSlots: number
}

export interface IGetProject {
  id: number
  projectDs: string
  projectNm: string
  scenarios: IGetScenario[]
}

export interface IGetScenario {
  id: number
  scenarioDs: string
  scenarioNm: string
  totalArea: number
  decorationArea: number
  protectedArea: number
  streetArea: number
  totalSlots: number
  pricing?: IGetPricing
  cashFlows?: IGetCashFlow[]
}

export interface IGetPricing {
  squareAmount: number
  fee: number
  feeModel: string
  installments: number
  startAmount: number
  feeIndex: string
}
export interface IGetCashFlow {
  cash_flow_nm: string
  cash_flow_ds: string
  cash_flow_tp: string
  cashMovements: IGetCashMovement[]
}
export interface IGetCashMovement {
  date: Date
  value: number
}

