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
    "turbo-transport-belt",
    new Item(
      "turbo-transport-belt",
      "Turbo transport belt",
      "logistics",
      1,
      { "tungsten-plate": 5, "express-transport-belt": 1, lubricant: 20 },
      { "turbo-transport-belt": 1 }
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
    "turbo-underground-belt",
    new Item(
      "turbo-underground-belt",
      "Turbo underground belt",
      "logistics",
      1,
      { "tungsten-plate": 40, "express-underground-belt": 2, lubricant: 40 },
      { "turbo-underground-belt": 2 }
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
    "turbo-splitter",
    new Item(
      "turbo-splitter",
      "Turbo splitter",
      "logistics",
      1,
      { "express-splitter": 1, "tungsten-plate": 15, "processing-unit": 2, lubricant: 80 },
      { "turbo-splitter": 1 }
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
    "stack-inserter",
    new Item(
      "stack-inserter",
      "Stack inserter",
      "logistics",
      2,
      { "bulk-inserter": 1, "processing-unit": 1, "carbon-fiber": 2, jelly: 10 },
      { "stack-inserter": 1 }
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
  ["casting-pipe", new Item("casting-pipe", "Casting pipe", "logistics", 3, { "molten-iron": 10 }, { pipe: 1 })],
  [
    "casting-pipe-to-ground",
    new Item(
      "casting-pipe-to-ground",
      "Casting pipe to ground",
      "logistics",
      3,
      { "molten-iron": 50, pipe: 10 },
      { "pipe-to-ground": 2 }
    ),
  ],
  ["pump", new Item("pump", "Pump", "logistics", 3, { "engine-unit": 1, "steel-plate": 1, pipe: 1 }, { pump: 1 })],
  ["rail", new Item("rail", "Rail", "logistics", 4, { stone: 1, "iron-stick": 1, "steel-plate": 1 }, { rail: 2 })],
  [
    "rail-ramp",
    new Item(
      "rail-ramp",
      "Rail ramp",
      "logistics",
      4,
      { "refined-concrete": 100, rail: 8, "steel-plate": 10 },
      { "rail-ramp": 1 }
    ),
  ],
  [
    "rail-support",
    new Item(
      "rail-support",
      "Rail support",
      "logistics",
      4,
      { "refined-concrete": 20, "steel-plate": 10 },
      { "rail-support": 1 }
    ),
  ],
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
      { "engine-unit": 60, "tungsten-plate": 60, "refined-concrete": 60, "iron-gear-wheel": 40, "processing-unit": 10 },
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
      { "exoskeleton-equipment": 4, "fission-reactor-equipment": 2, "rocket-turret": 1, radar: 2, "raw-fish": 1 },
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
    "artificial-yumako-soil",
    new Item(
      "artificial-yumako-soil",
      "Artificial yumako soil",
      "logistics",
      8,
      { "yumako-seed": 2, nutrients: 50, landfill: 5 },
      { "artificial-yumako-soil": 10 }
    ),
  ],
  [
    "overgrowth-yumako-soil",
    new Item(
      "overgrowth-yumako-soil",
      "Overgrowth yumako soil",
      "logistics",
      8,
      { "artificial-yumako-soil": 2, "yumako-seed": 5, "biter-egg": 10, spoilage: 50, water: 100 },
      { "overgrowth-yumako-soil": 1 }
    ),
  ],
  [
    "artificial-jellynut-soil",
    new Item(
      "artificial-jellynut-soil",
      "Artificial jellynut soil",
      "logistics",
      8,
      { "jellynut-seed": 2, nutrients: 50, landfill: 5 },
      { "artificial-jellynut-soil": 10 }
    ),
  ],
  [
    "overgrowth-jellynut-soil",
    new Item(
      "overgrowth-jellynut-soil",
      "Overgrowth jellynut soil",
      "logistics",
      8,
      { "artificial-jellynut-soil": 2, "jellynut-seed": 5, "biter-egg": 10, spoilage: 50, water: 100 },
      { "overgrowth-jellynut-soil": 1 }
    ),
  ],
  [
    "ice-platform",
    new Item("ice-platform", "Ice platform", "logistics", 8, { ammonia: 400, ice: 50 }, { "ice-platform": 1 }),
  ],
  [
    "foundation",
    new Item(
      "foundation",
      "Foundation",
      "logistics",
      8,
      { "tungsten-plate": 4, "lithium-plate": 4, "carbon-fiber": 4, stone: 20, "fluoroketone-cold": 20 },
      { foundation: 1 }
    ),
  ],
  [
    "cliff-explosives",
    new Item(
      "cliff-explosives",
      "Cliff explosives",
      "logistics",
      8,
      { explosives: 10, calcite: 10, grenade: 1, barrel: 1 },
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
    "fusion-reactor",
    new Item(
      "fusion-reactor",
      "Fusion reactor",
      "production",
      1,
      { "tungsten-plate": 200, superconductor: 200, "quantum-processor": 250 },
      { "fusion-reactor": 1 }
    ),
  ],
  [
    "fusion-generator",
    new Item(
      "fusion-generator",
      "Fusion generator",
      "production",
      1,
      { "tungsten-plate": 100, superconductor: 100, "quantum-processor": 50 },
      { "fusion-generator": 1 }
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
    "big-mining-drill",
    new Item(
      "big-mining-drill",
      "Big mining drill",
      "production",
      2,
      {
        "electric-mining-drill": 1,
        "molten-iron": 200,
        "tungsten-carbide": 20,
        "electric-engine-unit": 10,
        "advanced-circuit": 10,
      },
      { "big-mining-drill": 1 }
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
    "foundry",
    new Item(
      "foundry",
      "Foundry",
      "production",
      3,
      { "tungsten-carbide": 50, "steel-plate": 50, "electronic-circuit": 30, "refined-concrete": 20, lubricant: 20 },
      { foundry: 1 }
    ),
  ],
  [
    "recycler",
    new Item(
      "recycler",
      "Recycler",
      "production",
      3,
      { "processing-unit": 6, "steel-plate": 20, "iron-gear-wheel": 40, concrete: 20 },
      { recycler: 1 }
    ),
  ],
  [
    "agricultural-tower",
    new Item(
      "agricultural-tower",
      "Agricultural tower",
      "production",
      4,
      { "steel-plate": 10, "electronic-circuit": 3, spoilage: 20, landfill: 1 },
      { "agricultural-tower": 1 }
    ),
  ],
  [
    "biochamber",
    new Item(
      "biochamber",
      "Biochamber",
      "production",
      4,
      { nutrients: 5, "pentapod-egg": 1, "iron-plate": 20, "electronic-circuit": 5, landfill: 1 },
      { biochamber: 1 }
    ),
  ],
  [
    "captive-biter-spawner",
    new Item(
      "captive-biter-spawner",
      "Captive biter spawner",
      "production",
      4,
      { "biter-egg": 10, "capture-robot-rocket": 1, "uranium-235": 15, "fluoroketone-cold": 100 },
      { "captive-biter-spawner": 1 }
    ),
  ],
  [
    "assembling-machine-1",
    new Item(
      "assembling-machine-1",
      "Assembling machine 1",
      "production",
      5,
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
      5,
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
      5,
      { "assembling-machine-2": 2, "speed-module": 4 },
      { "assembling-machine-3": 1 }
    ),
  ],
  [
    "oil-refinery",
    new Item(
      "oil-refinery",
      "Oil refinery",
      "production",
      5,
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
      5,
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
      5,
      { concrete: 100, "steel-plate": 50, "advanced-circuit": 100, "iron-gear-wheel": 100 },
      { centrifuge: 1 }
    ),
  ],
  [
    "electromagnetic-plant",
    new Item(
      "electromagnetic-plant",
      "Electromagnetic plant",
      "production",
      5,
      { "holmium-plate": 150, "steel-plate": 50, "processing-unit": 50, "refined-concrete": 50 },
      { "electromagnetic-plant": 1 }
    ),
  ],
  [
    "cryogenic-plant",
    new Item(
      "cryogenic-plant",
      "Cryogenic plant",
      "production",
      5,
      { "refined-concrete": 40, superconductor: 20, "processing-unit": 20, "lithium-plate": 20 },
      { "cryogenic-plant": 1 }
    ),
  ],
  [
    "lab",
    new Item(
      "lab",
      "Lab",
      "production",
      5,
      { "electronic-circuit": 10, "iron-gear-wheel": 10, "transport-belt": 4 },
      { lab: 1 }
    ),
  ],
  [
    "biolab",
    new Item(
      "biolab",
      "Biolab",
      "production",
      5,
      { lab: 1, "biter-egg": 10, "refined-concrete": 25, "capture-robot-rocket": 2, "uranium-235": 3 },
      { biolab: 1 }
    ),
  ],
  [
    "lightning-rod",
    new Item(
      "lightning-rod",
      "Lightning rod",
      "production",
      6,
      { "copper-cable": 12, "steel-plate": 8, "stone-brick": 4 },
      { "lightning-rod": 1 }
    ),
  ],
  [
    "lightning-collector",
    new Item(
      "lightning-collector",
      "Lightning collector",
      "production",
      6,
      { "lightning-rod": 1, supercapacitor: 8, accumulator: 1, electrolyte: 80 },
      { "lightning-collector": 1 }
    ),
  ],
  [
    "heating-tower",
    new Item(
      "heating-tower",
      "Heating tower",
      "production",
      6,
      { boiler: 2, "heat-pipe": 5, concrete: 20 },
      { "heating-tower": 1 }
    ),
  ],
  [
    "beacon",
    new Item(
      "beacon",
      "Beacon",
      "production",
      7,
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
      7,
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
      7,
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
      7,
      { "speed-module-2": 4, "advanced-circuit": 5, "processing-unit": 5, "tungsten-carbide": 1 },
      { "speed-module-3": 1 }
    ),
  ],
  [
    "efficiency-module",
    new Item(
      "efficiency-module",
      "Efficiency module",
      "production",
      7,
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
      7,
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
      7,
      { "efficiency-module-2": 4, "advanced-circuit": 5, "processing-unit": 5, spoilage: 5 },
      { "efficiency-module-3": 1 }
    ),
  ],
  [
    "productivity-module",
    new Item(
      "productivity-module",
      "Productivity module",
      "production",
      7,
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
      7,
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
      7,
      { "productivity-module-2": 4, "advanced-circuit": 5, "processing-unit": 5, "biter-egg": 1 },
      { "productivity-module-3": 1 }
    ),
  ],
  [
    "quality-module",
    new Item(
      "quality-module",
      "Quality module",
      "production",
      7,
      { "electronic-circuit": 5, "advanced-circuit": 5 },
      { "quality-module": 1 }
    ),
  ],
  [
    "quality-module-2",
    new Item(
      "quality-module-2",
      "Quality module 2",
      "production",
      7,
      { "quality-module": 4, "advanced-circuit": 5, "processing-unit": 5 },
      { "quality-module-2": 1 }
    ),
  ],
  [
    "quality-module-3",
    new Item(
      "quality-module-3",
      "Quality module 3",
      "production",
      7,
      { "quality-module-2": 4, "advanced-circuit": 5, "processing-unit": 5, superconductor: 1 },
      { "quality-module-3": 1 }
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
    "acid-neutralisation",
    new Item(
      "acid-neutralisation",
      "Acid neutralisation",
      "intermediate-products",
      0,
      { calcite: 1, "sulfuric-acid": 1000 },
      { steam: 10000 }
    ),
  ],
  [
    "steam-condensation",
    new Item("steam-condensation", "Steam condensation", "intermediate-products", 0, { steam: 1000 }, { water: 90 }),
  ],
  [
    "steam-condensation-steam-165",
    new Item(
      "steam-condensation-steam-165",
      "Steam condensation",
      "intermediate-products",
      0,
      { "steam-165": 1000 },
      { water: 90 }
    ),
  ],
  ["ice-melting", new Item("ice-melting", "Ice melting", "intermediate-products", 0, { ice: 1 }, { water: 20 })],
  [
    "plastic-bar",
    new Item(
      "plastic-bar",
      "Plastic bar",
      "intermediate-products",
      2,
      { "petroleum-gas": 20, coal: 1 },
      { "plastic-bar": 2 }
    ),
  ],
  [
    "sulfur",
    new Item("sulfur", "Sulfur", "intermediate-products", 2, { water: 30, "petroleum-gas": 30 }, { sulfur: 2 }),
  ],
  [
    "battery",
    new Item(
      "battery",
      "Battery",
      "intermediate-products",
      2,
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
      2,
      { sulfur: 1, coal: 1, water: 10 },
      { explosives: 2 }
    ),
  ],
  ["carbon", new Item("carbon", "Carbon", "intermediate-products", 2, { coal: 2, "sulfuric-acid": 20 }, { carbon: 1 })],
  [
    "coal-synthesis",
    new Item(
      "coal-synthesis",
      "Coal synthesis",
      "intermediate-products",
      2,
      { carbon: 5, sulfur: 1, water: 10 },
      { coal: 1 }
    ),
  ],
  [
    "water-barrel",
    new Item(
      "water-barrel",
      "Fill Water barrel",
      "intermediate-products",
      3,
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
      3,
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
      3,
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
      3,
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
      3,
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
      3,
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
      3,
      { "sulfuric-acid": 50, barrel: 1 },
      { "sulfuric-acid-barrel": 1 }
    ),
  ],
  [
    "fluoroketone-hot-barrel",
    new Item(
      "fluoroketone-hot-barrel",
      "Fill Fluoroketone (Hot) barrel",
      "intermediate-products",
      3,
      { "fluoroketone-hot": 50, barrel: 1 },
      { "fluoroketone-hot-barrel": 1 }
    ),
  ],
  [
    "fluoroketone-cold-barrel",
    new Item(
      "fluoroketone-cold-barrel",
      "Fill Fluoroketone (Cold) barrel",
      "intermediate-products",
      3,
      { "fluoroketone-cold": 50, barrel: 1 },
      { "fluoroketone-cold-barrel": 1 }
    ),
  ],
  [
    "empty-water-barrel",
    new Item(
      "empty-water-barrel",
      "Empty Water barrel",
      "intermediate-products",
      4,
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
      4,
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
      4,
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
      4,
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
      4,
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
      4,
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
      4,
      { "sulfuric-acid-barrel": 1 },
      { "sulfuric-acid": 50, barrel: 1 }
    ),
  ],
  [
    "empty-fluoroketone-hot-barrel",
    new Item(
      "empty-fluoroketone-hot-barrel",
      "Empty Fluoroketone (Hot) barrel",
      "intermediate-products",
      4,
      { "fluoroketone-hot-barrel": 1 },
      { "fluoroketone-hot": 50, barrel: 1 }
    ),
  ],
  [
    "empty-fluoroketone-cold-barrel",
    new Item(
      "empty-fluoroketone-cold-barrel",
      "Empty Fluoroketone (Cold) barrel",
      "intermediate-products",
      4,
      { "fluoroketone-cold-barrel": 1 },
      { "fluoroketone-cold": 50, barrel: 1 }
    ),
  ],
  [
    "iron-gear-wheel",
    new Item(
      "iron-gear-wheel",
      "Iron gear wheel",
      "intermediate-products",
      5,
      { "iron-plate": 2 },
      { "iron-gear-wheel": 1 }
    ),
  ],
  [
    "iron-stick",
    new Item("iron-stick", "Iron stick", "intermediate-products", 5, { "iron-plate": 1 }, { "iron-stick": 2 }),
  ],
  [
    "copper-cable",
    new Item("copper-cable", "Copper cable", "intermediate-products", 5, { "copper-plate": 1 }, { "copper-cable": 2 }),
  ],
  ["barrel", new Item("barrel", "Barrel", "intermediate-products", 5, { "steel-plate": 1 }, { barrel: 1 })],
  [
    "electronic-circuit",
    new Item(
      "electronic-circuit",
      "Electronic circuit",
      "intermediate-products",
      5,
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
      5,
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
      5,
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
      5,
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
      5,
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
      5,
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
      5,
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
      5,
      { "solid-fuel": 10, "light-oil": 10 },
      { "rocket-fuel": 1 }
    ),
  ],
  [
    "uranium-processing",
    new Item(
      "uranium-processing",
      "Uranium processing",
      "intermediate-products",
      6,
      { "uranium-ore": 10 },
      { "uranium-235": 0.007000000000000001, "uranium-238": 0.993 }
    ),
  ],
  [
    "uranium-fuel-cell",
    new Item(
      "uranium-fuel-cell",
      "Uranium fuel cell",
      "intermediate-products",
      6,
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
      6,
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
      6,
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
      6,
      { "uranium-235": 1, "rocket-fuel": 1 },
      { "nuclear-fuel": 1 }
    ),
  ],
  [
    "molten-iron-from-lava",
    new Item(
      "molten-iron-from-lava",
      "Molten iron from lava",
      "intermediate-products",
      7,
      { lava: 500, calcite: 1 },
      { "molten-iron": 250, stone: 10 }
    ),
  ],
  [
    "molten-copper-from-lava",
    new Item(
      "molten-copper-from-lava",
      "Molten copper from lava",
      "intermediate-products",
      7,
      { lava: 500, calcite: 1 },
      { "molten-copper": 250, stone: 15 }
    ),
  ],
  [
    "molten-iron",
    new Item(
      "molten-iron",
      "Iron ore melting",
      "intermediate-products",
      7,
      { "iron-ore": 50, calcite: 1 },
      { "molten-iron": 500 }
    ),
  ],
  [
    "molten-copper",
    new Item(
      "molten-copper",
      "Copper ore melting",
      "intermediate-products",
      7,
      { "copper-ore": 50, calcite: 1 },
      { "molten-copper": 500 }
    ),
  ],
  [
    "casting-iron",
    new Item("casting-iron", "Casting iron", "intermediate-products", 7, { "molten-iron": 20 }, { "iron-plate": 2 }),
  ],
  [
    "casting-copper",
    new Item(
      "casting-copper",
      "Casting copper",
      "intermediate-products",
      7,
      { "molten-copper": 20 },
      { "copper-plate": 2 }
    ),
  ],
  [
    "casting-steel",
    new Item("casting-steel", "Casting steel", "intermediate-products", 7, { "molten-iron": 30 }, { "steel-plate": 1 }),
  ],
  [
    "casting-iron-gear-wheel",
    new Item(
      "casting-iron-gear-wheel",
      "Casting iron gear wheel",
      "intermediate-products",
      7,
      { "molten-iron": 10 },
      { "iron-gear-wheel": 1 }
    ),
  ],
  [
    "casting-iron-stick",
    new Item(
      "casting-iron-stick",
      "Casting iron stick",
      "intermediate-products",
      7,
      { "molten-iron": 20 },
      { "iron-stick": 4 }
    ),
  ],
  [
    "casting-low-density-structure",
    new Item(
      "casting-low-density-structure",
      "Casting low density structure",
      "intermediate-products",
      7,
      { "molten-iron": 80, "molten-copper": 250, "plastic-bar": 5 },
      { "low-density-structure": 1 }
    ),
  ],
  [
    "concrete-from-molten-iron",
    new Item(
      "concrete-from-molten-iron",
      "Concrete from molten iron",
      "intermediate-products",
      7,
      { "molten-iron": 20, water: 100, "stone-brick": 5 },
      { concrete: 10 }
    ),
  ],
  [
    "casting-copper-cable",
    new Item(
      "casting-copper-cable",
      "Casting copper cable",
      "intermediate-products",
      7,
      { "molten-copper": 5 },
      { "copper-cable": 2 }
    ),
  ],
  [
    "tungsten-carbide",
    new Item(
      "tungsten-carbide",
      "Tungsten carbide",
      "intermediate-products",
      7,
      { "tungsten-ore": 2, "sulfuric-acid": 10, carbon: 1 },
      { "tungsten-carbide": 1 }
    ),
  ],
  [
    "tungsten-plate",
    new Item(
      "tungsten-plate",
      "Tungsten plate",
      "intermediate-products",
      7,
      { "tungsten-ore": 4, "molten-iron": 10 },
      { "tungsten-plate": 1 }
    ),
  ],
  [
    "holmium-solution",
    new Item(
      "holmium-solution",
      "Holmium solution",
      "intermediate-products",
      8,
      { "holmium-ore": 2, stone: 1, water: 10 },
      { "holmium-solution": 100 }
    ),
  ],
  [
    "holmium-plate",
    new Item(
      "holmium-plate",
      "Holmium plate",
      "intermediate-products",
      8,
      { "holmium-solution": 20 },
      { "holmium-plate": 1 }
    ),
  ],
  [
    "superconductor",
    new Item(
      "superconductor",
      "Superconductor",
      "intermediate-products",
      8,
      { "holmium-plate": 1, "copper-plate": 1, "plastic-bar": 1, "light-oil": 5 },
      { superconductor: 2 }
    ),
  ],
  [
    "electrolyte",
    new Item(
      "electrolyte",
      "Electrolyte",
      "intermediate-products",
      8,
      { stone: 1, "heavy-oil": 10, "holmium-solution": 10 },
      { electrolyte: 10 }
    ),
  ],
  [
    "supercapacitor",
    new Item(
      "supercapacitor",
      "Supercapacitor",
      "intermediate-products",
      8,
      { "holmium-plate": 2, superconductor: 2, "electronic-circuit": 4, battery: 1, electrolyte: 10 },
      { supercapacitor: 1 }
    ),
  ],
  [
    "yumako-processing",
    new Item(
      "yumako-processing",
      "Yumako processing",
      "intermediate-products",
      9,
      { yumako: 1 },
      { "yumako-seed": 0.02, "yumako-mash": 2 }
    ),
  ],
  [
    "jellynut-processing",
    new Item(
      "jellynut-processing",
      "Jellynut processing",
      "intermediate-products",
      0,
      { jellynut: 1 },
      { "jellynut-seed": 0.02, jelly: 4 }
    ),
  ],
  [
    "iron-bacteria",
    new Item(
      "iron-bacteria",
      "Iron bacteria",
      "intermediate-products",
      0,
      { jelly: 6 },
      { "iron-bacteria": 0.1, spoilage: 4 }
    ),
  ],
  [
    "iron-bacteria-cultivation",
    new Item(
      "iron-bacteria-cultivation",
      "Iron bacteria cultivation",
      "intermediate-products",
      0,
      { "iron-bacteria": 1, bioflux: 1 },
      { "iron-bacteria": 4 }
    ),
  ],
  [
    "copper-bacteria",
    new Item(
      "copper-bacteria",
      "Copper bacteria",
      "intermediate-products",
      0,
      { "yumako-mash": 3 },
      { "copper-bacteria": 0.1, spoilage: 1 }
    ),
  ],
  [
    "copper-bacteria-cultivation",
    new Item(
      "copper-bacteria-cultivation",
      "Copper bacteria cultivation",
      "intermediate-products",
      0,
      { "copper-bacteria": 1, bioflux: 1 },
      { "copper-bacteria": 4 }
    ),
  ],
  [
    "nutrients-from-spoilage",
    new Item(
      "nutrients-from-spoilage",
      "Nutrients from spoilage",
      "intermediate-products",
      0,
      { spoilage: 10 },
      { nutrients: 1 }
    ),
  ],
  [
    "nutrients-from-yumako-mash",
    new Item(
      "nutrients-from-yumako-mash",
      "Nutrients from yumako mash",
      "intermediate-products",
      0,
      { "yumako-mash": 4 },
      { nutrients: 6 }
    ),
  ],
  [
    "nutrients-from-bioflux",
    new Item(
      "nutrients-from-bioflux",
      "Nutrients from bioflux",
      "intermediate-products",
      0,
      { bioflux: 5 },
      { nutrients: 40 }
    ),
  ],
  [
    "pentapod-egg",
    new Item(
      "pentapod-egg",
      "Pentapod egg",
      "intermediate-products",
      0,
      { "pentapod-egg": 1, nutrients: 30, water: 60 },
      { "pentapod-egg": 2 }
    ),
  ],
  [
    "rocket-fuel-from-jelly",
    new Item(
      "rocket-fuel-from-jelly",
      "Rocket fuel from jelly",
      "intermediate-products",
      1,
      { water: 30, jelly: 30, bioflux: 2 },
      { "rocket-fuel": 1 }
    ),
  ],
  [
    "biolubricant",
    new Item("biolubricant", "Biolubricant", "intermediate-products", 1, { jelly: 60 }, { lubricant: 20 }),
  ],
  [
    "bioplastic",
    new Item(
      "bioplastic",
      "Bioplastic",
      "intermediate-products",
      1,
      { bioflux: 1, "yumako-mash": 4 },
      { "plastic-bar": 3 }
    ),
  ],
  [
    "biosulfur",
    new Item("biosulfur", "Biosulfur", "intermediate-products", 1, { spoilage: 5, bioflux: 1 }, { sulfur: 2 }),
  ],
  [
    "bioflux",
    new Item("bioflux", "Bioflux", "intermediate-products", 1, { "yumako-mash": 15, jelly: 12 }, { bioflux: 4 }),
  ],
  [
    "burnt-spoilage",
    new Item("burnt-spoilage", "Burnt spoilage", "intermediate-products", 1, { spoilage: 6 }, { carbon: 1 }),
  ],
  [
    "carbon-fiber",
    new Item(
      "carbon-fiber",
      "Carbon fiber",
      "intermediate-products",
      1,
      { "yumako-mash": 10, carbon: 1 },
      { "carbon-fiber": 1 }
    ),
  ],
  [
    "wood-processing",
    new Item("wood-processing", "Wood processing", "intermediate-products", 2, { wood: 2 }, { "tree-seed": 1 }),
  ],
  [
    "fish-breeding",
    new Item(
      "fish-breeding",
      "Fish breeding",
      "intermediate-products",
      0,
      { "raw-fish": 2, nutrients: 100, water: 100 },
      { "raw-fish": 3 }
    ),
  ],
  [
    "nutrients-from-fish",
    new Item(
      "nutrients-from-fish",
      "Nutrients from fish",
      "intermediate-products",
      0,
      { "raw-fish": 1 },
      { nutrients: 20 }
    ),
  ],
  [
    "nutrients-from-biter-egg",
    new Item(
      "nutrients-from-biter-egg",
      "Nutrients from biter egg",
      "intermediate-products",
      0,
      { "biter-egg": 1 },
      { nutrients: 20 }
    ),
  ],
  [
    "ammoniacal-solution-separation",
    new Item(
      "ammoniacal-solution-separation",
      "Ammoniacal solution separation",
      "intermediate-products",
      1,
      { "ammoniacal-solution": 50 },
      { ice: 5, ammonia: 50 }
    ),
  ],
  [
    "solid-fuel-from-ammonia",
    new Item(
      "solid-fuel-from-ammonia",
      "Solid fuel from ammonia",
      "intermediate-products",
      1,
      { ammonia: 15, "crude-oil": 6 },
      { "solid-fuel": 1 }
    ),
  ],
  [
    "ammonia-rocket-fuel",
    new Item(
      "ammonia-rocket-fuel",
      "Ammonia rocket fuel",
      "intermediate-products",
      1,
      { "solid-fuel": 10, water: 50, ammonia: 500 },
      { "rocket-fuel": 1 }
    ),
  ],
  [
    "fluoroketone",
    new Item(
      "fluoroketone",
      "Fluoroketone",
      "intermediate-products",
      1,
      { fluorine: 50, ammonia: 50, "solid-fuel": 1, lithium: 1 },
      { "fluoroketone-hot": 50 }
    ),
  ],
  [
    "fluoroketone-cooling",
    new Item(
      "fluoroketone-cooling",
      "Cooling hot fluoroketone",
      "intermediate-products",
      1,
      { "fluoroketone-hot": 10 },
      { "fluoroketone-cold": 10 }
    ),
  ],
  [
    "lithium",
    new Item(
      "lithium",
      "Lithium",
      "intermediate-products",
      1,
      { "holmium-plate": 1, "lithium-brine": 50, ammonia: 50 },
      { lithium: 5 }
    ),
  ],
  [
    "quantum-processor",
    new Item(
      "quantum-processor",
      "Quantum processor",
      "intermediate-products",
      1,
      {
        "tungsten-carbide": 1,
        "processing-unit": 1,
        superconductor: 1,
        "carbon-fiber": 1,
        "lithium-plate": 2,
        "fluoroketone-cold": 10,
      },
      { "quantum-processor": 1, "fluoroketone-hot": 5 }
    ),
  ],
  [
    "fusion-power-cell",
    new Item(
      "fusion-power-cell",
      "Fusion power cell",
      "intermediate-products",
      1,
      { "lithium-plate": 5, "holmium-plate": 1, ammonia: 100 },
      { "fusion-power-cell": 1 }
    ),
  ],
  [
    "automation-science-pack",
    new Item(
      "automation-science-pack",
      "Automation science pack",
      "intermediate-products",
      2,
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
      2,
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
      2,
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
      2,
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
      2,
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
      2,
      { "low-density-structure": 3, "processing-unit": 2, "flying-robot-frame": 1 },
      { "utility-science-pack": 3 }
    ),
  ],
  [
    "space-science-pack",
    new Item(
      "space-science-pack",
      "Space science pack",
      "intermediate-products",
      2,
      { "iron-plate": 2, carbon: 1, ice: 1 },
      { "space-science-pack": 5 }
    ),
  ],
  [
    "metallurgic-science-pack",
    new Item(
      "metallurgic-science-pack",
      "Metallurgic science pack",
      "intermediate-products",
      2,
      { "tungsten-carbide": 3, "tungsten-plate": 2, "molten-copper": 200 },
      { "metallurgic-science-pack": 1 }
    ),
  ],
  [
    "agricultural-science-pack",
    new Item(
      "agricultural-science-pack",
      "Agricultural science pack",
      "intermediate-products",
      2,
      { bioflux: 1, "pentapod-egg": 1 },
      { "agricultural-science-pack": 1 }
    ),
  ],
  [
    "electromagnetic-science-pack",
    new Item(
      "electromagnetic-science-pack",
      "Electromagnetic science pack",
      "intermediate-products",
      2,
      { supercapacitor: 1, accumulator: 1, electrolyte: 25, "holmium-solution": 25 },
      { "electromagnetic-science-pack": 1 }
    ),
  ],
  [
    "cryogenic-science-pack",
    new Item(
      "cryogenic-science-pack",
      "Cryogenic science pack",
      "intermediate-products",
      2,
      { ice: 3, "lithium-plate": 1, "fluoroketone-cold": 6 },
      { "cryogenic-science-pack": 1, "fluoroketone-hot": 3 }
    ),
  ],
  [
    "promethium-science-pack",
    new Item(
      "promethium-science-pack",
      "Promethium science pack",
      "intermediate-products",
      2,
      { "promethium-asteroid-chunk": 25, "quantum-processor": 1, "biter-egg": 10 },
      { "promethium-science-pack": 10 }
    ),
  ],
  [
    "rocket-silo",
    new Item(
      "rocket-silo",
      "Rocket silo",
      "space",
      0,
      { "steel-plate": 1000, concrete: 1000, pipe: 100, "processing-unit": 200, "electric-engine-unit": 200 },
      { "rocket-silo": 1 }
    ),
  ],
  [
    "cargo-landing-pad",
    new Item(
      "cargo-landing-pad",
      "Cargo landing pad",
      "space",
      0,
      { concrete: 200, "steel-plate": 25, "processing-unit": 10 },
      { "cargo-landing-pad": 1 }
    ),
  ],
  [
    "space-platform-foundation",
    new Item(
      "space-platform-foundation",
      "Space platform foundation",
      "space",
      1,
      { "steel-plate": 20, "copper-cable": 20 },
      { "space-platform-foundation": 1 }
    ),
  ],
  [
    "cargo-bay",
    new Item(
      "cargo-bay",
      "Cargo bay",
      "space",
      1,
      { "steel-plate": 20, "low-density-structure": 20, "processing-unit": 5 },
      { "cargo-bay": 1 }
    ),
  ],
  [
    "asteroid-collector",
    new Item(
      "asteroid-collector",
      "Asteroid collector",
      "space",
      1,
      { "low-density-structure": 20, "electric-engine-unit": 8, "processing-unit": 5 },
      { "asteroid-collector": 1 }
    ),
  ],
  [
    "crusher",
    new Item(
      "crusher",
      "Crusher",
      "space",
      1,
      { "low-density-structure": 20, "steel-plate": 10, "electric-engine-unit": 10 },
      { crusher: 1 }
    ),
  ],
  [
    "thruster",
    new Item(
      "thruster",
      "Thruster",
      "space",
      1,
      { "steel-plate": 10, "processing-unit": 10, "electric-engine-unit": 5 },
      { thruster: 1 }
    ),
  ],
  [
    "space-platform-starter-pack",
    new Item(
      "space-platform-starter-pack",
      "Space platform starter pack",
      "space",
      2,
      { "space-platform-foundation": 60, "steel-plate": 20, "processing-unit": 20 },
      { "space-platform-starter-pack": 1 }
    ),
  ],
  [
    "metallic-asteroid-crushing",
    new Item(
      "metallic-asteroid-crushing",
      "Metallic asteroid crushing",
      "space",
      4,
      { "metallic-asteroid-chunk": 1 },
      { "iron-ore": 20, "metallic-asteroid-chunk": 0.2 }
    ),
  ],
  [
    "carbonic-asteroid-crushing",
    new Item(
      "carbonic-asteroid-crushing",
      "Carbonic asteroid crushing",
      "space",
      4,
      { "carbonic-asteroid-chunk": 1 },
      { carbon: 10, "carbonic-asteroid-chunk": 0.2 }
    ),
  ],
  [
    "oxide-asteroid-crushing",
    new Item(
      "oxide-asteroid-crushing",
      "Oxide asteroid crushing",
      "space",
      4,
      { "oxide-asteroid-chunk": 1 },
      { ice: 5, "oxide-asteroid-chunk": 0.2 }
    ),
  ],
  [
    "metallic-asteroid-reprocessing",
    new Item(
      "metallic-asteroid-reprocessing",
      "Metallic asteroid reprocessing",
      "space",
      4,
      { "metallic-asteroid-chunk": 1 },
      { "metallic-asteroid-chunk": 0.4, "carbonic-asteroid-chunk": 0.2, "oxide-asteroid-chunk": 0.2 }
    ),
  ],
  [
    "carbonic-asteroid-reprocessing",
    new Item(
      "carbonic-asteroid-reprocessing",
      "Carbonic asteroid reprocessing",
      "space",
      4,
      { "carbonic-asteroid-chunk": 1 },
      { "carbonic-asteroid-chunk": 0.4, "metallic-asteroid-chunk": 0.2, "oxide-asteroid-chunk": 0.2 }
    ),
  ],
  [
    "oxide-asteroid-reprocessing",
    new Item(
      "oxide-asteroid-reprocessing",
      "Oxide asteroid reprocessing",
      "space",
      4,
      { "oxide-asteroid-chunk": 1 },
      { "oxide-asteroid-chunk": 0.4, "metallic-asteroid-chunk": 0.2, "carbonic-asteroid-chunk": 0.2 }
    ),
  ],
  [
    "advanced-metallic-asteroid-crushing",
    new Item(
      "advanced-metallic-asteroid-crushing",
      "Advanced metallic asteroid crushing",
      "space",
      4,
      { "metallic-asteroid-chunk": 1 },
      { "iron-ore": 10, "copper-ore": 4, "metallic-asteroid-chunk": 0.05 }
    ),
  ],
  [
    "advanced-carbonic-asteroid-crushing",
    new Item(
      "advanced-carbonic-asteroid-crushing",
      "Advanced carbonic asteroid crushing",
      "space",
      4,
      { "carbonic-asteroid-chunk": 1 },
      { carbon: 5, sulfur: 2, "carbonic-asteroid-chunk": 0.05 }
    ),
  ],
  [
    "advanced-oxide-asteroid-crushing",
    new Item(
      "advanced-oxide-asteroid-crushing",
      "Advanced oxide asteroid crushing",
      "space",
      4,
      { "oxide-asteroid-chunk": 1 },
      { ice: 3, calcite: 2, "oxide-asteroid-chunk": 0.05 }
    ),
  ],
  [
    "thruster-fuel",
    new Item("thruster-fuel", "Thruster fuel", "space", 5, { carbon: 2, water: 10 }, { "thruster-fuel": 75 }),
  ],
  [
    "advanced-thruster-fuel",
    new Item(
      "advanced-thruster-fuel",
      "Advanced thruster fuel",
      "space",
      5,
      { carbon: 2, calcite: 1, water: 100 },
      { "thruster-fuel": 1500 }
    ),
  ],
  [
    "thruster-oxidizer",
    new Item(
      "thruster-oxidizer",
      "Thruster oxidizer",
      "space",
      5,
      { "iron-ore": 2, water: 10 },
      { "thruster-oxidizer": 75 }
    ),
  ],
  [
    "advanced-thruster-oxidizer",
    new Item(
      "advanced-thruster-oxidizer",
      "Advanced thruster oxidizer",
      "space",
      5,
      { "iron-ore": 2, calcite: 1, water: 100 },
      { "thruster-oxidizer": 1500 }
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
    "railgun",
    new Item(
      "railgun",
      "Railgun",
      "combat",
      0,
      { "tungsten-plate": 10, superconductor: 10, "quantum-processor": 20, "fluoroketone-cold": 10 },
      { railgun: 1 }
    ),
  ],
  [
    "teslagun",
    new Item(
      "teslagun",
      "Tesla gun",
      "combat",
      0,
      { "holmium-plate": 10, superconductor: 10, "plastic-bar": 30, electrolyte: 100 },
      { teslagun: 1 }
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
      { radar: 1, calcite: 1, "tungsten-plate": 4, explosives: 8 },
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
      { "processing-unit": 10, explosives: 10, "uranium-235": 100 },
      { "atomic-bomb": 1 }
    ),
  ],
  [
    "capture-robot-rocket",
    new Item(
      "capture-robot-rocket",
      "Capture bot rocket",
      "combat",
      1,
      { "flying-robot-frame": 1, "steel-plate": 2, bioflux: 20, "processing-unit": 2 },
      { "capture-robot-rocket": 1 }
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
  [
    "railgun-ammo",
    new Item(
      "railgun-ammo",
      "Railgun ammo",
      "combat",
      1,
      { "steel-plate": 5, "copper-cable": 10, explosives: 2 },
      { "railgun-ammo": 1 }
    ),
  ],
  [
    "tesla-ammo",
    new Item(
      "tesla-ammo",
      "Tesla ammo",
      "combat",
      1,
      { supercapacitor: 1, "plastic-bar": 1, electrolyte: 10 },
      { "tesla-ammo": 1 }
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
      { "distractor-capsule": 4, "steel-plate": 4, "processing-unit": 1 },
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
        "efficiency-module": 100,
        "speed-module": 100,
        "processing-unit": 60,
        "electric-engine-unit": 40,
        "low-density-structure": 30,
      },
      { "power-armor-mk2": 1 }
    ),
  ],
  [
    "mech-armor",
    new Item(
      "mech-armor",
      "Mech armor",
      "combat",
      3,
      { "power-armor-mk2": 1, "holmium-plate": 200, "processing-unit": 100, superconductor: 50, supercapacitor: 50 },
      { "mech-armor": 1 }
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
    "fusion-reactor-equipment",
    new Item(
      "fusion-reactor-equipment",
      "Portable fusion reactor",
      "combat",
      4,
      {
        "fission-reactor-equipment": 1,
        "fusion-power-cell": 10,
        "tungsten-plate": 250,
        "carbon-fiber": 100,
        supercapacitor: 25,
        "quantum-processor": 250,
      },
      { "fusion-reactor-equipment": 1 }
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
    "battery-mk3-equipment",
    new Item(
      "battery-mk3-equipment",
      "Personal battery MK3",
      "combat",
      4,
      { "battery-mk2-equipment": 5, supercapacitor: 10 },
      { "battery-mk3-equipment": 1 }
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
      { "personal-roboport-equipment": 5, "processing-unit": 50, superconductor: 50 },
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
    "toolbelt-equipment",
    new Item(
      "toolbelt-equipment",
      "Toolbelt equipment",
      "combat",
      5,
      { "advanced-circuit": 3, "carbon-fiber": 10 },
      { "toolbelt-equipment": 1 }
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
      { "tungsten-plate": 60, "refined-concrete": 60, "iron-gear-wheel": 40, "processing-unit": 10 },
      { "artillery-turret": 1 }
    ),
  ],
  [
    "rocket-turret",
    new Item(
      "rocket-turret",
      "Rocket turret",
      "combat",
      8,
      { "rocket-launcher": 4, "processing-unit": 4, "carbon-fiber": 20, "steel-plate": 20, "iron-gear-wheel": 20 },
      { "rocket-turret": 1 }
    ),
  ],
  [
    "tesla-turret",
    new Item(
      "tesla-turret",
      "Tesla turret",
      "combat",
      8,
      { teslagun: 1, supercapacitor: 10, "processing-unit": 10, superconductor: 50, electrolyte: 500 },
      { "tesla-turret": 1 }
    ),
  ],
  [
    "railgun-turret",
    new Item(
      "railgun-turret",
      "Railgun turret",
      "combat",
      8,
      {
        "quantum-processor": 100,
        "tungsten-plate": 30,
        superconductor: 50,
        "carbon-fiber": 20,
        "fluoroketone-cold": 100,
      },
      { "railgun-turret": 1 }
    ),
  ],
]) as ReadonlyMap<string, Item>;
