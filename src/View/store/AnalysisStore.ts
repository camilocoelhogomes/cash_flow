import { create } from "zustand";
import { faker } from '@faker-js/faker';

import { generateNumberId } from "../../utils/Functions";
import { IAnalisys } from "./tempEntity";

interface State {
  analyzes: IAnalisys[]
  createAnalysis(value: IAnalisys): void
}

export const useAnalysisStore = create<State>((set, get) => ({
  analyzes: listAnalisys(10),
  createAnalysis(value) { set({ analyzes: [...get().analyzes, value] }) },
}))

function listAnalisys(length: number): IAnalisys[] {
  let array: IAnalisys[] = []
  for (let index = 0;index < length;index++) { array.push(getAnalysis()) }
  return array
}

function getAnalysis(): IAnalisys {
  const totalArea = faker.number.int({ min: 20000, max: 50000 })
  const protectedArea = totalArea / 4
  const streetArea = totalArea / 10
  const decorationArea = totalArea / 10
  const slots = faker.number.int({ min: 20, max: 50 })
  const slotArea = parseFloat(((totalArea - protectedArea - streetArea - decorationArea) / slots).toFixed(2))
  return {
    id: generateNumberId(),
    title: 'Project - ' + faker.location.city(),
    description: 'Building - ' + faker.location.streetAddress(),
    totalArea: totalArea,
    protectedArea: protectedArea,
    streetArea: streetArea,
    decorationArea: decorationArea,
    slots: slots,
  }
}

