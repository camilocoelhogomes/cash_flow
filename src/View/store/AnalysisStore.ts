import { faker } from '@faker-js/faker';
import { create } from 'zustand';
import { generateNumberId } from '../../utils/Functions';
import { Project } from '../../Model/Entitys/Project';

interface State {
  projects: Project[];
  createAnalysis(value: Project): void;
}

export const useAnalysisStore = create<State>((set, get) => ({
  projects: [],
  createAnalysis(value) {
    set({ projects: [...get().projects, value] });
  },
}));

function listproject(length: number): Project[] {
  const array: Project[] = [];
  for (let index = 0;index < length;index++) {
    array.push(getAnalysis());
  }
  return array;
}

function getAnalysis(): Project {
  const totalArea = faker.number.int({ min: 20000, max: 50000 });
  const protectedArea = totalArea / 4;
  const streetArea = totalArea / 10;
  const decorationArea = totalArea / 10;
  const slots = faker.number.int({ min: 20, max: 50 });
  const slotArea = parseFloat(
    ((totalArea - protectedArea - streetArea - decorationArea) / slots).toFixed(
      2
    )
  );
  return {
    id: generateNumberId(),
    projectNm: 'Casa Popular Capelinha',
    projectDs: 'Casa Popular da cidade de Capelinha-MG',
    scenarios: [],
    protectedArea: protectedArea,
    totalArea: totalArea

  };
}
