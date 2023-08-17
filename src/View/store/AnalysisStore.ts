import { faker } from '@faker-js/faker';
import { create } from 'zustand';
import { generateNumberId } from '../../utils/Functions';
import { Project } from '../../Model/Entitys/Project';
import { Scenario } from '../../Model/Entitys/Scenario';

interface State {
  projects: Project[];
  createAnalysis(value: Project): void;
}

export const useProjectStore = create<State>((set, get) => ({
  projects: listproject(3),
  createAnalysis(value) {
    set({ projects: [...get().projects, value] });
  },
}));

function listproject(length: number): Project[] {
  const array: Project[] = [];
  for (let index = 0;index < length;index++) {
    array.push(getProject());
  }
  return array;
}

function getProject(): Project {
  const id = generateNumberId()
  return {
    id: id,
    projectNm: 'Casa Popular Capelinha',
    projectDs: 'Casa Popular da cidade de Capelinha-MG',
    scenarios: listScenario(2, id),
  };
}


function listScenario(length: number, id: number): Scenario[] {
  const array: Scenario[] = [];
  for (let index = 0;index < length;index++) {
    array.push(getScenario(id));
  }
  return array;
}

function getScenario(id: number): Scenario {
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
    protectedArea: protectedArea,
    totalArea: totalArea,
    decorationArea: decorationArea,
    streetArea: streetArea,
    squareValue: 0,
    cashFlows: [],
    totalSlots: slots,
    scenarioDs: '',
    scenarioNm: 'Base',
    project: {
      id: id,
      projectNm: 'Casa Popular Capelinha',
      projectDs: 'Casa Popular da cidade de Capelinha-MG',
      scenarios: [],
    }
  }
}