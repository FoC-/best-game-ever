declare type CompareOperations = "=" | "!=" | "<" | ">" | "<=" | ">=";
declare type ArithmeticOperations = "+" | "-" | "*" | "/" | "%" | "^" | "<<" | ">>" | "AND" | "OR" | "XOR";
declare type SignalTypes = "fluid" | "item" | "virtual" | "title" | "recipe";
declare type Quality = undefined | "uncommon" | "rare" | "epic" | "legendary";

declare type TEntityConnectionPort = 1 | 2 | 3 | 4 | 5;
declare type TWire = [number, TEntityConnectionPort, number, TEntityConnectionPort];

declare enum TileNames {
  CONCRETE = "concrete",
  STONE_PATH = "stone-path",
  HAZARD_CONCRETE_LEFT = "hazard-concrete-left",
  REFINED_CONCRETE = "refined-concrete",
  REFINED_HAZARD_CONCRETE_LEFT = "refined-hazard-concrete-left",
  SPACE_PLATFORM_FOUNDATION = "space-platform-foundation",
}

declare type TEntityPosition = {
  x: number;
  y: number;
};

declare type TSignal = {
  type?: SignalTypes;
  name: string;
  quality?: Quality;
};

declare type TTile = {
  position: TEntityPosition;
  name: TileNames;
};

declare type TIcon = {
  signal: TSignal;
  index: number;
};

declare type OutputNetwork = {
  red: boolean;
  green: boolean;
};

declare type InputSignal =
  | {
      first_signal: TSignal;
      comparator?: CompareOperations;
      constant?: number;
      first_signal_networks?: OutputNetwork;
    }[]
  | TSignal;

declare type OutputSignal =
  | {
      signal: TSignal;
      networks?: OutputNetwork;
    }[]
  | TSignal;

declare type ArithmeticConditionBase = {
  first_signal: TSignal;
  operation: ArithmeticOperations;
  output_signal: TSignal;
};

declare type ArithmeticConditionOutputSignal = ArithmeticConditionBase & {
  second_signal: TSignal;
  second_constant?: never;
};

declare type ArithmeticConditionOutputConstant = ArithmeticConditionBase & {
  second_signal?: never;
  second_constant: number;
};

declare type TArithmeticCombinatorControlBehavior = {
  arithmetic_conditions: ArithmeticConditionOutputSignal | ArithmeticConditionOutputConstant;
};

type SectionFilter = {
  index: number;
  type?: "virtual" | undefined; // real signal has no type
  name: string; // todo entity name
  quality?: Quality;
  comparator: "="; // constant combinator always use '='
  count: number;
};

declare type TConstantCombinatorControlBehaviorSectionsSection = {
  index: number;
  active?: false | undefined; // default to true, so value is only false
  filters: SectionFilter[];
  group: string;
};

declare type TConstantCombinatorControlBehaviorSections = {
  sections: TConstantCombinatorControlBehaviorSectionsSection[];
};

declare type TConstantCombinatorControlBehavior = {
  sections: TConstantCombinatorControlBehaviorSections;
};

declare type TDeciderCombinatorControlBehavior = {
  decider_conditions: TDeciderCombinatorControlBehaviorDeciderConditions;
};

declare type TDeciderCombinatorControlBehaviorDeciderConditions = {
  conditions: InputSignal;
  outputs: OutputSignal;
};

declare type CircuitConditionBase = {
  first_signal: TSignal;
  comparator: CompareOperations;
};

declare type CircuitConditionConstant = CircuitConditionBase & {
  constant: number;
  second_signal?: never;
};

declare type CircuitConditionSignal = CircuitConditionBase & {
  constant?: never;
  second_signal: TSignal;
};

declare type TLampControlBehavior = {
  circuit_enabled: boolean;
  circuit_condition: CircuitConditionConstant | CircuitConditionSignal;
  use_colors: boolean;
  rgb_signal?: TSignal;
  color_mode: 1 | 2;
};
