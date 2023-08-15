import {faker} from '@faker-js/faker';
import {create} from 'zustand';
import {generateNumberId} from '../../utils/Functions';

interface State {
  analyzes: IAnalisys[];
  createAnalysis(value: IAnalisys): void;
}

const data: IAnalisys[] = [
  {
    id: generateNumberId(),
    analisysDs: 'Casa Popular da cidade de Capelinha-MG',
    scenarios: [],
    analisysNm: 'Casa Popular Capelinha',
  },
  {
    id: generateNumberId(),
    analisysDs: 'Casa Luxo da cidade de Capelinha-MG',
    scenarios: [],
    analisysNm: 'Casa Luxo Capelinha',
  },
  {
    id: generateNumberId(),
    analisysDs: 'Condominio da cidade de Capelinha-MG',
    scenarios: [],
    analisysNm: 'Condominio Capelinha',
  },
];

export const useAnalysisStore = create<State>((set, get) => ({
  analyzes: data,
  createAnalysis(value) {
    set({analyzes: [...get().analyzes, value]});
  },
}));

function listAnalisys(length: number): IAnalisys[] {
  const array: IAnalisys[] = [];
  for (let index = 0; index < length; index++) {
    array.push(getAnalysis());
  }
  return array;
}

function getAnalysis(): IAnalisys {
  const totalArea = faker.number.int({min: 20000, max: 50000});
  const protectedArea = totalArea / 4;
  const streetArea = totalArea / 10;
  const decorationArea = totalArea / 10;
  const slots = faker.number.int({min: 20, max: 50});
  const slotArea = parseFloat(
    ((totalArea - protectedArea - streetArea - decorationArea) / slots).toFixed(
      2
    )
  );
  return {
    id: generateNumberId(),
    analisysNm: 'Casa Popular Capelinha',
    analisysDs: 'Casa Popular da cidade de Capelinha-MG',
    scenarios: [],
  };
}
