import { faker } from '@faker-js/faker';
import { create } from 'zustand';
import { generateNumberId, sleep } from '../../utils/Functions';
import { Areas, Project, Scenario } from './tempInterfaces';
import { IGetProjectById, IProject } from '../../utils/Common/Interfaces/IProject';
import { IGetScenarioById, IScenario } from '../../utils/Common/Interfaces/IScenario';
import { Saved } from '../../utils/Common/Interfaces';


interface State {
  projectdb: Project[]
  listProjects(): Saved<IProject>[]
  getProjectById(id: number): IGetProjectById
  getScenarioById(projectId: number, scenarioId: number): Promise<IGetScenarioById>
}

export const useProjectStore = create<State>((set, get) => ({
  projectdb: listproject(3),
  listProjects() {
    return get().projectdb.map(item => {
      return { projectDs: item.projectDs, projectNm: item.projectNm, id: item.id }
    })
  },
  getProjectById(id) {
    const project = get().projectdb.filter(item => item.id === id)[0]
    return {
      id: project.id,
      projectDs: project.projectDs,
      projectNm: project.projectNm,
      scenarios: project.scenarios.map(item => { return { id: item.id, projectId: project.id, scenarioDs: item.scenarioDs, scenarioNm: item.scenarioNm } })
    }
  },
  async getScenarioById(projectId, scenarioId) {
    await sleep(1000)
    const project = get().projectdb.filter(item => item.id === projectId)[0]
    const scenario = project.scenarios.filter(item => item.id === scenarioId)[0]
    return { id: scenario.id, areas: scenario.areas, projectId: scenario.projectId, scenarioDs: scenario.scenarioDs, scenarioNm: scenario.scenarioNm, }
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
    scenarios: listScenario(1, id),
  };
}

function listScenario(length: number, id: number): Scenario[] {
  const array: Scenario[] = [];
  array.push(getScenario(id, 'first'));
  for (let index = 0;index < length;index++) {
    array.push(getScenario(id, 'sub'));
  }
  return array;
}

function getScenario(id: number, type: 'first' | 'sub'): Scenario {
  const newid = generateNumberId()
  return {
    id: newid,
    projectId: id,
    scenarioDs: type === 'first' ? 'Cenário Inicial' : faker.lorem.words(),
    scenarioNm: type === 'first' ? 'Base' : faker.lorem.word(),
    areas: getAreas(newid)
  }
}

function getAreas(scenarioId: number): Areas {
  const totalArea = faker.number.int({ min: 20000, max: 50000 });
  const protectedArea = totalArea / 4;
  const streetArea = totalArea / 10;
  const decorationArea = totalArea / 10;
  const slots = faker.number.int({ min: 20, max: 50 });
  return {
    id: generateNumberId(),
    scenarioId: scenarioId,
    protectedArea: protectedArea,
    totalArea: totalArea,
    decorationArea: decorationArea,
    streetArea: streetArea,
    totalSlots: slots,
  }
}