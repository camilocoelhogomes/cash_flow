import {existsSync} from 'fs';
import path from 'path';
import {DataSource} from 'typeorm';
import {CashFlow} from '../../Model/Entitys/CashFlow';
import {CashMovement} from '../../Model/Entitys/CashMovement';
import {Scenario} from '../../Model/Entitys/Scenario';
import {Project} from '../../Model/Entitys/Project';

class DataSourceManager {
  private dataSource: DataSource;
  private readonly dbExists: boolean;
  constructor() {
    const dbPath = this.setPath();

    this.dbExists = existsSync(dbPath);
    this.dataSource = new DataSource({
      type: 'sqlite',
      entities: [Project, CashFlow, CashMovement, Scenario],
      database: dbPath,
    });
  }

  private setPath(): string {
    console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV === 'development') {
      return path.join('db.db');
    }
    return path.join(__dirname, 'db.db');
  }
  async initDb() {
    await this.dataSource.initialize();
    if (this.dbExists) {
      return;
    }
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.query(`
    CREATE TABLE IF NOT EXISTS project (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        project_ds TEXT NOT NULL,
        project_nm TEXT NOT NULL,
        total_area NUMERIC NOT NULL
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
        project_id INTEGER,
        slot_area NUMERIC NOT NULL,
        street_area NUMERIC NOT NULL,
        decoration_area NUMERIC NOT NULL,
        square_value NUMERIC NOT NULL,
        protected_area NUMERIC NOT NULL,
        FOREIGN KEY (project_id) REFERENCES project (id)
    );
    
    `);
  }

  getDataSource() {
    return this.dataSource;
  }
}

export const dataSourceManager = new DataSourceManager();
