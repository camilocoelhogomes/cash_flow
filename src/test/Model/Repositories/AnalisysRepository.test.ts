import {describe} from 'node:test';
import {AnalisysRepository} from '../../../Model/Repositories/AnalisysRepository';
import path from 'node:path';
import {Analisys} from '../../../Model/Entitys/Analisys';
import {CashFlow} from '../../../Model/Entitys/CashFlow';
import {CashMovement} from '../../../Model/Entitys/CashMovement';
import {Scenario} from '../../../Model/Entitys/Scenario';
import {DataSource} from 'typeorm';
import {initDb} from '../../../utils/initDb';

const dbPath = path.join(__dirname, 'db.db');
const dataSource = new DataSource({
  type: 'sqlite',
  database: dbPath,
  entities: [Analisys, CashFlow, CashMovement, Scenario],
});
initDb(dataSource);
describe('AnalisysRepository', () => {
  const testingClass = new AnalisysRepository(dataSource);

  test('');
});
