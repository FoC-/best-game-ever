import { Item } from "./data";

export class EntityMapping {
  public index = 0;
  public quality: Quality = "normal";
  public minCount: number = 2; // value should not be less then 2
  public cutCount: number = 2; // value should not be less then minCount

  constructor(public readonly item: Item) {}

  get sectionFilter(): SectionFilter {
    return {
      index: this.index,
      name: this.item.id,
      quality: this.quality,
      comparator: "=",
      count: this.primaryKey,
    };
  }

  get conditions(): Condition[] {
    const materials: Condition[] = [];
    for (const id in this.item.required) {
      const count = this.item.required[id];

      materials.push({
        first_signal: {
          name: id,
        },
        constant: count,
        comparator: "≥",
        first_signal_networks: {
          red: false,
          green: true,
        },
        compare_type: "and",
      });
    }

    return [
      {
        first_signal: {
          type: "virtual",
          name: "signal-each",
        },
        constant: this.primaryKey,
        comparator: "=",
        first_signal_networks: {
          red: true,
          green: false,
        },
      },
      {
        first_signal: {
          name: this.item.id,
        },
        constant: this.minCount,
        first_signal_networks: {
          red: false,
          green: true,
        },
        compare_type: "and",
      },
      {
        first_signal: {
          type: "virtual",
          name: "signal-deny",
        },
        comparator: "=",
        first_signal_networks: {
          red: true,
          green: false,
        },
        compare_type: "and",
      },

      ...materials,

      {
        first_signal: {
          type: "virtual",
          name: "signal-each",
        },
        constant: this.primaryKey + 1,
        comparator: "=",
        first_signal_networks: {
          red: true,
          green: false,
        },
      },
      {
        first_signal: {
          name: this.item.id,
        },
        constant: this.cutCount,
        first_signal_networks: {
          red: false,
          green: true,
        },
        compare_type: "and",
      },

      ...materials,
    ];
  }

  private get primaryKey(): number {
    return this.index * 10 + 1;
  }
}
