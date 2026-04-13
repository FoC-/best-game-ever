import { EntityNames } from "./consts";
import { Directions } from "./consts";

export default abstract class Entity {
  static global_index = 0;
  public entity_number = Entity.global_index;

  constructor(
    public readonly name: EntityNames,
    public position: TEntityPosition,
    public direction?: Directions,
    public quality?: Quality,
    public player_description?: string
  ) {
    Entity.global_index++; // todo: hack global entity counter
  }
}

export class ArithmeticCombinator extends Entity {
  constructor(
    position: TEntityPosition,
    direction: Directions,
    public control_behavior: TArithmeticCombinatorControlBehavior
  ) {
    super(EntityNames.ARITHMETIC_COMBINATOR, position, direction);
  }
}

export class ConstantCombinator extends Entity {
  constructor(
    position: TEntityPosition,
    direction: Directions,
    public control_behavior: TConstantCombinatorControlBehavior
  ) {
    super(EntityNames.CONSTANT_COMBINATOR, position, direction);
  }
}

export class DeciderCombinator extends Entity {
  constructor(
    position: TEntityPosition,
    direction: Directions,
    public control_behavior: TDeciderCombinatorControlBehavior
  ) {
    super(EntityNames.DECIDER_COMBINATOR, position, direction);
  }
}

export class Lamp extends Entity {
  constructor(
    position: TEntityPosition,
    public control_behavior: TLampControlBehavior
  ) {
    super(EntityNames.LAMP, position);
  }
}
