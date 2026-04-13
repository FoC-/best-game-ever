import { Versions } from "./consts";
import Blueprint from "./blueprint";

export default class BlueprintBook {
  blueprint_book: {
    blueprints: {
      blueprint: Blueprint;
      index: number;
    }[];
  };

  item = "blueprint-book";
  active_index = 1;
  version = Versions.LATEST;

  constructor(blueprints: Blueprint[]) {
    this.blueprint_book = {
      blueprints: blueprints.map((blueprint, index) => ({ blueprint, index })),
    };
  }
}
