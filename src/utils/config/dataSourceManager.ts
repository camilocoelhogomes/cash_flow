import {existsSync} from 'fs';
import path from 'path';
import {DataSource} from 'typeorm';
import {Analisys} from '../../Model/Entitys/Analisys';
import {CashFlow} from '../../Model/Entitys/CashFlow';
import {CashMovement} from '../../Model/Entitys/CashMovement';
import {Scenario} from '../../Model/Entitys/Scenario';

class DataSourceManager {
  private dataSource: DataSource;
  private readonly dbExists: boolean;
  constructor() {
    const dbPath = path.join(__dirname, 'db.db');

    this.dbExists = existsSync(dbPath);
    this.dataSource = new DataSource({
      type: 'sqlite',
      database: dbPath,
      entities: [Analisys, CashFlow, CashMovement, Scenario],
    });
  }
  async initDb() {
    await this.dataSource.initialize();
    if (this.dbExists) {
      return;
    }
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.query(`
    CREATE TABLE IF NOT EXISTS analisys (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        analisys_ds TEXT NOT NULL,
        analisys_nm TEXT NOT NULL,
        total_area NUMERIC NOT NULL,
        protected_area NUMERIC NOT NULL
    );
    `);
    await queryRunner.query(`
    CREATE TABLE IF NOT EXISTS cash_flow (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        cash_movement_tp TEXT NOT NULL,
        scenario_id INTEGER,
        cash_flow_tp TEXT NOT NULL,
        cash_flow_ds TEXT NOT NULL,
        cash_flow_nm TEXT NOT NULL,
        FOREIGN KEY (scenario_id) REFERENCES scenario (id)
    );    
    `);
    await queryRunner.query(`
    CREATE TABLE IF NOT EXISTS cash_movement (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        date DATETIME NOT NULL,
        value NUMERIC NOT NULL,
        cash_flow_id INTEGER,
        FOREIGN KEY (cash_flow_id) REFERENCES cash_flow (id)
    );
    
    `);
    await queryRunner.query(`
    CREATE TABLE IF NOT EXISTS scenario (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        scenario_ds TEXT NOT NULL,
        scenario_nm TEXT NOT NULL,
        analisys_id INTEGER,
        slot_area NUMERIC NOT NULL,
        street_area NUMERIC NOT NULL,
        decoration_area NUMERIC NOT NULL,
        square_value NUMERIC NOT NULL,
        FOREIGN KEY (analisys_id) REFERENCES analisys (id)
    );
    
    `);
  }

  getDataSource() {
    return this.dataSource;
  }
}

export const dataSourceManager = new DataSourceManager();
