import { IAnalisys } from "./tempEntity";

export function getALV(value: IAnalisys) {
  return ((value.totalArea - value.protectedArea - value.streetArea - value.decorationArea) / value.slots).toFixed(2)
}