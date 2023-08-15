import { create } from "zustand";
import { IAnalisys } from "../../utils/Common/Interfaces";
import { generateNumberId } from "../../utils/Functions";

interface State {
  analyzes: IAnalisys[]
  createAnalysis(value: IAnalisys): void
}

const data: IAnalisys[] = [
  { id: generateNumberId(), analisysDs: 'Casa Popular da cidade de Capelinha-MG', scenarios: [], analisysNm: 'Casa Popular Capelinha' },
  { id: generateNumberId(), analisysDs: 'Casa Luxo da cidade de Capelinha-MG', scenarios: [], analisysNm: 'Casa Luxo Capelinha' },
  { id: generateNumberId(), analisysDs: 'Condominio da cidade de Capelinha-MG', scenarios: [], analisysNm: 'Condominio Capelinha' },
]

export const useAnalysisStore = create<State>((set, get) => ({
  analyzes: data,
  createAnalysis(value) { set({ analyzes: [...get().analyzes, value] }) },
}))

function getAnalysis(): IAnalisys {
  return {
    id: generateNumberId(),
    analisysNm: 'Casa Popular Capelinha',
    analisysDs: 'Casa Popular da cidade de Capelinha-MG',
    scenarios: [
    ],
  }
}