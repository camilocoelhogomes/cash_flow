/* eslint-disable node/no-unpublished-import */
import {ipcMain} from 'electron';
import {listAnalisysFactory} from '../Controller/Analisys/ListAnalisyt';
import {existsSync} from 'node:fs';
import path from 'node:path';
import {container} from 'tsyringe';
import {DataSource} from 'typeorm';
import {Analisys} from '../Model/Entitys/Analisys';
import {CashFlow} from '../Model/Entitys/CashFlow';
import {CashMovement} from '../Model/Entitys/CashMovement';
import {Scenario} from '../Model/Entitys/Scenario';
import {initDb} from './initDb';

export async function initApp() {
  const dbPath = path.join(__dirname, 'db.db');

  const dbExists = existsSync(dbPath);
  const dataSource = new DataSource({
    type: 'sqlite',
    database: dbPath,
    entities: [Analisys, CashFlow, CashMovement, Scenario],
  });

  container.register(DataSource, {useValue: dataSource});
  await dataSource.initialize();
  if (!dbExists) {
    await initDb(dataSource);
  }
  ipcMain.handle('listAnalisys', async (event, args) => {
    const listAnalisys = listAnalisysFactory();
    const result = await listAnalisys.listAnalisys({}, 0, 0);
    return result;
  });
}
