import { faker } from '@faker-js/faker';
import { create } from 'zustand';
import { generateNumberId } from '../../utils/Functions';
import { Project } from '../../Model/Entitys/Project';
import { Scenario } from '../../Model/Entitys/Scenario';
import { IPricing, IProject, IScenario } from '../../utils/Common/Interfaces';
import { IGetPricing, IGetProject, IGetScenario } from '../../utils/Common/tempInterfaces';

interface State {
  projects: IGetProject[]
  createProject(value: IGetProject): void
  setPricing(projectId: number, scenarioId: number, value: IGetPricing): void
  setAreas(projectId: number, scenarioId: number, value: IGetScenario): void
  createScenario(projectId: number, value: IGetScenario): void
  duplicateScenario(projectId: number, scenarioId: number): void
}

export const useProjectStore = create<State>((set, get) => ({
  projects: listproject(3),
  createProject(value) {
    set({ projects: [...get().projects, value] });
  },
  createScenario(projectId, value) {
    let currentProjects = get().projects
    const index = currentProjects.findIndex(item => item.id === projectId)
    let scenarios = currentProjects[index].scenarios
    scenarios.push(value)
    currentProjects[index].scenarios = scenarios
    set({ projects: currentProjects });
  },
  setPricing(projectId, scenarioId, value) {

  },
  setAreas(projectId, scenarioId, value) {

  },
  duplicateScenario(projectId, scenarioId) {

  },
}));

function listproject(length: number): IGetProject[] {
  const array: IGetProject[] = [];
  for (let index = 0;index < length;index++) {
    array.push(getProject());
  }
  return array;
}

function getProject(): IGetProject {
  const id = generateNumberId()
  return {
    id: id,
    projectNm: 'Project -' + faker.company.name(),
    projectDs: faker.lorem.lines(),
    scenarios: listScenario(1, id),
  };
}

function listScenario(length: number, id: number): IGetScenario[] {
  const array: IGetScenario[] = [];
  array.push(getScenario(id, 'first'));
  for (let index = 0;index < length;index++) {
    array.push(getScenario(id, 'sub'));
  }
  return array;
}

function getScenario(id: number, type: 'first' | 'sub'): IGetScenario {
  const totalArea = faker.number.int({ min: 20000, max: 50000 });
  const protectedArea = totalArea / 4;
  const streetArea = totalArea / 10;
  const decorationArea = totalArea / 10;
  const slots = faker.number.int({ min: 20, max: 50 });
  return {
    id: generateNumberId(),
    protectedArea: protectedArea,
    totalArea: totalArea,
    decorationArea: decorationArea,
    streetArea: streetArea,
    cashFlows: [],
    totalSlots: slots,
    scenarioDs: type === 'first' ? 'Cenário Inicial' : faker.lorem.words(),
    scenarioNm: type === 'first' ? 'Base' : faker.lorem.word(),
  }
}
