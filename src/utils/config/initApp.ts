/* eslint-disable node/no-unpublished-import */
import {ipcMain} from 'electron';
import {projectController} from '../../Controller/Project/ProjectController';
import {scenarioController} from '../../Controller/Scenario/ScenarioController';
import {pricingController} from '../../Controller/Pricing/PrincingController';

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

  ipcMain.handle('createScenario', async (event, ...args) =>
    scenarioController.createScenario(args[0])
  );

  ipcMain.handle('listScenario', async (event, ...args) =>
    scenarioController.list(args[0])
  );

  ipcMain.handle('getScenario', async (event, ...args) =>
    scenarioController.getById(args[0])
  );

  ipcMain.handle('createPricing', async (event, ...args) =>
    pricingController.create(args[0])
  );
}
