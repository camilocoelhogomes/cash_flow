import 'reflect-metadata';
import {DataSource} from 'typeorm';
import {createAnalisysFactory} from '../../../Controller/Analisys/CreateAnalistys';
import {initDb} from '../../../utils/config/dataSourceManager';
import {AnalisysRepository} from '../../../Model/Repositories/AnalisysRepository';

let dataSource: DataSource;
beforeAll(async () => {
  dataSource = await initDb();
});

describe('AnalisysRepository', () => {
  test('teste to create', async () => {
    const testingClass = createAnalisysFactory();
    const result = await testingClass.createAnalisys({
      analisysDs: 'teste Ds 2',
      analisysNm: 'teste name 3',
    });
  });
});
