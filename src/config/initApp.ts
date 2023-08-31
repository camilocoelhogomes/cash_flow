import {ipcMain} from 'electron';
import {ProjectController} from '../Controller/Project/ProjectController';
import {ScenarioController} from '../Controller/Scenario/ScenarioController';
import {AreaController} from '../Controller/AreaController/AreaController';
import {DataSourceManager} from './dataSourceManager';
import {PricingRepository} from '../Model/Repositories/PricingRepository';
import {AreaRepository} from '../Model/Repositories/AreaRepository';
import {ProjectRepository} from '../Model/Repositories/ProjectRepository';
import {ScenarioRepository} from '../Model/Repositories/ScenarioRepository';
import {PricingController} from '../Controller/Pricing/PrincingController';

export async function initApp() {
  const dataSourceManager = new DataSourceManager();
  await dataSourceManager.initDb();
  const db = dataSourceManager.getDataSource();
  const pricingRepository = new PricingRepository(db);
  const areaRepository = new AreaRepository(db);
  const projectRepository = new ProjectRepository(db);
  const scenarioRepository = new ScenarioRepository(db);
  const pricingController = new PricingController(pricingRepository);
  const areaController = new AreaController(areaRepository);
  const projectController = new ProjectController(
    projectRepository,
    scenarioRepository,
    areaRepository
  );
  const scenarioController = new ScenarioController(
    scenarioRepository,
    areaRepository,
    pricingRepository
  );
  ipcMain.handle('listProject', async (event, ...args) =>
    projectController.list(args[0])
  );

  ipcMain.handle('createProject', async (event, ...args) =>
    projectController.create(args[0])
  );

  ipcMain.handle('getProject', async (event, ...args) =>
    projectController.get(args[0])
  );

  ipcMain.handle('updateProject', async (event, ...args) =>
    projectController.update(args[0])
  );

  ipcMain.handle('createScenario', async (event, ...args) =>
    scenarioController.createScenario(args[0])
  );

  ipcMain.handle('listScenario', async (event, ...args) =>
    scenarioController.list(args[0])
  );

  ipcMain.handle('updateScenario', async (event, ...args) =>
    scenarioController.update(args[0])
  );

  ipcMain.handle('getScenario', async (event, ...args) =>
    scenarioController.getById(args[0])
  );

  ipcMain.handle('upInsertArea', async (event, ...args) =>
    areaController.upInsert(args[0])
  );

  ipcMain.handle('upInsertPricing', async (event, ...args) =>
    pricingController.upInsert(args[0])
  );
}
