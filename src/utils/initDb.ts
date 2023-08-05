import {DataSource} from 'typeorm';

export const initDb = async (dataSource: DataSource): Promise<void> => {
  const queryRunner = dataSource.createQueryRunner();
  await queryRunner.query(`
  CREATE TABLE IF NOT EXISTS analisys (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      scenario_ds TEXT NOT NULL,
      scenario_nm TEXT NOT NULL
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
      FOREIGN KEY (analisys_id) REFERENCES analisys (id)
  );
  
  `);
};
