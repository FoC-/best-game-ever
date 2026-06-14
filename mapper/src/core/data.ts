export class Item {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly category: string,
    public readonly row: number,

    public readonly required: Record<string, number>,
    public readonly produces: Record<string, number>
  ) {}
}

export default new Map<string, Item>([
  ["wooden-chest", new Item("wooden-chest", "Wooden chest", "logistics", 0, { wood: 2 }, { "wooden-chest": 1 })],
  ["iron-chest", new Item("iron-chest", "Iron chest", "logistics", 0, { "iron-plate": 8 }, { "iron-chest": 1 })],
  ["steel-chest", new Item("steel-chest", "Steel chest", "logistics", 0, { "steel-plate": 8 }, { "steel-chest": 1 })],
  [
    "storage-tank",
    new Item(
      "storage-tank",
      "Storage tank",
      "logistics",
      0,
      { "iron-plate": 20, "steel-plate": 5 },
      { "storage-tank": 1 }
    ),
  ],
  [
    "transport-belt",
    new Item(
      "transport-belt",
      "Transport belt",
      "logistics",
      1,
      { "iron-plate": 1, "iron-gear-wheel": 1 },
      { "transport-belt": 2 }
    ),
  ],
  [
    "fast-transport-belt",
    new Item(
      "fast-transport-belt",
      "Fast transport belt",
      "logistics",
      1,
      { "iron-gear-wheel": 5, "transport-belt": 1 },
      { "fast-transport-belt": 1 }
    ),
  ],
  [
    "express-transport-belt",
    new Item(
      "express-transport-belt",
      "Express transport belt",
      "logistics",
      1,
      { "iron-gear-wheel": 10, "fast-transport-belt": 1, lubricant: 20 },
      { "express-transport-belt": 1 }
    ),
  ],
  [
    "underground-belt",
    new Item(
      "underground-belt",
      "Underground belt",
      "logistics",
      1,
      { "iron-plate": 10, "transport-belt": 5 },
      { "underground-belt": 2 }
    ),
  ],
  [
    "fast-underground-belt",
    new Item(
      "fast-underground-belt",
      "Fast underground belt",
      "logistics",
      1,
      { "iron-gear-wheel": 40, "underground-belt": 2 },
      { "fast-underground-belt": 2 }
    ),
  ],
  [
    "express-underground-belt",
    new Item(
      "express-underground-belt",
      "Express underground belt",
      "logistics",
      1,
      { "iron-gear-wheel": 80, "fast-underground-belt": 2, lubricant: 40 },
      { "express-underground-belt": 2 }
    ),
  ],
  [
    "splitter",
    new Item(
      "splitter",
      "Splitter",
      "logistics",
      1,
      { "electronic-circuit": 5, "iron-plate": 5, "transport-belt": 4 },
      { splitter: 1 }
    ),
  ],
  [
    "fast-splitter",
    new Item(
      "fast-splitter",
      "Fast splitter",
      "logistics",
      1,
      { splitter: 1, "iron-gear-wheel": 10, "electronic-circuit": 10 },
      { "fast-splitter": 1 }
    ),
  ],
  [
    "express-splitter",
    new Item(
      "express-splitter",
      "Express splitter",
      "logistics",
      1,
      { "fast-splitter": 1, "iron-gear-wheel": 10, "advanced-circuit": 10, lubricant: 80 },
      { "express-splitter": 1 }
    ),
  ],
  [
    "burner-inserter",
    new Item(
      "burner-inserter",
      "Burner inserter",
      "logistics",
      2,
      { "iron-plate": 1, "iron-gear-wheel": 1 },
      { "burner-inserter": 1 }
    ),
  ],
  [
    "inserter",
    new Item(
      "inserter",
      "Inserter",
      "logistics",
      2,
      { "electronic-circuit": 1, "iron-gear-wheel": 1, "iron-plate": 1 },
      { inserter: 1 }
    ),
  ],
  [
    "long-handed-inserter",
    new Item(
      "long-handed-inserter",
      "Long-handed inserter",
      "logistics",
      2,
      { "iron-gear-wheel": 1, "iron-plate": 1, inserter: 1 },
      { "long-handed-inserter": 1 }
    ),
  ],
  [
    "fast-inserter",
    new Item(
      "fast-inserter",
      "Fast inserter",
      "logistics",
      2,
      { "electronic-circuit": 2, "iron-plate": 2, inserter: 1 },
      { "fast-inserter": 1 }
    ),
  ],
  [
    "bulk-inserter",
    new Item(
      "bulk-inserter",
      "Bulk inserter",
      "logistics",
      2,
      { "iron-gear-wheel": 15, "electronic-circuit": 15, "advanced-circuit": 1, "fast-inserter": 1 },
      { "bulk-inserter": 1 }
    ),
  ],
  [
    "small-electric-pole",
    new Item(
      "small-electric-pole",
      "Small electric pole",
      "logistics",
      3,
      { wood: 1, "copper-cable": 2 },
      { "small-electric-pole": 2 }
    ),
  ],
  [
    "medium-electric-pole",
    new Item(
      "medium-electric-pole",
      "Medium electric pole",
      "logistics",
      3,
      { "iron-stick": 4, "steel-plate": 2, "copper-cable": 2 },
      { "medium-electric-pole": 1 }
    ),
  ],
  [
    "big-electric-pole",
    new Item(
      "big-electric-pole",
      "Big electric pole",
      "logistics",
      3,
      { "iron-stick": 8, "steel-plate": 5, "copper-cable": 4 },
      { "big-electric-pole": 1 }
    ),
  ],
  [
    "substation",
    new Item(
      "substation",
      "Substation",
      "logistics",
      3,
      { "steel-plate": 10, "advanced-circuit": 5, "copper-cable": 6 },
      { substation: 1 }
    ),
  ],
  ["pipe", new Item("pipe", "Pipe", "logistics", 3, { "iron-plate": 1 }, { pipe: 1 })],
  [
    "pipe-to-ground",
    new Item(
      "pipe-to-ground",
      "Pipe to ground",
      "logistics",
      3,
      { pipe: 10, "iron-plate": 5 },
      { "pipe-to-ground": 2 }
    ),
  ],
  ["pump", new Item("pump", "Pump", "logistics", 3, { "engine-unit": 1, "steel-plate": 1, pipe: 1 }, { pump: 1 })],
  ["rail", new Item("rail", "Rail", "logistics", 4, { stone: 1, "iron-stick": 1, "steel-plate": 1 }, { rail: 2 })],
  [
    "train-stop",
    new Item(
      "train-stop",
      "Train stop",
      "logistics",
      4,
      { "electronic-circuit": 5, "iron-plate": 6, "iron-stick": 6, "steel-plate": 3 },
      { "train-stop": 1 }
    ),
  ],
  [
    "rail-signal",
    new Item(
      "rail-signal",
      "Rail signal",
      "logistics",
      4,
      { "electronic-circuit": 1, "iron-plate": 5 },
      { "rail-signal": 1 }
    ),
  ],
  [
    "rail-chain-signal",
    new Item(
      "rail-chain-signal",
      "Rail chain signal",
      "logistics",
      4,
      { "electronic-circuit": 1, "iron-plate": 5 },
      { "rail-chain-signal": 1 }
    ),
  ],
  [
    "locomotive",
    new Item(
      "locomotive",
      "Locomotive",
      "logistics",
      4,
      { "engine-unit": 20, "electronic-circuit": 10, "steel-plate": 30 },
      { locomotive: 1 }
    ),
  ],
  [
    "cargo-wagon",
    new Item(
      "cargo-wagon",
      "Cargo wagon",
      "logistics",
      4,
      { "iron-gear-wheel": 10, "iron-plate": 20, "steel-plate": 20 },
      { "cargo-wagon": 1 }
    ),
  ],
  [
    "fluid-wagon",
    new Item(
      "fluid-wagon",
      "Fluid wagon",
      "logistics",
      4,
      { "iron-gear-wheel": 10, "steel-plate": 16, pipe: 8, "storage-tank": 1 },
      { "fluid-wagon": 1 }
    ),
  ],
  [
    "artillery-wagon",
    new Item(
      "artillery-wagon",
      "Artillery wagon",
      "logistics",
      4,
      { "engine-unit": 64, "iron-gear-wheel": 10, "steel-plate": 40, pipe: 16, "advanced-circuit": 20 },
      { "artillery-wagon": 1 }
    ),
  ],
  ["car", new Item("car", "Car", "logistics", 5, { "engine-unit": 8, "iron-plate": 20, "steel-plate": 5 }, { car: 1 })],
  [
    "tank",
    new Item(
      "tank",
      "Tank",
      "logistics",
      5,
      { "engine-unit": 32, "steel-plate": 50, "iron-gear-wheel": 15, "advanced-circuit": 10 },
      { tank: 1 }
    ),
  ],
  [
    "spidertron",
    new Item(
      "spidertron",
      "Spidertron",
      "logistics",
      5,
      {
        "exoskeleton-equipment": 4,
        "fission-reactor-equipment": 2,
        "rocket-launcher": 4,
        "processing-unit": 16,
        "low-density-structure": 150,
        radar: 2,
        "efficiency-module-3": 2,
        "raw-fish": 1,
      },
      { spidertron: 1 }
    ),
  ],
  [
    "logistic-robot",
    new Item(
      "logistic-robot",
      "Logistic robot",
      "logistics",
      6,
      { "flying-robot-frame": 1, "advanced-circuit": 2 },
      { "logistic-robot": 1 }
    ),
  ],
  [
    "construction-robot",
    new Item(
      "construction-robot",
      "Construction robot",
      "logistics",
      6,
      { "flying-robot-frame": 1, "electronic-circuit": 2 },
      { "construction-robot": 1 }
    ),
  ],
  [
    "active-provider-chest",
    new Item(
      "active-provider-chest",
      "Active provider chest",
      "logistics",
      6,
      { "steel-chest": 1, "electronic-circuit": 3, "advanced-circuit": 1 },
      { "active-provider-chest": 1 }
    ),
  ],
  [
    "passive-provider-chest",
    new Item(
      "passive-provider-chest",
      "Passive provider chest",
      "logistics",
      6,
      { "steel-chest": 1, "electronic-circuit": 3, "advanced-circuit": 1 },
      { "passive-provider-chest": 1 }
    ),
  ],
  [
    "storage-chest",
    new Item(
      "storage-chest",
      "Storage chest",
      "logistics",
      6,
      { "steel-chest": 1, "electronic-circuit": 3, "advanced-circuit": 1 },
      { "storage-chest": 1 }
    ),
  ],
  [
    "buffer-chest",
    new Item(
      "buffer-chest",
      "Buffer chest",
      "logistics",
      6,
      { "steel-chest": 1, "electronic-circuit": 3, "advanced-circuit": 1 },
      { "buffer-chest": 1 }
    ),
  ],
  [
    "requester-chest",
    new Item(
      "requester-chest",
      "Requester chest",
      "logistics",
      6,
      { "steel-chest": 1, "electronic-circuit": 3, "advanced-circuit": 1 },
      { "requester-chest": 1 }
    ),
  ],
  [
    "roboport",
    new Item(
      "roboport",
      "Roboport",
      "logistics",
      6,
      { "steel-plate": 45, "iron-gear-wheel": 45, "advanced-circuit": 45 },
      { roboport: 1 }
    ),
  ],
  [
    "small-lamp",
    new Item(
      "small-lamp",
      "Lamp",
      "logistics",
      7,
      { "electronic-circuit": 1, "copper-cable": 3, "iron-plate": 1 },
      { "small-lamp": 1 }
    ),
  ],
  [
    "arithmetic-combinator",
    new Item(
      "arithmetic-combinator",
      "Arithmetic combinator",
      "logistics",
      7,
      { "copper-cable": 5, "electronic-circuit": 5 },
      { "arithmetic-combinator": 1 }
    ),
  ],
  [
    "decider-combinator",
    new Item(
      "decider-combinator",
      "Decider combinator",
      "logistics",
      7,
      { "copper-cable": 5, "electronic-circuit": 5 },
      { "decider-combinator": 1 }
    ),
  ],
  [
    "selector-combinator",
    new Item(
      "selector-combinator",
      "Selector combinator",
      "logistics",
      7,
      { "advanced-circuit": 2, "decider-combinator": 5 },
      { "selector-combinator": 1 }
    ),
  ],
  [
    "constant-combinator",
    new Item(
      "constant-combinator",
      "Constant combinator",
      "logistics",
      7,
      { "copper-cable": 5, "electronic-circuit": 2 },
      { "constant-combinator": 1 }
    ),
  ],
  [
    "power-switch",
    new Item(
      "power-switch",
      "Power switch",
      "logistics",
      7,
      { "iron-plate": 5, "copper-cable": 5, "electronic-circuit": 2 },
      { "power-switch": 1 }
    ),
  ],
  [
    "programmable-speaker",
    new Item(
      "programmable-speaker",
      "Programmable speaker",
      "logistics",
      7,
      { "iron-plate": 3, "iron-stick": 4, "copper-cable": 5, "electronic-circuit": 4 },
      { "programmable-speaker": 1 }
    ),
  ],
  [
    "display-panel",
    new Item(
      "display-panel",
      "Display panel",
      "logistics",
      7,
      { "iron-plate": 1, "electronic-circuit": 1 },
      { "display-panel": 1 }
    ),
  ],
  ["stone-brick", new Item("stone-brick", "Stone brick", "logistics", 8, { stone: 2 }, { "stone-brick": 1 })],
  [
    "concrete",
    new Item("concrete", "Concrete", "logistics", 8, { "stone-brick": 5, "iron-ore": 1, water: 100 }, { concrete: 10 }),
  ],
  [
    "hazard-concrete",
    new Item("hazard-concrete", "Hazard concrete", "logistics", 8, { concrete: 10 }, { "hazard-concrete": 10 }),
  ],
  [
    "refined-concrete",
    new Item(
      "refined-concrete",
      "Refined concrete",
      "logistics",
      8,
      { concrete: 20, "iron-stick": 8, "steel-plate": 1, water: 100 },
      { "refined-concrete": 10 }
    ),
  ],
  [
    "refined-hazard-concrete",
    new Item(
      "refined-hazard-concrete",
      "Refined hazard concrete",
      "logistics",
      8,
      { "refined-concrete": 10 },
      { "refined-hazard-concrete": 10 }
    ),
  ],
  ["landfill", new Item("landfill", "Landfill", "logistics", 8, { stone: 50 }, { landfill: 1 })],
  [
    "cliff-explosives",
    new Item(
      "cliff-explosives",
      "Cliff explosives",
      "logistics",
      8,
      { explosives: 10, grenade: 1, barrel: 1 },
      { "cliff-explosives": 1 }
    ),
  ],
  [
    "repair-pack",
    new Item(
      "repair-pack",
      "Repair pack",
      "production",
      0,
      { "electronic-circuit": 2, "iron-gear-wheel": 2 },
      { "repair-pack": 1 }
    ),
  ],
  ["boiler", new Item("boiler", "Boiler", "production", 1, { "stone-furnace": 1, pipe: 4 }, { boiler: 1 })],
  [
    "steam-engine",
    new Item(
      "steam-engine",
      "Steam engine",
      "production",
      1,
      { "iron-gear-wheel": 8, pipe: 5, "iron-plate": 10 },
      { "steam-engine": 1 }
    ),
  ],
  [
    "solar-panel",
    new Item(
      "solar-panel",
      "Solar panel",
      "production",
      1,
      { "steel-plate": 5, "electronic-circuit": 15, "copper-plate": 5 },
      { "solar-panel": 1 }
    ),
  ],
  [
    "accumulator",
    new Item("accumulator", "Accumulator", "production", 1, { "iron-plate": 2, battery: 5 }, { accumulator: 1 }),
  ],
  [
    "nuclear-reactor",
    new Item(
      "nuclear-reactor",
      "Nuclear reactor",
      "production",
      1,
      { concrete: 500, "steel-plate": 500, "advanced-circuit": 500, "copper-plate": 500 },
      { "nuclear-reactor": 1 }
    ),
  ],
  [
    "heat-pipe",
    new Item("heat-pipe", "Heat pipe", "production", 1, { "steel-plate": 10, "copper-plate": 20 }, { "heat-pipe": 1 }),
  ],
  [
    "heat-exchanger",
    new Item(
      "heat-exchanger",
      "Heat exchanger",
      "production",
      1,
      { "steel-plate": 10, "copper-plate": 100, pipe: 10 },
      { "heat-exchanger": 1 }
    ),
  ],
  [
    "steam-turbine",
    new Item(
      "steam-turbine",
      "Steam turbine",
      "production",
      1,
      { "iron-gear-wheel": 50, "copper-plate": 50, pipe: 20 },
      { "steam-turbine": 1 }
    ),
  ],
  [
    "burner-mining-drill",
    new Item(
      "burner-mining-drill",
      "Burner mining drill",
      "production",
      2,
      { "iron-gear-wheel": 3, "stone-furnace": 1, "iron-plate": 3 },
      { "burner-mining-drill": 1 }
    ),
  ],
  [
    "electric-mining-drill",
    new Item(
      "electric-mining-drill",
      "Electric mining drill",
      "production",
      2,
      { "electronic-circuit": 3, "iron-gear-wheel": 5, "iron-plate": 10 },
      { "electric-mining-drill": 1 }
    ),
  ],
  [
    "offshore-pump",
    new Item(
      "offshore-pump",
      "Offshore pump",
      "production",
      2,
      { pipe: 3, "iron-gear-wheel": 2 },
      { "offshore-pump": 1 }
    ),
  ],
  [
    "pumpjack",
    new Item(
      "pumpjack",
      "Pumpjack",
      "production",
      2,
      { "steel-plate": 5, "iron-gear-wheel": 10, "electronic-circuit": 5, pipe: 10 },
      { pumpjack: 1 }
    ),
  ],
  ["stone-furnace", new Item("stone-furnace", "Stone furnace", "production", 3, { stone: 5 }, { "stone-furnace": 1 })],
  [
    "steel-furnace",
    new Item(
      "steel-furnace",
      "Steel furnace",
      "production",
      3,
      { "steel-plate": 6, "stone-brick": 10 },
      { "steel-furnace": 1 }
    ),
  ],
  [
    "electric-furnace",
    new Item(
      "electric-furnace",
      "Electric furnace",
      "production",
      3,
      { "steel-plate": 10, "advanced-circuit": 5, "stone-brick": 10 },
      { "electric-furnace": 1 }
    ),
  ],
  [
    "assembling-machine-1",
    new Item(
      "assembling-machine-1",
      "Assembling machine 1",
      "production",
      4,
      { "electronic-circuit": 3, "iron-gear-wheel": 5, "iron-plate": 9 },
      { "assembling-machine-1": 1 }
    ),
  ],
  [
    "assembling-machine-2",
    new Item(
      "assembling-machine-2",
      "Assembling machine 2",
      "production",
      4,
      { "steel-plate": 2, "electronic-circuit": 3, "iron-gear-wheel": 5, "assembling-machine-1": 1 },
      { "assembling-machine-2": 1 }
    ),
  ],
  [
    "assembling-machine-3",
    new Item(
      "assembling-machine-3",
      "Assembling machine 3",
      "production",
      4,
      { "speed-module": 4, "assembling-machine-2": 2 },
      { "assembling-machine-3": 1 }
    ),
  ],
  [
    "oil-refinery",
    new Item(
      "oil-refinery",
      "Oil refinery",
      "production",
      4,
      { "steel-plate": 15, "iron-gear-wheel": 10, "stone-brick": 10, "electronic-circuit": 10, pipe: 10 },
      { "oil-refinery": 1 }
    ),
  ],
  [
    "chemical-plant",
    new Item(
      "chemical-plant",
      "Chemical plant",
      "production",
      4,
      { "steel-plate": 5, "iron-gear-wheel": 5, "electronic-circuit": 5, pipe: 5 },
      { "chemical-plant": 1 }
    ),
  ],
  [
    "centrifuge",
    new Item(
      "centrifuge",
      "Centrifuge",
      "production",
      4,
      { concrete: 100, "steel-plate": 50, "advanced-circuit": 100, "iron-gear-wheel": 100 },
      { centrifuge: 1 }
    ),
  ],
  [
    "lab",
    new Item(
      "lab",
      "Lab",
      "production",
      4,
      { "electronic-circuit": 10, "iron-gear-wheel": 10, "transport-belt": 4 },
      { lab: 1 }
    ),
  ],
  [
    "beacon",
    new Item(
      "beacon",
      "Beacon",
      "production",
      5,
      { "electronic-circuit": 20, "advanced-circuit": 20, "steel-plate": 10, "copper-cable": 10 },
      { beacon: 1 }
    ),
  ],
  [
    "speed-module",
    new Item(
      "speed-module",
      "Speed module",
      "production",
      5,
      { "advanced-circuit": 5, "electronic-circuit": 5 },
      { "speed-module": 1 }
    ),
  ],
  [
    "speed-module-2",
    new Item(
      "speed-module-2",
      "Speed module 2",
      "production",
      5,
      { "speed-module": 4, "advanced-circuit": 5, "processing-unit": 5 },
      { "speed-module-2": 1 }
    ),
  ],
  [
    "speed-module-3",
    new Item(
      "speed-module-3",
      "Speed module 3",
      "production",
      5,
      { "speed-module-2": 4, "advanced-circuit": 5, "processing-unit": 5 },
      { "speed-module-3": 1 }
    ),
  ],
  [
    "efficiency-module",
    new Item(
      "efficiency-module",
      "Efficiency module",
      "production",
      5,
      { "advanced-circuit": 5, "electronic-circuit": 5 },
      { "efficiency-module": 1 }
    ),
  ],
  [
    "efficiency-module-2",
    new Item(
      "efficiency-module-2",
      "Efficiency module 2",
      "production",
      5,
      { "efficiency-module": 4, "advanced-circuit": 5, "processing-unit": 5 },
      { "efficiency-module-2": 1 }
    ),
  ],
  [
    "efficiency-module-3",
    new Item(
      "efficiency-module-3",
      "Efficiency module 3",
      "production",
      5,
      { "efficiency-module-2": 4, "advanced-circuit": 5, "processing-unit": 5 },
      { "efficiency-module-3": 1 }
    ),
  ],
  [
    "productivity-module",
    new Item(
      "productivity-module",
      "Productivity module",
      "production",
      5,
      { "advanced-circuit": 5, "electronic-circuit": 5 },
      { "productivity-module": 1 }
    ),
  ],
  [
    "productivity-module-2",
    new Item(
      "productivity-module-2",
      "Productivity module 2",
      "production",
      5,
      { "productivity-module": 4, "advanced-circuit": 5, "processing-unit": 5 },
      { "productivity-module-2": 1 }
    ),
  ],
  [
    "productivity-module-3",
    new Item(
      "productivity-module-3",
      "Productivity module 3",
      "production",
      5,
      { "productivity-module-2": 4, "advanced-circuit": 5, "processing-unit": 5 },
      { "productivity-module-3": 1 }
    ),
  ],
  [
    "rocket-silo",
    new Item(
      "rocket-silo",
      "Rocket silo",
      "production",
      6,
      { "steel-plate": 1000, concrete: 1000, pipe: 100, "processing-unit": 200, "electric-engine-unit": 200 },
      { "rocket-silo": 1 }
    ),
  ],
  [
    "cargo-landing-pad",
    new Item(
      "cargo-landing-pad",
      "Cargo landing pad",
      "production",
      6,
      { concrete: 200, "steel-plate": 25, "processing-unit": 10 },
      { "cargo-landing-pad": 1 }
    ),
  ],
  [
    "satellite",
    new Item(
      "satellite",
      "Satellite",
      "production",
      6,
      {
        "low-density-structure": 100,
        "solar-panel": 100,
        accumulator: 100,
        radar: 5,
        "processing-unit": 100,
        "rocket-fuel": 50,
      },
      { satellite: 1 }
    ),
  ],
  [
    "basic-oil-processing",
    new Item(
      "basic-oil-processing",
      "Basic oil processing",
      "intermediate-products",
      0,
      { "crude-oil": 100 },
      { "petroleum-gas": 45 }
    ),
  ],
  [
    "advanced-oil-processing",
    new Item(
      "advanced-oil-processing",
      "Advanced oil processing",
      "intermediate-products",
      0,
      { water: 50, "crude-oil": 100 },
      { "heavy-oil": 25, "light-oil": 45, "petroleum-gas": 55 }
    ),
  ],
  [
    "coal-liquefaction",
    new Item(
      "coal-liquefaction",
      "Coal liquefaction",
      "intermediate-products",
      0,
      { coal: 10, "heavy-oil": 25, steam: 50 },
      { "heavy-oil": 90, "light-oil": 20, "petroleum-gas": 10 }
    ),
  ],
  [
    "coal-liquefaction-steam-500",
    new Item(
      "coal-liquefaction-steam-500",
      "Coal liquefaction",
      "intermediate-products",
      0,
      { coal: 10, "heavy-oil": 25, "steam-500": 50 },
      { "heavy-oil": 90, "light-oil": 20, "petroleum-gas": 10 }
    ),
  ],
  [
    "heavy-oil-cracking",
    new Item(
      "heavy-oil-cracking",
      "Heavy oil cracking to light oil",
      "intermediate-products",
      0,
      { water: 30, "heavy-oil": 40 },
      { "light-oil": 30 }
    ),
  ],
  [
    "light-oil-cracking",
    new Item(
      "light-oil-cracking",
      "Light oil cracking to petroleum gas",
      "intermediate-products",
      0,
      { water: 30, "light-oil": 30 },
      { "petroleum-gas": 20 }
    ),
  ],
  [
    "solid-fuel-from-petroleum-gas",
    new Item(
      "solid-fuel-from-petroleum-gas",
      "Solid fuel from petroleum gas",
      "intermediate-products",
      0,
      { "petroleum-gas": 20 },
      { "solid-fuel": 1 }
    ),
  ],
  [
    "solid-fuel-from-light-oil",
    new Item(
      "solid-fuel-from-light-oil",
      "Solid fuel from light oil",
      "intermediate-products",
      0,
      { "light-oil": 10 },
      { "solid-fuel": 1 }
    ),
  ],
  [
    "solid-fuel-from-heavy-oil",
    new Item(
      "solid-fuel-from-heavy-oil",
      "Solid fuel from heavy oil",
      "intermediate-products",
      0,
      { "heavy-oil": 20 },
      { "solid-fuel": 1 }
    ),
  ],
  ["lubricant", new Item("lubricant", "Lubricant", "intermediate-products", 0, { "heavy-oil": 10 }, { lubricant: 10 })],
  [
    "sulfuric-acid",
    new Item(
      "sulfuric-acid",
      "Sulfuric acid",
      "intermediate-products",
      0,
      { sulfur: 5, "iron-plate": 1, water: 100 },
      { "sulfuric-acid": 50 }
    ),
  ],
  [
    "iron-plate",
    new Item("iron-plate", "Iron plate", "intermediate-products", 1, { "iron-ore": 1 }, { "iron-plate": 1 }),
  ],
  [
    "copper-plate",
    new Item("copper-plate", "Copper plate", "intermediate-products", 1, { "copper-ore": 1 }, { "copper-plate": 1 }),
  ],
  [
    "steel-plate",
    new Item("steel-plate", "Steel plate", "intermediate-products", 1, { "iron-plate": 5 }, { "steel-plate": 1 }),
  ],
  [
    "plastic-bar",
    new Item(
      "plastic-bar",
      "Plastic bar",
      "intermediate-products",
      1,
      { "petroleum-gas": 20, coal: 1 },
      { "plastic-bar": 2 }
    ),
  ],
  [
    "sulfur",
    new Item("sulfur", "Sulfur", "intermediate-products", 1, { water: 30, "petroleum-gas": 30 }, { sulfur: 2 }),
  ],
  [
    "battery",
    new Item(
      "battery",
      "Battery",
      "intermediate-products",
      1,
      { "sulfuric-acid": 20, "iron-plate": 1, "copper-plate": 1 },
      { battery: 1 }
    ),
  ],
  [
    "explosives",
    new Item(
      "explosives",
      "Explosives",
      "intermediate-products",
      1,
      { sulfur: 1, coal: 1, water: 10 },
      { explosives: 2 }
    ),
  ],
  [
    "water-barrel",
    new Item(
      "water-barrel",
      "Fill Water barrel",
      "intermediate-products",
      2,
      { water: 50, barrel: 1 },
      { "water-barrel": 1 }
    ),
  ],
  [
    "crude-oil-barrel",
    new Item(
      "crude-oil-barrel",
      "Fill Crude oil barrel",
      "intermediate-products",
      2,
      { "crude-oil": 50, barrel: 1 },
      { "crude-oil-barrel": 1 }
    ),
  ],
  [
    "petroleum-gas-barrel",
    new Item(
      "petroleum-gas-barrel",
      "Fill Petroleum gas barrel",
      "intermediate-products",
      2,
      { "petroleum-gas": 50, barrel: 1 },
      { "petroleum-gas-barrel": 1 }
    ),
  ],
  [
    "light-oil-barrel",
    new Item(
      "light-oil-barrel",
      "Fill Light oil barrel",
      "intermediate-products",
      2,
      { "light-oil": 50, barrel: 1 },
      { "light-oil-barrel": 1 }
    ),
  ],
  [
    "heavy-oil-barrel",
    new Item(
      "heavy-oil-barrel",
      "Fill Heavy oil barrel",
      "intermediate-products",
      2,
      { "heavy-oil": 50, barrel: 1 },
      { "heavy-oil-barrel": 1 }
    ),
  ],
  [
    "lubricant-barrel",
    new Item(
      "lubricant-barrel",
      "Fill Lubricant barrel",
      "intermediate-products",
      2,
      { lubricant: 50, barrel: 1 },
      { "lubricant-barrel": 1 }
    ),
  ],
  [
    "sulfuric-acid-barrel",
    new Item(
      "sulfuric-acid-barrel",
      "Fill Sulfuric acid barrel",
      "intermediate-products",
      2,
      { "sulfuric-acid": 50, barrel: 1 },
      { "sulfuric-acid-barrel": 1 }
    ),
  ],
  [
    "empty-water-barrel",
    new Item(
      "empty-water-barrel",
      "Empty Water barrel",
      "intermediate-products",
      3,
      { "water-barrel": 1 },
      { water: 50, barrel: 1 }
    ),
  ],
  [
    "empty-crude-oil-barrel",
    new Item(
      "empty-crude-oil-barrel",
      "Empty Crude oil barrel",
      "intermediate-products",
      3,
      { "crude-oil-barrel": 1 },
      { "crude-oil": 50, barrel: 1 }
    ),
  ],
  [
    "empty-petroleum-gas-barrel",
    new Item(
      "empty-petroleum-gas-barrel",
      "Empty Petroleum gas barrel",
      "intermediate-products",
      3,
      { "petroleum-gas-barrel": 1 },
      { "petroleum-gas": 50, barrel: 1 }
    ),
  ],
  [
    "empty-light-oil-barrel",
    new Item(
      "empty-light-oil-barrel",
      "Empty Light oil barrel",
      "intermediate-products",
      3,
      { "light-oil-barrel": 1 },
      { "light-oil": 50, barrel: 1 }
    ),
  ],
  [
    "empty-heavy-oil-barrel",
    new Item(
      "empty-heavy-oil-barrel",
      "Empty Heavy oil barrel",
      "intermediate-products",
      3,
      { "heavy-oil-barrel": 1 },
      { "heavy-oil": 50, barrel: 1 }
    ),
  ],
  [
    "empty-lubricant-barrel",
    new Item(
      "empty-lubricant-barrel",
      "Empty Lubricant barrel",
      "intermediate-products",
      3,
      { "lubricant-barrel": 1 },
      { lubricant: 50, barrel: 1 }
    ),
  ],
  [
    "empty-sulfuric-acid-barrel",
    new Item(
      "empty-sulfuric-acid-barrel",
      "Empty Sulfuric acid barrel",
      "intermediate-products",
      3,
      { "sulfuric-acid-barrel": 1 },
      { "sulfuric-acid": 50, barrel: 1 }
    ),
  ],
  [
    "iron-gear-wheel",
    new Item(
      "iron-gear-wheel",
      "Iron gear wheel",
      "intermediate-products",
      4,
      { "iron-plate": 2 },
      { "iron-gear-wheel": 1 }
    ),
  ],
  [
    "iron-stick",
    new Item("iron-stick", "Iron stick", "intermediate-products", 4, { "iron-plate": 1 }, { "iron-stick": 2 }),
  ],
  [
    "copper-cable",
    new Item("copper-cable", "Copper cable", "intermediate-products", 4, { "copper-plate": 1 }, { "copper-cable": 2 }),
  ],
  ["barrel", new Item("barrel", "Barrel", "intermediate-products", 4, { "steel-plate": 1 }, { barrel: 1 })],
  [
    "electronic-circuit",
    new Item(
      "electronic-circuit",
      "Electronic circuit",
      "intermediate-products",
      4,
      { "iron-plate": 1, "copper-cable": 3 },
      { "electronic-circuit": 1 }
    ),
  ],
  [
    "advanced-circuit",
    new Item(
      "advanced-circuit",
      "Advanced circuit",
      "intermediate-products",
      4,
      { "electronic-circuit": 2, "plastic-bar": 2, "copper-cable": 4 },
      { "advanced-circuit": 1 }
    ),
  ],
  [
    "processing-unit",
    new Item(
      "processing-unit",
      "Processing unit",
      "intermediate-products",
      4,
      { "electronic-circuit": 20, "advanced-circuit": 2, "sulfuric-acid": 5 },
      { "processing-unit": 1 }
    ),
  ],
  [
    "engine-unit",
    new Item(
      "engine-unit",
      "Engine unit",
      "intermediate-products",
      4,
      { "steel-plate": 1, "iron-gear-wheel": 1, pipe: 2 },
      { "engine-unit": 1 }
    ),
  ],
  [
    "electric-engine-unit",
    new Item(
      "electric-engine-unit",
      "Electric engine unit",
      "intermediate-products",
      4,
      { "engine-unit": 1, lubricant: 15, "electronic-circuit": 2 },
      { "electric-engine-unit": 1 }
    ),
  ],
  [
    "flying-robot-frame",
    new Item(
      "flying-robot-frame",
      "Flying robot frame",
      "intermediate-products",
      4,
      { "electric-engine-unit": 1, battery: 2, "steel-plate": 1, "electronic-circuit": 3 },
      { "flying-robot-frame": 1 }
    ),
  ],
  [
    "low-density-structure",
    new Item(
      "low-density-structure",
      "Low density structure",
      "intermediate-products",
      4,
      { "steel-plate": 2, "copper-plate": 20, "plastic-bar": 5 },
      { "low-density-structure": 1 }
    ),
  ],
  [
    "rocket-fuel",
    new Item(
      "rocket-fuel",
      "Rocket fuel",
      "intermediate-products",
      4,
      { "solid-fuel": 10, "light-oil": 10 },
      { "rocket-fuel": 1 }
    ),
  ],
  [
    "rocket-part",
    new Item(
      "rocket-part",
      "Rocket part",
      "intermediate-products",
      4,
      { "processing-unit": 10, "low-density-structure": 10, "rocket-fuel": 10 },
      { "rocket-part": 1 }
    ),
  ],
  [
    "uranium-processing",
    new Item(
      "uranium-processing",
      "Uranium processing",
      "intermediate-products",
      5,
      { "uranium-ore": 10 },
      { "uranium-235": 0.007000000000000001, "uranium-238": 0.993 }
    ),
  ],
  [
    "depleted-uranium-fuel-cell",
    new Item(
      "depleted-uranium-fuel-cell",
      "Uranium fuel cell : Depleted uranium fuel cell",
      "intermediate-products",
      5,
      { "uranium-fuel-cell": 0 },
      { "depleted-uranium-fuel-cell": 0 }
    ),
  ],
  [
    "uranium-fuel-cell",
    new Item(
      "uranium-fuel-cell",
      "Uranium fuel cell",
      "intermediate-products",
      5,
      { "iron-plate": 10, "uranium-235": 1, "uranium-238": 19 },
      { "uranium-fuel-cell": 10 }
    ),
  ],
  [
    "nuclear-fuel-reprocessing",
    new Item(
      "nuclear-fuel-reprocessing",
      "Nuclear fuel reprocessing",
      "intermediate-products",
      5,
      { "depleted-uranium-fuel-cell": 5 },
      { "uranium-238": 3 }
    ),
  ],
  [
    "kovarex-enrichment-process",
    new Item(
      "kovarex-enrichment-process",
      "Kovarex enrichment process",
      "intermediate-products",
      5,
      { "uranium-235": 40, "uranium-238": 5 },
      { "uranium-235": 41, "uranium-238": 2 }
    ),
  ],
  [
    "nuclear-fuel",
    new Item(
      "nuclear-fuel",
      "Nuclear fuel",
      "intermediate-products",
      5,
      { "uranium-235": 1, "rocket-fuel": 1 },
      { "nuclear-fuel": 1 }
    ),
  ],
  [
    "automation-science-pack",
    new Item(
      "automation-science-pack",
      "Automation science pack",
      "intermediate-products",
      6,
      { "copper-plate": 1, "iron-gear-wheel": 1 },
      { "automation-science-pack": 1 }
    ),
  ],
  [
    "logistic-science-pack",
    new Item(
      "logistic-science-pack",
      "Logistic science pack",
      "intermediate-products",
      6,
      { inserter: 1, "transport-belt": 1 },
      { "logistic-science-pack": 1 }
    ),
  ],
  [
    "military-science-pack",
    new Item(
      "military-science-pack",
      "Military science pack",
      "intermediate-products",
      6,
      { "piercing-rounds-magazine": 1, grenade: 1, "stone-wall": 2 },
      { "military-science-pack": 2 }
    ),
  ],
  [
    "chemical-science-pack",
    new Item(
      "chemical-science-pack",
      "Chemical science pack",
      "intermediate-products",
      6,
      { "engine-unit": 2, "advanced-circuit": 3, sulfur: 1 },
      { "chemical-science-pack": 2 }
    ),
  ],
  [
    "production-science-pack",
    new Item(
      "production-science-pack",
      "Production science pack",
      "intermediate-products",
      6,
      { "electric-furnace": 1, "productivity-module": 1, rail: 30 },
      { "production-science-pack": 3 }
    ),
  ],
  [
    "utility-science-pack",
    new Item(
      "utility-science-pack",
      "Utility science pack",
      "intermediate-products",
      6,
      { "low-density-structure": 3, "processing-unit": 2, "flying-robot-frame": 1 },
      { "utility-science-pack": 3 }
    ),
  ],
  [
    "space-science-pack",
    new Item(
      "space-science-pack",
      "Rocket silo : Space science pack",
      "intermediate-products",
      6,
      { satellite: 1, "rocket-part": 100 },
      { "space-science-pack": 1000 }
    ),
  ],
  [
    "submachine-gun",
    new Item(
      "submachine-gun",
      "Submachine gun",
      "combat",
      0,
      { "iron-gear-wheel": 10, "copper-plate": 5, "iron-plate": 10 },
      { "submachine-gun": 1 }
    ),
  ],
  [
    "shotgun",
    new Item(
      "shotgun",
      "Shotgun",
      "combat",
      0,
      { "iron-plate": 15, "iron-gear-wheel": 5, "copper-plate": 10, wood: 5 },
      { shotgun: 1 }
    ),
  ],
  [
    "combat-shotgun",
    new Item(
      "combat-shotgun",
      "Combat shotgun",
      "combat",
      0,
      { "steel-plate": 15, "iron-gear-wheel": 5, "copper-plate": 10, wood: 10 },
      { "combat-shotgun": 1 }
    ),
  ],
  [
    "rocket-launcher",
    new Item(
      "rocket-launcher",
      "Rocket launcher",
      "combat",
      0,
      { "iron-plate": 5, "iron-gear-wheel": 5, "electronic-circuit": 5 },
      { "rocket-launcher": 1 }
    ),
  ],
  [
    "flamethrower",
    new Item(
      "flamethrower",
      "Flamethrower",
      "combat",
      0,
      { "steel-plate": 5, "iron-gear-wheel": 10 },
      { flamethrower: 1 }
    ),
  ],
  [
    "firearm-magazine",
    new Item("firearm-magazine", "Firearm magazine", "combat", 1, { "iron-plate": 4 }, { "firearm-magazine": 1 }),
  ],
  [
    "piercing-rounds-magazine",
    new Item(
      "piercing-rounds-magazine",
      "Piercing rounds magazine",
      "combat",
      1,
      { "firearm-magazine": 2, "steel-plate": 1, "copper-plate": 2 },
      { "piercing-rounds-magazine": 2 }
    ),
  ],
  [
    "uranium-rounds-magazine",
    new Item(
      "uranium-rounds-magazine",
      "Uranium rounds magazine",
      "combat",
      1,
      { "piercing-rounds-magazine": 1, "uranium-238": 1 },
      { "uranium-rounds-magazine": 1 }
    ),
  ],
  [
    "shotgun-shell",
    new Item(
      "shotgun-shell",
      "Shotgun shells",
      "combat",
      1,
      { "copper-plate": 2, "iron-plate": 2 },
      { "shotgun-shell": 1 }
    ),
  ],
  [
    "piercing-shotgun-shell",
    new Item(
      "piercing-shotgun-shell",
      "Piercing shotgun shells",
      "combat",
      1,
      { "shotgun-shell": 2, "copper-plate": 5, "steel-plate": 2 },
      { "piercing-shotgun-shell": 1 }
    ),
  ],
  [
    "cannon-shell",
    new Item(
      "cannon-shell",
      "Cannon shell",
      "combat",
      1,
      { "steel-plate": 2, "plastic-bar": 2, explosives: 1 },
      { "cannon-shell": 1 }
    ),
  ],
  [
    "explosive-cannon-shell",
    new Item(
      "explosive-cannon-shell",
      "Explosive cannon shell",
      "combat",
      1,
      { "steel-plate": 2, "plastic-bar": 2, explosives: 2 },
      { "explosive-cannon-shell": 1 }
    ),
  ],
  [
    "uranium-cannon-shell",
    new Item(
      "uranium-cannon-shell",
      "Uranium cannon shell",
      "combat",
      1,
      { "cannon-shell": 1, "uranium-238": 1 },
      { "uranium-cannon-shell": 1 }
    ),
  ],
  [
    "explosive-uranium-cannon-shell",
    new Item(
      "explosive-uranium-cannon-shell",
      "Explosive uranium cannon shell",
      "combat",
      1,
      { "explosive-cannon-shell": 1, "uranium-238": 1 },
      { "explosive-uranium-cannon-shell": 1 }
    ),
  ],
  [
    "artillery-shell",
    new Item(
      "artillery-shell",
      "Artillery shell",
      "combat",
      1,
      { "explosive-cannon-shell": 4, radar: 1, explosives: 8 },
      { "artillery-shell": 1 }
    ),
  ],
  ["rocket", new Item("rocket", "Rocket", "combat", 1, { explosives: 1, "iron-plate": 2 }, { rocket: 1 })],
  [
    "explosive-rocket",
    new Item(
      "explosive-rocket",
      "Explosive rocket",
      "combat",
      1,
      { rocket: 1, explosives: 2 },
      { "explosive-rocket": 1 }
    ),
  ],
  [
    "atomic-bomb",
    new Item(
      "atomic-bomb",
      "Atomic bomb",
      "combat",
      1,
      { "processing-unit": 10, explosives: 10, "uranium-235": 30 },
      { "atomic-bomb": 1 }
    ),
  ],
  [
    "flamethrower-ammo",
    new Item(
      "flamethrower-ammo",
      "Flamethrower ammo",
      "combat",
      1,
      { "steel-plate": 5, "crude-oil": 100 },
      { "flamethrower-ammo": 1 }
    ),
  ],
  ["grenade", new Item("grenade", "Grenade", "combat", 2, { "iron-plate": 5, coal: 10 }, { grenade: 1 })],
  [
    "cluster-grenade",
    new Item(
      "cluster-grenade",
      "Cluster grenade",
      "combat",
      2,
      { grenade: 7, explosives: 5, "steel-plate": 5 },
      { "cluster-grenade": 1 }
    ),
  ],
  [
    "poison-capsule",
    new Item(
      "poison-capsule",
      "Poison capsule",
      "combat",
      2,
      { "steel-plate": 3, "electronic-circuit": 3, coal: 10 },
      { "poison-capsule": 1 }
    ),
  ],
  [
    "slowdown-capsule",
    new Item(
      "slowdown-capsule",
      "Slowdown capsule",
      "combat",
      2,
      { "steel-plate": 2, "electronic-circuit": 2, coal: 5 },
      { "slowdown-capsule": 1 }
    ),
  ],
  [
    "defender-capsule",
    new Item(
      "defender-capsule",
      "Defender capsule",
      "combat",
      2,
      { "piercing-rounds-magazine": 3, "electronic-circuit": 3, "iron-gear-wheel": 3 },
      { "defender-capsule": 1 }
    ),
  ],
  [
    "distractor-capsule",
    new Item(
      "distractor-capsule",
      "Distractor capsule",
      "combat",
      2,
      { "defender-capsule": 4, "advanced-circuit": 3 },
      { "distractor-capsule": 1 }
    ),
  ],
  [
    "destroyer-capsule",
    new Item(
      "destroyer-capsule",
      "Destroyer capsule",
      "combat",
      2,
      { "distractor-capsule": 4, "speed-module": 1 },
      { "destroyer-capsule": 1 }
    ),
  ],
  ["light-armor", new Item("light-armor", "Light armor", "combat", 3, { "iron-plate": 40 }, { "light-armor": 1 })],
  [
    "heavy-armor",
    new Item(
      "heavy-armor",
      "Heavy armor",
      "combat",
      3,
      { "copper-plate": 100, "steel-plate": 50 },
      { "heavy-armor": 1 }
    ),
  ],
  [
    "modular-armor",
    new Item(
      "modular-armor",
      "Modular armor",
      "combat",
      3,
      { "advanced-circuit": 30, "steel-plate": 50 },
      { "modular-armor": 1 }
    ),
  ],
  [
    "power-armor",
    new Item(
      "power-armor",
      "Power armor",
      "combat",
      3,
      { "processing-unit": 40, "electric-engine-unit": 20, "steel-plate": 40 },
      { "power-armor": 1 }
    ),
  ],
  [
    "power-armor-mk2",
    new Item(
      "power-armor-mk2",
      "Power armor MK2",
      "combat",
      3,
      {
        "efficiency-module-2": 25,
        "speed-module-2": 25,
        "processing-unit": 60,
        "electric-engine-unit": 40,
        "low-density-structure": 30,
      },
      { "power-armor-mk2": 1 }
    ),
  ],
  [
    "solar-panel-equipment",
    new Item(
      "solar-panel-equipment",
      "Portable solar panel",
      "combat",
      4,
      { "solar-panel": 1, "advanced-circuit": 2, "steel-plate": 5 },
      { "solar-panel-equipment": 1 }
    ),
  ],
  [
    "fission-reactor-equipment",
    new Item(
      "fission-reactor-equipment",
      "Portable fission reactor",
      "combat",
      4,
      { "processing-unit": 200, "low-density-structure": 50, "uranium-fuel-cell": 4 },
      { "fission-reactor-equipment": 1 }
    ),
  ],
  [
    "battery-equipment",
    new Item(
      "battery-equipment",
      "Personal battery",
      "combat",
      4,
      { battery: 5, "steel-plate": 10 },
      { "battery-equipment": 1 }
    ),
  ],
  [
    "battery-mk2-equipment",
    new Item(
      "battery-mk2-equipment",
      "Personal battery MK2",
      "combat",
      4,
      { "battery-equipment": 10, "processing-unit": 15, "low-density-structure": 5 },
      { "battery-mk2-equipment": 1 }
    ),
  ],
  [
    "belt-immunity-equipment",
    new Item(
      "belt-immunity-equipment",
      "Belt immunity equipment",
      "combat",
      5,
      { "advanced-circuit": 5, "steel-plate": 10 },
      { "belt-immunity-equipment": 1 }
    ),
  ],
  [
    "exoskeleton-equipment",
    new Item(
      "exoskeleton-equipment",
      "Exoskeleton",
      "combat",
      5,
      { "processing-unit": 10, "electric-engine-unit": 30, "steel-plate": 20 },
      { "exoskeleton-equipment": 1 }
    ),
  ],
  [
    "personal-roboport-equipment",
    new Item(
      "personal-roboport-equipment",
      "Personal roboport",
      "combat",
      5,
      { "advanced-circuit": 10, "iron-gear-wheel": 40, "steel-plate": 20, battery: 45 },
      { "personal-roboport-equipment": 1 }
    ),
  ],
  [
    "personal-roboport-mk2-equipment",
    new Item(
      "personal-roboport-mk2-equipment",
      "Personal roboport MK2",
      "combat",
      5,
      { "personal-roboport-equipment": 5, "processing-unit": 100, "low-density-structure": 20 },
      { "personal-roboport-mk2-equipment": 1 }
    ),
  ],
  [
    "night-vision-equipment",
    new Item(
      "night-vision-equipment",
      "Nightvision",
      "combat",
      5,
      { "advanced-circuit": 5, "steel-plate": 10 },
      { "night-vision-equipment": 1 }
    ),
  ],
  [
    "energy-shield-equipment",
    new Item(
      "energy-shield-equipment",
      "Energy shield",
      "combat",
      6,
      { "advanced-circuit": 5, "steel-plate": 10 },
      { "energy-shield-equipment": 1 }
    ),
  ],
  [
    "energy-shield-mk2-equipment",
    new Item(
      "energy-shield-mk2-equipment",
      "Energy shield MK2",
      "combat",
      6,
      { "energy-shield-equipment": 10, "processing-unit": 5, "low-density-structure": 5 },
      { "energy-shield-mk2-equipment": 1 }
    ),
  ],
  [
    "personal-laser-defense-equipment",
    new Item(
      "personal-laser-defense-equipment",
      "Personal laser defense",
      "combat",
      6,
      { "processing-unit": 20, "low-density-structure": 5, "laser-turret": 5 },
      { "personal-laser-defense-equipment": 1 }
    ),
  ],
  [
    "discharge-defense-equipment",
    new Item(
      "discharge-defense-equipment",
      "Discharge defense",
      "combat",
      6,
      { "processing-unit": 5, "steel-plate": 20, "laser-turret": 10 },
      { "discharge-defense-equipment": 1 }
    ),
  ],
  ["stone-wall", new Item("stone-wall", "Wall", "combat", 7, { "stone-brick": 5 }, { "stone-wall": 1 })],
  [
    "gate",
    new Item("gate", "Gate", "combat", 7, { "stone-wall": 1, "steel-plate": 2, "electronic-circuit": 2 }, { gate: 1 }),
  ],
  [
    "radar",
    new Item(
      "radar",
      "Radar",
      "combat",
      7,
      { "electronic-circuit": 5, "iron-gear-wheel": 5, "iron-plate": 10 },
      { radar: 1 }
    ),
  ],
  [
    "land-mine",
    new Item("land-mine", "Land mine", "combat", 7, { "steel-plate": 1, explosives: 2 }, { "land-mine": 4 }),
  ],
  [
    "gun-turret",
    new Item(
      "gun-turret",
      "Gun turret",
      "combat",
      8,
      { "iron-gear-wheel": 10, "copper-plate": 10, "iron-plate": 20 },
      { "gun-turret": 1 }
    ),
  ],
  [
    "laser-turret",
    new Item(
      "laser-turret",
      "Laser turret",
      "combat",
      8,
      { "steel-plate": 20, "electronic-circuit": 20, battery: 12 },
      { "laser-turret": 1 }
    ),
  ],
  [
    "flamethrower-turret",
    new Item(
      "flamethrower-turret",
      "Flamethrower turret",
      "combat",
      8,
      { "steel-plate": 30, "iron-gear-wheel": 15, pipe: 10, "engine-unit": 5 },
      { "flamethrower-turret": 1 }
    ),
  ],
  [
    "artillery-turret",
    new Item(
      "artillery-turret",
      "Artillery turret",
      "combat",
      8,
      { "steel-plate": 60, concrete: 60, "iron-gear-wheel": 40, "advanced-circuit": 20 },
      { "artillery-turret": 1 }
    ),
  ],
  ["water", new Item("water", "Offshore pump : Water", "fluids", 0, {}, { water: 1200 })],
  ["steam", new Item("steam", "Boiler : Steam", "fluids", 0, { water: 1 }, { steam: 10 })],
  [
    "heat-exchanger-steam-boil",
    new Item("heat-exchanger-steam-boil", "Heat exchanger : Steam", "fluids", 0, { water: 1 }, { "steam-500": 10 }),
  ],
  ["iron-ore", new Item("iron-ore", "Iron ore", "intermediate-products", 0, {}, { "iron-ore": 1 })],
  ["copper-ore", new Item("copper-ore", "Copper ore", "intermediate-products", 0, {}, { "copper-ore": 1 })],
  ["coal", new Item("coal", "Coal", "intermediate-products", 0, {}, { coal: 1 })],
  ["stone", new Item("stone", "Stone", "intermediate-products", 0, {}, { stone: 1 })],
  [
    "uranium-ore",
    new Item("uranium-ore", "Uranium ore", "intermediate-products", 0, { "sulfuric-acid": 1 }, { "uranium-ore": 1 }),
  ],
  ["crude-oil", new Item("crude-oil", "Crude oil", "fluids", 0, {}, { "crude-oil": 10 })],
  [
    "electric-mining-drill-technology",
    new Item(
      "electric-mining-drill-technology",
      "Electric mining drill",
      "technology",
      1,
      { "automation-science-pack": 1 },
      { "electric-mining-drill-technology": 1 }
    ),
  ],
  [
    "repair-pack-technology",
    new Item(
      "repair-pack-technology",
      "Repair pack",
      "technology",
      1,
      { "automation-science-pack": 1 },
      { "repair-pack-technology": 1 }
    ),
  ],
  [
    "radar-technology",
    new Item("radar-technology", "Radar", "technology", 1, { "automation-science-pack": 1 }, { "radar-technology": 1 }),
  ],
  [
    "physical-projectile-damage-1",
    new Item(
      "physical-projectile-damage-1",
      "Physical projectile damage 1",
      "technology",
      1,
      { "automation-science-pack": 1 },
      { "physical-projectile-damage-1": 1 }
    ),
  ],
  [
    "weapon-shooting-speed-1",
    new Item(
      "weapon-shooting-speed-1",
      "Weapon shooting speed 1",
      "technology",
      1,
      { "automation-science-pack": 1 },
      { "weapon-shooting-speed-1": 1 }
    ),
  ],
  [
    "automation",
    new Item("automation", "Automation", "technology", 1, { "automation-science-pack": 1 }, { automation: 1 }),
  ],
  [
    "logistic-science-pack-technology",
    new Item(
      "logistic-science-pack-technology",
      "Logistic science pack",
      "technology",
      1,
      { "automation-science-pack": 1 },
      { "logistic-science-pack-technology": 1 }
    ),
  ],
  [
    "steel-processing",
    new Item(
      "steel-processing",
      "Steel processing",
      "technology",
      1,
      { "automation-science-pack": 1 },
      { "steel-processing": 1 }
    ),
  ],
  ["military", new Item("military", "Military", "technology", 1, { "automation-science-pack": 1 }, { military: 1 })],
  [
    "fast-inserter-technology",
    new Item(
      "fast-inserter-technology",
      "Fast inserter",
      "technology",
      1,
      { "automation-science-pack": 1 },
      { "fast-inserter-technology": 1 }
    ),
  ],
  [
    "logistics-technology",
    new Item(
      "logistics-technology",
      "Logistics",
      "technology",
      1,
      { "automation-science-pack": 1 },
      { "logistics-technology": 1 }
    ),
  ],
  ["lamp", new Item("lamp", "Lamp", "technology", 1, { "automation-science-pack": 1 }, { lamp: 1 })],
  [
    "heavy-armor-technology",
    new Item(
      "heavy-armor-technology",
      "Heavy armor",
      "technology",
      1,
      { "automation-science-pack": 1 },
      { "heavy-armor-technology": 1 }
    ),
  ],
  [
    "gun-turret-technology",
    new Item(
      "gun-turret-technology",
      "Gun turret",
      "technology",
      1,
      { "automation-science-pack": 1 },
      { "gun-turret-technology": 1 }
    ),
  ],
  [
    "stone-wall-technology",
    new Item(
      "stone-wall-technology",
      "Stone wall",
      "technology",
      1,
      { "automation-science-pack": 1 },
      { "stone-wall-technology": 1 }
    ),
  ],
  [
    "physical-projectile-damage-2",
    new Item(
      "physical-projectile-damage-2",
      "Physical projectile damage 2",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { "physical-projectile-damage-2": 1 }
    ),
  ],
  [
    "weapon-shooting-speed-2",
    new Item(
      "weapon-shooting-speed-2",
      "Weapon shooting speed 2",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { "weapon-shooting-speed-2": 1 }
    ),
  ],
  [
    "stronger-explosives-1",
    new Item(
      "stronger-explosives-1",
      "Stronger explosives 1",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { "stronger-explosives-1": 1 }
    ),
  ],
  [
    "bulk-inserter-technology",
    new Item(
      "bulk-inserter-technology",
      "Bulk inserter",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { "bulk-inserter-technology": 1 }
    ),
  ],
  [
    "inserter-capacity-bonus-1",
    new Item(
      "inserter-capacity-bonus-1",
      "Inserter capacity bonus 1",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { "inserter-capacity-bonus-1": 1 }
    ),
  ],
  [
    "inserter-capacity-bonus-2",
    new Item(
      "inserter-capacity-bonus-2",
      "Inserter capacity bonus 2",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { "inserter-capacity-bonus-2": 1 }
    ),
  ],
  [
    "automation-2",
    new Item(
      "automation-2",
      "Automation 2",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { "automation-2": 1 }
    ),
  ],
  [
    "military-2",
    new Item(
      "military-2",
      "Military 2",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { "military-2": 1 }
    ),
  ],
  [
    "railway",
    new Item(
      "railway",
      "Railway",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { railway: 1 }
    ),
  ],
  [
    "automated-rail-transportation",
    new Item(
      "automated-rail-transportation",
      "Automated rail transportation",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { "automated-rail-transportation": 1 }
    ),
  ],
  [
    "automobilism",
    new Item(
      "automobilism",
      "Automobilism",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { automobilism: 1 }
    ),
  ],
  [
    "solar-energy",
    new Item(
      "solar-energy",
      "Solar energy",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { "solar-energy": 1 }
    ),
  ],
  [
    "research-speed-1",
    new Item(
      "research-speed-1",
      "Lab research speed 1",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { "research-speed-1": 1 }
    ),
  ],
  [
    "research-speed-2",
    new Item(
      "research-speed-2",
      "Lab research speed 2",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { "research-speed-2": 1 }
    ),
  ],
  [
    "electric-energy-distribution-1",
    new Item(
      "electric-energy-distribution-1",
      "Electric energy distribution 1",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { "electric-energy-distribution-1": 1 }
    ),
  ],
  [
    "advanced-material-processing",
    new Item(
      "advanced-material-processing",
      "Advanced material processing",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { "advanced-material-processing": 1 }
    ),
  ],
  [
    "concrete-technology",
    new Item(
      "concrete-technology",
      "Concrete",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { "concrete-technology": 1 }
    ),
  ],
  [
    "engine",
    new Item(
      "engine",
      "Engine",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { engine: 1 }
    ),
  ],
  [
    "landfill-technology",
    new Item(
      "landfill-technology",
      "Landfill",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { "landfill-technology": 1 }
    ),
  ],
  [
    "logistics-2",
    new Item(
      "logistics-2",
      "Logistics 2",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { "logistics-2": 1 }
    ),
  ],
  [
    "toolbelt",
    new Item(
      "toolbelt",
      "Toolbelt",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { toolbelt: 1 }
    ),
  ],
  [
    "gate-technology",
    new Item(
      "gate-technology",
      "Gate",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { "gate-technology": 1 }
    ),
  ],
  [
    "chemical-science-pack-technology",
    new Item(
      "chemical-science-pack-technology",
      "Chemical science pack",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { "chemical-science-pack-technology": 1 }
    ),
  ],
  [
    "military-science-pack-technology",
    new Item(
      "military-science-pack-technology",
      "Military science pack",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { "military-science-pack-technology": 1 }
    ),
  ],
  [
    "explosives-technology",
    new Item(
      "explosives-technology",
      "Explosives",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { "explosives-technology": 1 }
    ),
  ],
  [
    "cliff-explosives-technology",
    new Item(
      "cliff-explosives-technology",
      "Cliff explosives",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { "cliff-explosives-technology": 1 }
    ),
  ],
  [
    "flammables",
    new Item(
      "flammables",
      "Flammables",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { flammables: 1 }
    ),
  ],
  [
    "advanced-circuit-technology",
    new Item(
      "advanced-circuit-technology",
      "Advanced circuit",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { "advanced-circuit-technology": 1 }
    ),
  ],
  [
    "fluid-wagon-technology",
    new Item(
      "fluid-wagon-technology",
      "Fluid wagon",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { "fluid-wagon-technology": 1 }
    ),
  ],
  [
    "modular-armor-technology",
    new Item(
      "modular-armor-technology",
      "Modular armor",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { "modular-armor-technology": 1 }
    ),
  ],
  [
    "electric-energy-accumulators",
    new Item(
      "electric-energy-accumulators",
      "Electric energy accumulators",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { "electric-energy-accumulators": 1 }
    ),
  ],
  [
    "battery-technology",
    new Item(
      "battery-technology",
      "Battery",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { "battery-technology": 1 }
    ),
  ],
  [
    "night-vision-equipment-technology",
    new Item(
      "night-vision-equipment-technology",
      "Nightvision equipment",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { "night-vision-equipment-technology": 1 }
    ),
  ],
  [
    "belt-immunity-equipment-technology",
    new Item(
      "belt-immunity-equipment-technology",
      "Belt immunity equipment",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { "belt-immunity-equipment-technology": 1 }
    ),
  ],
  [
    "battery-equipment-technology",
    new Item(
      "battery-equipment-technology",
      "Personal battery",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { "battery-equipment-technology": 1 }
    ),
  ],
  [
    "solar-panel-equipment-technology",
    new Item(
      "solar-panel-equipment-technology",
      "Portable solar panel",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { "solar-panel-equipment-technology": 1 }
    ),
  ],
  [
    "fluid-handling",
    new Item(
      "fluid-handling",
      "Fluid handling",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { "fluid-handling": 1 }
    ),
  ],
  [
    "oil-gathering",
    new Item(
      "oil-gathering",
      "Oil gathering",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { "oil-gathering": 1 }
    ),
  ],
  [
    "sulfur-processing",
    new Item(
      "sulfur-processing",
      "Sulfur processing",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { "sulfur-processing": 1 }
    ),
  ],
  [
    "plastics",
    new Item(
      "plastics",
      "Plastics",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { plastics: 1 }
    ),
  ],
  [
    "modules",
    new Item(
      "modules",
      "Modules",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { modules: 1 }
    ),
  ],
  [
    "speed-module-technology",
    new Item(
      "speed-module-technology",
      "Speed module",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { "speed-module-technology": 1 }
    ),
  ],
  [
    "productivity-module-technology",
    new Item(
      "productivity-module-technology",
      "Productivity module",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { "productivity-module-technology": 1 }
    ),
  ],
  [
    "efficiency-module-technology",
    new Item(
      "efficiency-module-technology",
      "Efficiency module",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { "efficiency-module-technology": 1 }
    ),
  ],
  [
    "mining-productivity-1",
    new Item(
      "mining-productivity-1",
      "Mining productivity 1",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { "mining-productivity-1": 1 }
    ),
  ],
  [
    "circuit-network",
    new Item(
      "circuit-network",
      "Circuit network",
      "technology",
      2,
      { "automation-science-pack": 1, "logistic-science-pack": 1 },
      { "circuit-network": 1 }
    ),
  ],
  [
    "physical-projectile-damage-3",
    new Item(
      "physical-projectile-damage-3",
      "Physical projectile damage 3",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "military-science-pack": 1 },
      { "physical-projectile-damage-3": 1 }
    ),
  ],
  [
    "physical-projectile-damage-4",
    new Item(
      "physical-projectile-damage-4",
      "Physical projectile damage 4",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "military-science-pack": 1 },
      { "physical-projectile-damage-4": 1 }
    ),
  ],
  [
    "stronger-explosives-2",
    new Item(
      "stronger-explosives-2",
      "Stronger explosives 2",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "military-science-pack": 1 },
      { "stronger-explosives-2": 1 }
    ),
  ],
  [
    "refined-flammables-1",
    new Item(
      "refined-flammables-1",
      "Refined flammables 1",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "military-science-pack": 1 },
      { "refined-flammables-1": 1 }
    ),
  ],
  [
    "refined-flammables-2",
    new Item(
      "refined-flammables-2",
      "Refined flammables 2",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "military-science-pack": 1 },
      { "refined-flammables-2": 1 }
    ),
  ],
  [
    "weapon-shooting-speed-3",
    new Item(
      "weapon-shooting-speed-3",
      "Weapon shooting speed 3",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "military-science-pack": 1 },
      { "weapon-shooting-speed-3": 1 }
    ),
  ],
  [
    "weapon-shooting-speed-4",
    new Item(
      "weapon-shooting-speed-4",
      "Weapon shooting speed 4",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "military-science-pack": 1 },
      { "weapon-shooting-speed-4": 1 }
    ),
  ],
  [
    "follower-robot-count-1",
    new Item(
      "follower-robot-count-1",
      "Follower robot count 1",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "military-science-pack": 1 },
      { "follower-robot-count-1": 1 }
    ),
  ],
  [
    "follower-robot-count-2",
    new Item(
      "follower-robot-count-2",
      "Follower robot count 2",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "military-science-pack": 1 },
      { "follower-robot-count-2": 1 }
    ),
  ],
  [
    "land-mine-technology",
    new Item(
      "land-mine-technology",
      "Land mines",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "military-science-pack": 1 },
      { "land-mine-technology": 1 }
    ),
  ],
  [
    "flamethrower-technology",
    new Item(
      "flamethrower-technology",
      "Flamethrower",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "military-science-pack": 1 },
      { "flamethrower-technology": 1 }
    ),
  ],
  [
    "rocketry",
    new Item(
      "rocketry",
      "Rocketry",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "military-science-pack": 1 },
      { rocketry: 1 }
    ),
  ],
  [
    "energy-shield-equipment-technology",
    new Item(
      "energy-shield-equipment-technology",
      "Energy shield equipment",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "military-science-pack": 1 },
      { "energy-shield-equipment-technology": 1 }
    ),
  ],
  [
    "defender",
    new Item(
      "defender",
      "Defender",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "military-science-pack": 1 },
      { defender: 1 }
    ),
  ],
  [
    "inserter-capacity-bonus-3",
    new Item(
      "inserter-capacity-bonus-3",
      "Inserter capacity bonus 3",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "chemical-science-pack": 1 },
      { "inserter-capacity-bonus-3": 1 }
    ),
  ],
  [
    "production-science-pack-technology",
    new Item(
      "production-science-pack-technology",
      "Production science pack",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "chemical-science-pack": 1 },
      { "production-science-pack-technology": 1 }
    ),
  ],
  [
    "utility-science-pack-technology",
    new Item(
      "utility-science-pack-technology",
      "Utility science pack",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "chemical-science-pack": 1 },
      { "utility-science-pack-technology": 1 }
    ),
  ],
  [
    "processing-unit-technology",
    new Item(
      "processing-unit-technology",
      "Processing unit",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "chemical-science-pack": 1 },
      { "processing-unit-technology": 1 }
    ),
  ],
  [
    "braking-force-1",
    new Item(
      "braking-force-1",
      "Braking force 1",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "chemical-science-pack": 1 },
      { "braking-force-1": 1 }
    ),
  ],
  [
    "braking-force-2",
    new Item(
      "braking-force-2",
      "Braking force 2",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "chemical-science-pack": 1 },
      { "braking-force-2": 1 }
    ),
  ],
  [
    "laser",
    new Item(
      "laser",
      "Laser",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "chemical-science-pack": 1 },
      { laser: 1 }
    ),
  ],
  [
    "power-armor-technology",
    new Item(
      "power-armor-technology",
      "Power armor",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "chemical-science-pack": 1 },
      { "power-armor-technology": 1 }
    ),
  ],
  [
    "robotics",
    new Item(
      "robotics",
      "Robotics",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "chemical-science-pack": 1 },
      { robotics: 1 }
    ),
  ],
  [
    "rocket-fuel-technology",
    new Item(
      "rocket-fuel-technology",
      "Rocket fuel",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "chemical-science-pack": 1 },
      { "rocket-fuel-technology": 1 }
    ),
  ],
  [
    "low-density-structure-technology",
    new Item(
      "low-density-structure-technology",
      "Low density structure",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "chemical-science-pack": 1 },
      { "low-density-structure-technology": 1 }
    ),
  ],
  [
    "research-speed-3",
    new Item(
      "research-speed-3",
      "Lab research speed 3",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "chemical-science-pack": 1 },
      { "research-speed-3": 1 }
    ),
  ],
  [
    "research-speed-4",
    new Item(
      "research-speed-4",
      "Lab research speed 4",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "chemical-science-pack": 1 },
      { "research-speed-4": 1 }
    ),
  ],
  [
    "electric-energy-distribution-2",
    new Item(
      "electric-energy-distribution-2",
      "Electric energy distribution 2",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "chemical-science-pack": 1 },
      { "electric-energy-distribution-2": 1 }
    ),
  ],
  [
    "advanced-material-processing-2",
    new Item(
      "advanced-material-processing-2",
      "Advanced material processing 2",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "chemical-science-pack": 1 },
      { "advanced-material-processing-2": 1 }
    ),
  ],
  [
    "lubricant-technology",
    new Item(
      "lubricant-technology",
      "Lubricant",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "chemical-science-pack": 1 },
      { "lubricant-technology": 1 }
    ),
  ],
  [
    "electric-engine",
    new Item(
      "electric-engine",
      "Electric engine",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "chemical-science-pack": 1 },
      { "electric-engine": 1 }
    ),
  ],
  [
    "construction-robotics",
    new Item(
      "construction-robotics",
      "Construction robotics",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "chemical-science-pack": 1 },
      { "construction-robotics": 1 }
    ),
  ],
  [
    "logistic-robotics",
    new Item(
      "logistic-robotics",
      "Logistic robotics",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "chemical-science-pack": 1 },
      { "logistic-robotics": 1 }
    ),
  ],
  [
    "worker-robots-speed-1",
    new Item(
      "worker-robots-speed-1",
      "Worker robot speed 1",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "chemical-science-pack": 1 },
      { "worker-robots-speed-1": 1 }
    ),
  ],
  [
    "worker-robots-speed-2",
    new Item(
      "worker-robots-speed-2",
      "Worker robot speed 2",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "chemical-science-pack": 1 },
      { "worker-robots-speed-2": 1 }
    ),
  ],
  [
    "worker-robots-storage-1",
    new Item(
      "worker-robots-storage-1",
      "Worker robot cargo size 1",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "chemical-science-pack": 1 },
      { "worker-robots-storage-1": 1 }
    ),
  ],
  [
    "battery-mk2-equipment-technology",
    new Item(
      "battery-mk2-equipment-technology",
      "Personal battery MK2",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "chemical-science-pack": 1 },
      { "battery-mk2-equipment-technology": 1 }
    ),
  ],
  [
    "exoskeleton-equipment-technology",
    new Item(
      "exoskeleton-equipment-technology",
      "Exoskeleton equipment",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "chemical-science-pack": 1 },
      { "exoskeleton-equipment-technology": 1 }
    ),
  ],
  [
    "personal-roboport-equipment-technology",
    new Item(
      "personal-roboport-equipment-technology",
      "Personal roboport",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "chemical-science-pack": 1 },
      { "personal-roboport-equipment-technology": 1 }
    ),
  ],
  [
    "advanced-oil-processing-technology",
    new Item(
      "advanced-oil-processing-technology",
      "Advanced oil processing",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "chemical-science-pack": 1 },
      { "advanced-oil-processing-technology": 1 }
    ),
  ],
  [
    "speed-module-2-technology",
    new Item(
      "speed-module-2-technology",
      "Speed module 2",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "chemical-science-pack": 1 },
      { "speed-module-2-technology": 1 }
    ),
  ],
  [
    "productivity-module-2-technology",
    new Item(
      "productivity-module-2-technology",
      "Productivity module 2",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "chemical-science-pack": 1 },
      { "productivity-module-2-technology": 1 }
    ),
  ],
  [
    "efficiency-module-2-technology",
    new Item(
      "efficiency-module-2-technology",
      "Efficiency module 2",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "chemical-science-pack": 1 },
      { "efficiency-module-2-technology": 1 }
    ),
  ],
  [
    "uranium-mining",
    new Item(
      "uranium-mining",
      "Uranium mining",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "chemical-science-pack": 1 },
      { "uranium-mining": 1 }
    ),
  ],
  [
    "nuclear-power",
    new Item(
      "nuclear-power",
      "Nuclear power",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "chemical-science-pack": 1 },
      { "nuclear-power": 1 }
    ),
  ],
  [
    "mining-productivity-2",
    new Item(
      "mining-productivity-2",
      "Mining productivity 2",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "chemical-science-pack": 1 },
      { "mining-productivity-2": 1 }
    ),
  ],
  [
    "advanced-combinators",
    new Item(
      "advanced-combinators",
      "Advanced combinators",
      "technology",
      3,
      { "automation-science-pack": 1, "logistic-science-pack": 1, "chemical-science-pack": 1 },
      { "advanced-combinators": 1 }
    ),
  ],
  [
    "physical-projectile-damage-5",
    new Item(
      "physical-projectile-damage-5",
      "Physical projectile damage 5",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "military-science-pack": 1,
      },
      { "physical-projectile-damage-5": 1 }
    ),
  ],
  [
    "weapon-shooting-speed-5",
    new Item(
      "weapon-shooting-speed-5",
      "Weapon shooting speed 5",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "military-science-pack": 1,
      },
      { "weapon-shooting-speed-5": 1 }
    ),
  ],
  [
    "laser-shooting-speed-3",
    new Item(
      "laser-shooting-speed-3",
      "Laser shooting speed 3",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "military-science-pack": 1,
      },
      { "laser-shooting-speed-3": 1 }
    ),
  ],
  [
    "laser-shooting-speed-4",
    new Item(
      "laser-shooting-speed-4",
      "Laser shooting speed 4",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "military-science-pack": 1,
      },
      { "laser-shooting-speed-4": 1 }
    ),
  ],
  [
    "follower-robot-count-3",
    new Item(
      "follower-robot-count-3",
      "Follower robot count 3",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "military-science-pack": 1,
      },
      { "follower-robot-count-3": 1 }
    ),
  ],
  [
    "military-3",
    new Item(
      "military-3",
      "Military 3",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "military-science-pack": 1,
      },
      { "military-3": 1 }
    ),
  ],
  [
    "tank-technology",
    new Item(
      "tank-technology",
      "Tank",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "military-science-pack": 1,
      },
      { "tank-technology": 1 }
    ),
  ],
  [
    "explosive-rocketry",
    new Item(
      "explosive-rocketry",
      "Explosive rocketry",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "military-science-pack": 1,
      },
      { "explosive-rocketry": 1 }
    ),
  ],
  [
    "energy-shield-mk2-equipment-technology",
    new Item(
      "energy-shield-mk2-equipment-technology",
      "Energy shield MK2 equipment",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "military-science-pack": 1,
      },
      { "energy-shield-mk2-equipment-technology": 1 }
    ),
  ],
  [
    "personal-laser-defense-equipment-technology",
    new Item(
      "personal-laser-defense-equipment-technology",
      "Personal laser defense",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "military-science-pack": 1,
      },
      { "personal-laser-defense-equipment-technology": 1 }
    ),
  ],
  [
    "discharge-defense-equipment-technology",
    new Item(
      "discharge-defense-equipment-technology",
      "Discharge defense",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "military-science-pack": 1,
      },
      { "discharge-defense-equipment-technology": 1 }
    ),
  ],
  [
    "distractor",
    new Item(
      "distractor",
      "Distractor",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "military-science-pack": 1,
      },
      { distractor: 1 }
    ),
  ],
  [
    "stronger-explosives-3",
    new Item(
      "stronger-explosives-3",
      "Stronger explosives 3",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "military-science-pack": 1,
        "chemical-science-pack": 1,
      },
      { "stronger-explosives-3": 1 }
    ),
  ],
  [
    "refined-flammables-3",
    new Item(
      "refined-flammables-3",
      "Refined flammables 3",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "military-science-pack": 1,
        "chemical-science-pack": 1,
      },
      { "refined-flammables-3": 1 }
    ),
  ],
  [
    "laser-weapons-damage-1",
    new Item(
      "laser-weapons-damage-1",
      "Energy weapons damage 1",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "military-science-pack": 1,
        "chemical-science-pack": 1,
      },
      { "laser-weapons-damage-1": 1 }
    ),
  ],
  [
    "laser-weapons-damage-2",
    new Item(
      "laser-weapons-damage-2",
      "Energy weapons damage 2",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "military-science-pack": 1,
        "chemical-science-pack": 1,
      },
      { "laser-weapons-damage-2": 1 }
    ),
  ],
  [
    "laser-weapons-damage-3",
    new Item(
      "laser-weapons-damage-3",
      "Energy weapons damage 3",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "military-science-pack": 1,
        "chemical-science-pack": 1,
      },
      { "laser-weapons-damage-3": 1 }
    ),
  ],
  [
    "laser-weapons-damage-4",
    new Item(
      "laser-weapons-damage-4",
      "Energy weapons damage 4",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "military-science-pack": 1,
        "chemical-science-pack": 1,
      },
      { "laser-weapons-damage-4": 1 }
    ),
  ],
  [
    "laser-shooting-speed-1",
    new Item(
      "laser-shooting-speed-1",
      "Laser shooting speed 1",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "military-science-pack": 1,
        "chemical-science-pack": 1,
      },
      { "laser-shooting-speed-1": 1 }
    ),
  ],
  [
    "laser-shooting-speed-2",
    new Item(
      "laser-shooting-speed-2",
      "Laser shooting speed 2",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "military-science-pack": 1,
        "chemical-science-pack": 1,
      },
      { "laser-shooting-speed-2": 1 }
    ),
  ],
  [
    "laser-turret-technology",
    new Item(
      "laser-turret-technology",
      "Laser turret",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "military-science-pack": 1,
        "chemical-science-pack": 1,
      },
      { "laser-turret-technology": 1 }
    ),
  ],
  [
    "inserter-capacity-bonus-4",
    new Item(
      "inserter-capacity-bonus-4",
      "Inserter capacity bonus 4",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "production-science-pack": 1,
      },
      { "inserter-capacity-bonus-4": 1 }
    ),
  ],
  [
    "inserter-capacity-bonus-5",
    new Item(
      "inserter-capacity-bonus-5",
      "Inserter capacity bonus 5",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "production-science-pack": 1,
      },
      { "inserter-capacity-bonus-5": 1 }
    ),
  ],
  [
    "inserter-capacity-bonus-6",
    new Item(
      "inserter-capacity-bonus-6",
      "Inserter capacity bonus 6",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "production-science-pack": 1,
      },
      { "inserter-capacity-bonus-6": 1 }
    ),
  ],
  [
    "automation-3",
    new Item(
      "automation-3",
      "Automation 3",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "production-science-pack": 1,
      },
      { "automation-3": 1 }
    ),
  ],
  [
    "braking-force-3",
    new Item(
      "braking-force-3",
      "Braking force 3",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "production-science-pack": 1,
      },
      { "braking-force-3": 1 }
    ),
  ],
  [
    "braking-force-4",
    new Item(
      "braking-force-4",
      "Braking force 4",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "production-science-pack": 1,
      },
      { "braking-force-4": 1 }
    ),
  ],
  [
    "braking-force-5",
    new Item(
      "braking-force-5",
      "Braking force 5",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "production-science-pack": 1,
      },
      { "braking-force-5": 1 }
    ),
  ],
  [
    "logistics-3",
    new Item(
      "logistics-3",
      "Logistics 3",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "production-science-pack": 1,
      },
      { "logistics-3": 1 }
    ),
  ],
  [
    "research-speed-5",
    new Item(
      "research-speed-5",
      "Lab research speed 5",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "production-science-pack": 1,
      },
      { "research-speed-5": 1 }
    ),
  ],
  [
    "effect-transmission",
    new Item(
      "effect-transmission",
      "Effect transmission",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "production-science-pack": 1,
      },
      { "effect-transmission": 1 }
    ),
  ],
  [
    "worker-robots-storage-2",
    new Item(
      "worker-robots-storage-2",
      "Worker robot cargo size 2",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "production-science-pack": 1,
      },
      { "worker-robots-storage-2": 1 }
    ),
  ],
  [
    "coal-liquefaction-technology",
    new Item(
      "coal-liquefaction-technology",
      "Coal liquefaction",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "production-science-pack": 1,
      },
      { "coal-liquefaction-technology": 1 }
    ),
  ],
  [
    "speed-module-3-technology",
    new Item(
      "speed-module-3-technology",
      "Speed module 3",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "production-science-pack": 1,
      },
      { "speed-module-3-technology": 1 }
    ),
  ],
  [
    "productivity-module-3-technology",
    new Item(
      "productivity-module-3-technology",
      "Productivity module 3",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "production-science-pack": 1,
      },
      { "productivity-module-3-technology": 1 }
    ),
  ],
  [
    "efficiency-module-3-technology",
    new Item(
      "efficiency-module-3-technology",
      "Efficiency module 3",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "production-science-pack": 1,
      },
      { "efficiency-module-3-technology": 1 }
    ),
  ],
  [
    "kovarex-enrichment-process-technology",
    new Item(
      "kovarex-enrichment-process-technology",
      "Kovarex enrichment process",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "production-science-pack": 1,
      },
      { "kovarex-enrichment-process-technology": 1 }
    ),
  ],
  [
    "nuclear-fuel-reprocessing-technology",
    new Item(
      "nuclear-fuel-reprocessing-technology",
      "Nuclear fuel reprocessing",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "production-science-pack": 1,
      },
      { "nuclear-fuel-reprocessing-technology": 1 }
    ),
  ],
  [
    "logistic-system",
    new Item(
      "logistic-system",
      "Logistic system",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "utility-science-pack": 1,
      },
      { "logistic-system": 1 }
    ),
  ],
  [
    "worker-robots-speed-3",
    new Item(
      "worker-robots-speed-3",
      "Worker robot speed 3",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "utility-science-pack": 1,
      },
      { "worker-robots-speed-3": 1 }
    ),
  ],
  [
    "worker-robots-speed-4",
    new Item(
      "worker-robots-speed-4",
      "Worker robot speed 4",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "utility-science-pack": 1,
      },
      { "worker-robots-speed-4": 1 }
    ),
  ],
  [
    "personal-roboport-mk2-equipment-technology",
    new Item(
      "personal-roboport-mk2-equipment-technology",
      "Personal roboport MK2",
      "technology",
      4,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "utility-science-pack": 1,
      },
      { "personal-roboport-mk2-equipment-technology": 1 }
    ),
  ],
  [
    "physical-projectile-damage-6",
    new Item(
      "physical-projectile-damage-6",
      "Physical projectile damage 6",
      "technology",
      5,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "military-science-pack": 1,
        "utility-science-pack": 1,
      },
      { "physical-projectile-damage-6": 1 }
    ),
  ],
  [
    "stronger-explosives-4",
    new Item(
      "stronger-explosives-4",
      "Stronger explosives 4",
      "technology",
      5,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "military-science-pack": 1,
        "chemical-science-pack": 1,
        "utility-science-pack": 1,
      },
      { "stronger-explosives-4": 1 }
    ),
  ],
  [
    "stronger-explosives-5",
    new Item(
      "stronger-explosives-5",
      "Stronger explosives 5",
      "technology",
      5,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "military-science-pack": 1,
        "chemical-science-pack": 1,
        "utility-science-pack": 1,
      },
      { "stronger-explosives-5": 1 }
    ),
  ],
  [
    "stronger-explosives-6",
    new Item(
      "stronger-explosives-6",
      "Stronger explosives 6",
      "technology",
      5,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "military-science-pack": 1,
        "utility-science-pack": 1,
      },
      { "stronger-explosives-6": 1 }
    ),
  ],
  [
    "refined-flammables-4",
    new Item(
      "refined-flammables-4",
      "Refined flammables 4",
      "technology",
      5,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "military-science-pack": 1,
        "chemical-science-pack": 1,
        "utility-science-pack": 1,
      },
      { "refined-flammables-4": 1 }
    ),
  ],
  [
    "refined-flammables-5",
    new Item(
      "refined-flammables-5",
      "Refined flammables 5",
      "technology",
      5,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "military-science-pack": 1,
        "chemical-science-pack": 1,
        "utility-science-pack": 1,
      },
      { "refined-flammables-5": 1 }
    ),
  ],
  [
    "refined-flammables-6",
    new Item(
      "refined-flammables-6",
      "Refined flammables 6",
      "technology",
      5,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "military-science-pack": 1,
        "utility-science-pack": 1,
      },
      { "refined-flammables-6": 1 }
    ),
  ],
  [
    "laser-weapons-damage-5",
    new Item(
      "laser-weapons-damage-5",
      "Energy weapons damage 5",
      "technology",
      5,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "military-science-pack": 1,
        "utility-science-pack": 1,
      },
      { "laser-weapons-damage-5": 1 }
    ),
  ],
  [
    "laser-weapons-damage-6",
    new Item(
      "laser-weapons-damage-6",
      "Energy weapons damage 6",
      "technology",
      5,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "military-science-pack": 1,
        "utility-science-pack": 1,
      },
      { "laser-weapons-damage-6": 1 }
    ),
  ],
  [
    "weapon-shooting-speed-6",
    new Item(
      "weapon-shooting-speed-6",
      "Weapon shooting speed 6",
      "technology",
      5,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "military-science-pack": 1,
        "utility-science-pack": 1,
      },
      { "weapon-shooting-speed-6": 1 }
    ),
  ],
  [
    "laser-shooting-speed-5",
    new Item(
      "laser-shooting-speed-5",
      "Laser shooting speed 5",
      "technology",
      5,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "military-science-pack": 1,
        "utility-science-pack": 1,
      },
      { "laser-shooting-speed-5": 1 }
    ),
  ],
  [
    "laser-shooting-speed-6",
    new Item(
      "laser-shooting-speed-6",
      "Laser shooting speed 6",
      "technology",
      5,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "military-science-pack": 1,
        "utility-science-pack": 1,
      },
      { "laser-shooting-speed-6": 1 }
    ),
  ],
  [
    "laser-shooting-speed-7",
    new Item(
      "laser-shooting-speed-7",
      "Laser shooting speed 7",
      "technology",
      5,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "military-science-pack": 1,
        "utility-science-pack": 1,
      },
      { "laser-shooting-speed-7": 1 }
    ),
  ],
  [
    "follower-robot-count-4",
    new Item(
      "follower-robot-count-4",
      "Follower robot count 4",
      "technology",
      5,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "military-science-pack": 1,
        "utility-science-pack": 1,
      },
      { "follower-robot-count-4": 1 }
    ),
  ],
  [
    "inserter-capacity-bonus-7",
    new Item(
      "inserter-capacity-bonus-7",
      "Inserter capacity bonus 7",
      "technology",
      5,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "production-science-pack": 1,
        "utility-science-pack": 1,
      },
      { "inserter-capacity-bonus-7": 1 }
    ),
  ],
  [
    "military-4",
    new Item(
      "military-4",
      "Military 4",
      "technology",
      5,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "military-science-pack": 1,
        "utility-science-pack": 1,
      },
      { "military-4": 1 }
    ),
  ],
  [
    "uranium-ammo",
    new Item(
      "uranium-ammo",
      "Uranium ammo",
      "technology",
      5,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "military-science-pack": 1,
        "utility-science-pack": 1,
      },
      { "uranium-ammo": 1 }
    ),
  ],
  [
    "braking-force-6",
    new Item(
      "braking-force-6",
      "Braking force 6",
      "technology",
      5,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "production-science-pack": 1,
        "utility-science-pack": 1,
      },
      { "braking-force-6": 1 }
    ),
  ],
  [
    "braking-force-7",
    new Item(
      "braking-force-7",
      "Braking force 7",
      "technology",
      5,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "production-science-pack": 1,
        "utility-science-pack": 1,
      },
      { "braking-force-7": 1 }
    ),
  ],
  [
    "power-armor-mk2-technology",
    new Item(
      "power-armor-mk2-technology",
      "Power armor MK2",
      "technology",
      5,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "military-science-pack": 1,
        "utility-science-pack": 1,
      },
      { "power-armor-mk2-technology": 1 }
    ),
  ],
  [
    "rocket-silo-technology",
    new Item(
      "rocket-silo-technology",
      "Rocket silo",
      "technology",
      5,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "production-science-pack": 1,
        "utility-science-pack": 1,
      },
      { "rocket-silo-technology": 1 }
    ),
  ],
  [
    "research-speed-6",
    new Item(
      "research-speed-6",
      "Lab research speed 6",
      "technology",
      5,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "production-science-pack": 1,
        "utility-science-pack": 1,
      },
      { "research-speed-6": 1 }
    ),
  ],
  [
    "worker-robots-speed-5",
    new Item(
      "worker-robots-speed-5",
      "Worker robot speed 5",
      "technology",
      5,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "production-science-pack": 1,
        "utility-science-pack": 1,
      },
      { "worker-robots-speed-5": 1 }
    ),
  ],
  [
    "worker-robots-storage-3",
    new Item(
      "worker-robots-storage-3",
      "Worker robot cargo size 3",
      "technology",
      5,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "production-science-pack": 1,
        "utility-science-pack": 1,
      },
      { "worker-robots-storage-3": 1 }
    ),
  ],
  [
    "fission-reactor-equipment-technology",
    new Item(
      "fission-reactor-equipment-technology",
      "Portable fission reactor",
      "technology",
      5,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "military-science-pack": 1,
        "utility-science-pack": 1,
      },
      { "fission-reactor-equipment-technology": 1 }
    ),
  ],
  [
    "destroyer",
    new Item(
      "destroyer",
      "Destroyer",
      "technology",
      5,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "military-science-pack": 1,
        "utility-science-pack": 1,
      },
      { destroyer: 1 }
    ),
  ],
  [
    "mining-productivity-3",
    new Item(
      "mining-productivity-3",
      "Mining productivity 3",
      "technology",
      5,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "production-science-pack": 1,
        "utility-science-pack": 1,
      },
      { "mining-productivity-3": 1 }
    ),
  ],
  [
    "artillery",
    new Item(
      "artillery",
      "Artillery",
      "technology",
      5,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "military-science-pack": 1,
        "utility-science-pack": 1,
      },
      { artillery: 1 }
    ),
  ],
  [
    "atomic-bomb-technology",
    new Item(
      "atomic-bomb-technology",
      "Atomic bomb",
      "technology",
      6,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "military-science-pack": 1,
        "production-science-pack": 1,
        "utility-science-pack": 1,
      },
      { "atomic-bomb-technology": 1 }
    ),
  ],
  [
    "spidertron-technology",
    new Item(
      "spidertron-technology",
      "Spidertron",
      "technology",
      6,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "military-science-pack": 1,
        "chemical-science-pack": 1,
        "production-science-pack": 1,
        "utility-science-pack": 1,
      },
      { "spidertron-technology": 1 }
    ),
  ],
  [
    "physical-projectile-damage-7",
    new Item(
      "physical-projectile-damage-7",
      "Physical projectile damage",
      "technology",
      6,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "military-science-pack": 1,
        "utility-science-pack": 1,
        "space-science-pack": 1,
      },
      { "physical-projectile-damage-7": 1 }
    ),
  ],
  [
    "stronger-explosives-7",
    new Item(
      "stronger-explosives-7",
      "Stronger explosives",
      "technology",
      6,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "military-science-pack": 1,
        "utility-science-pack": 1,
        "space-science-pack": 1,
      },
      { "stronger-explosives-7": 1 }
    ),
  ],
  [
    "refined-flammables-7",
    new Item(
      "refined-flammables-7",
      "Refined flammables",
      "technology",
      6,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "military-science-pack": 1,
        "utility-science-pack": 1,
        "space-science-pack": 1,
      },
      { "refined-flammables-7": 1 }
    ),
  ],
  [
    "laser-weapons-damage-7",
    new Item(
      "laser-weapons-damage-7",
      "Energy weapons damage",
      "technology",
      6,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "military-science-pack": 1,
        "utility-science-pack": 1,
        "space-science-pack": 1,
      },
      { "laser-weapons-damage-7": 1 }
    ),
  ],
  [
    "artillery-shell-range-1",
    new Item(
      "artillery-shell-range-1",
      "Artillery shell range",
      "technology",
      6,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "military-science-pack": 1,
        "utility-science-pack": 1,
        "space-science-pack": 1,
      },
      { "artillery-shell-range-1": 1 }
    ),
  ],
  [
    "artillery-shell-speed-1",
    new Item(
      "artillery-shell-speed-1",
      "Artillery shell shooting speed",
      "technology",
      6,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "military-science-pack": 1,
        "utility-science-pack": 1,
        "space-science-pack": 1,
      },
      { "artillery-shell-speed-1": 1 }
    ),
  ],
  [
    "worker-robots-speed-6",
    new Item(
      "worker-robots-speed-6",
      "Worker robot speed",
      "technology",
      6,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "production-science-pack": 1,
        "utility-science-pack": 1,
        "space-science-pack": 1,
      },
      { "worker-robots-speed-6": 1 }
    ),
  ],
  [
    "mining-productivity-4",
    new Item(
      "mining-productivity-4",
      "Mining productivity",
      "technology",
      6,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "production-science-pack": 1,
        "utility-science-pack": 1,
        "space-science-pack": 1,
      },
      { "mining-productivity-4": 1 }
    ),
  ],
  [
    "follower-robot-count-5",
    new Item(
      "follower-robot-count-5",
      "Follower robot count",
      "technology",
      7,
      {
        "automation-science-pack": 1,
        "logistic-science-pack": 1,
        "chemical-science-pack": 1,
        "military-science-pack": 1,
        "production-science-pack": 1,
        "utility-science-pack": 1,
        "space-science-pack": 1,
      },
      { "follower-robot-count-5": 1 }
    ),
  ],
]) as ReadonlyMap<string, Item>;
