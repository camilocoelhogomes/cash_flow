/* eslint-disable node/no-unpublished-import */
import {ipcMain} from 'electron';
import {listAnalisys} from '../../Controller/Analisys/ListAnalisyt';
import {createAnalisys} from '../../Controller/Analisys/CreateAnalistys';

export async function initApp() {
  ipcMain.handle('listAnalisys', async (event, ...args) =>
    listAnalisys.listAnalisys(args[0])
  );

  ipcMain.handle('createAnalisys', async (event, ...args) =>
    createAnalisys.createAnalisys(args[0])
  );
}
