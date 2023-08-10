/* eslint-disable node/no-unpublished-import */
import {ipcMain} from 'electron';
import {listAnalisys} from '../Controller/Analisys/ListAnalisyt';
import {Analisys} from '../Model/Entitys/Analisys';
import {createAnalisys} from '../Controller/Analisys/CreateAnalistys';

export async function initApp() {
  ipcMain.handle('listAnalisys', async (event, ...args) => {
    console.log(args);
    const result = await listAnalisys.listAnalisys(args[0], args[1], args[2]);
    return result;
  });

  ipcMain.handle(
    'createAnalisys',
    async (
      event,
      props: {
        analisysDs: string;
        analisysNm: string;
      }
    ) => createAnalisys.createAnalisys(props)
  );
}
