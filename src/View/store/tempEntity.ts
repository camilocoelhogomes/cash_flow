export interface IAnalisys {
  id: number;
  title: string;
  description: string;
  totalArea: number;
  decorationArea: number;
  protectedArea: number;
  streetArea: number;
  slots: number;
  pricing?: Pricing;
  salesCurve?: Sale[];
  landCost?: LandCost;
  workCost?: WorkCost;
  businessExpenses?: BusinessExpenses;
  administrativeExpenses?: AdministrativeExpenses;
}

interface Pricing {
  squareAmount: number;
  fee: number;
  feeModel: string;
  installments: string;
  startAmount: number;
  feeIndex: string;
}

interface Sale {
  id: number;
  value: number;
  type: 'percentage' | 'flat';
}

interface LandCost {}
interface WorkCost {}
interface BusinessExpenses {}
interface AdministrativeExpenses {}
