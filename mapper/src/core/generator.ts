import Blueprint from "../models/blueprint";
import { EntityNames } from "../models/consts";
import data from "./data";

import { EntityMapping } from "./entity_mapping";

export const Generate = (list: [id: string, min: number, cut: number][]): Blueprint => {
  const entities = list.map(([id, min, cut], index) => {
    const entity = new EntityMapping(data.get(id));
    entity.index = index + 1;
    entity.minCount = min;
    entity.cutCount = cut;
    return entity;
  });

  const conditions = entities.reduce((a, c) => a.concat(c.conditions), []);
  return new Blueprint(
    [
      {
        signal: {
          name: "constant-combinator",
        },
        index: 1,
      },
      {
        signal: {
          name: "decider-combinator",
        },
        index: 2,
      },
    ],
    [
      {
        entity_number: 1,
        name: EntityNames.CONSTANT_COMBINATOR,
        position: {
          x: -23.5,
          y: 1.5,
        },
        direction: 4,
        control_behavior: {
          sections: {
            sections: [
              {
                index: 1,
                filters: entities.map((e) => e.sectionFilter),
              },
            ],
          },
        },
      },
      {
        entity_number: 2,
        name: EntityNames.DECIDER_COMBINATOR,
        position: {
          x: -22,
          y: 1.5,
        },
        direction: 4,
        control_behavior: {
          decider_conditions: {
            conditions: conditions,
            outputs: [
              {
                signal: {
                  type: "virtual",
                  name: "signal-each",
                },
                copy_count_from_input: false,
                networks: {
                  red: false,
                  green: true,
                },
              },
              {
                signal: {
                  type: "virtual",
                  name: "signal-deny",
                },
                copy_count_from_input: false,
                networks: {
                  red: false,
                  green: false,
                },
              },
            ],
          },
        },
      },
    ],
    undefined,
    [
      [1, 1, 2, 1],
      [2, 1, 2, 3],
    ]
  );
};
