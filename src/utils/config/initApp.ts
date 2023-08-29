import {ipcMain} from 'electron';
import {projectController} from '../../Controller/Project/ProjectController';
import {scenarioController} from '../../Controller/Scenario/ScenarioController';
import {pricingController} from '../../Controller/Pricing/PrincingController';
import {areaController} from '../../Controller/AreaController/AreaController';

export async function initApp() {
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
