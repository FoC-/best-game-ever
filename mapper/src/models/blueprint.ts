import { Versions } from "./consts";
import Entity from "./entities";

export default class Blueprint {
  public readonly item = "blueprint";
  public readonly version = Versions.LATEST;

  constructor(
    public icons: TIcon[],
    public entities: Entity[],
    public tiles?: TTile[],
    public wires?: TWire[]
  ) {
    Entity.global_index = 0; // todo: hack global counter for entities reset on each blueprint creation
  }

  public static connect(
    entity1: Entity,
    fromPort: TEntityConnectionPort,
    entity2: Entity,
    toPort: TEntityConnectionPort
  ): TWire {
    return [entity1.entity_number, fromPort, entity2.entity_number, toPort];
  }
}
