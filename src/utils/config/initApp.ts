/* eslint-disable node/no-unpublished-import */
import {ipcMain} from 'electron';
import {projectController} from '../../Controller/Project/ProjectController';
import {scenarioController} from '../../Controller/Project/ScenarioController';

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

  ipcMain.handle('createScenario', async (event, ...args) => {
    scenarioController.createScenario(args[0]);
  });

  ipcMain.handle('listScenarios', async (event, ...args) => {
    scenarioController.listScenarios(args[0]);
  });
}
