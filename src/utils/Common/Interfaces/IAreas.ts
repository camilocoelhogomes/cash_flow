export interface ICreateAreas {
  totalArea: number;
  decorationArea: number;
  protectedArea: number;
  streetArea: number;
  totalSlots: number;
  lotArea: number;
}
export interface IAreas extends ICreateAreas {
  scenarioId: number;
}
