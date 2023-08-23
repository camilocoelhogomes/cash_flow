import { faker } from '@faker-js/faker';
import { create } from 'zustand';
import { generateNumberId } from '../../utils/Functions';
import { Project, Scenario } from './tempInterfaces';
import { IGetProjectById, IListProject, IScenario } from '../../utils/Common/Interfaces';


interface State {
  projectdb: Project[]
  listProjects(): IListProject[]
  getProjectById(id: number): IGetProjectById
  updateScenario(projectId: number, scenarioId: number, value: Partial<IScenario>): void
}

export const useProjectStore = create<State>((set, get) => ({
  projectdb: listproject(3),
  listProjects() {
    return get().projectdb.map(item => {
      return { projectDs: item.projectDs, projectNm: item.projectNm, id: item.id }
    })
  },
  getProjectById(id) {
    return get().projectdb.filter(item => item.id === id)[0]
  },
  updateScenario(projectId, scenarioId, value) {

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
    projectNm: 'Project -' + faker.company.name(),
    projectDs: faker.lorem.lines(),
    scenarios: listScenario(0, id),
  };
}

function listScenario(length: number, id: number): IScenario[] {
  const array: Scenario[] = [];
  array.push(getScenario(id, 'first'));
  for (let index = 0;index < length;index++) {
    array.push(getScenario(id, 'sub'));
  }
  return array;
}

function getScenario(id: number, type: 'first' | 'sub'): IScenario {
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
    totalSlots: slots,
    scenarioDs: type === 'first' ? 'Cenário Inicial' : faker.lorem.words(),
    scenarioNm: type === 'first' ? 'Base' : faker.lorem.word(),
  }
}
