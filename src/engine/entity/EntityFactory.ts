import { World } from '../world'
import { IEntityFactory, Entity, EntityGroup } from '.'
import { RenderObject } from './IEntity'

class EntityFactory implements IEntityFactory {
  private world: World
  constructor(world: World) {
    this.world = world
  }

  createEntity(arg: RenderObject) {
    const e = new Entity(this.world, arg)
    this.world.addEntity(e)
    return e
  }

  createEntityGroup(position: EntityPosition) {
    // TODO: support to take eneties as second argument
    const e = new EntityGroup(this.world, position)
    this.world.addEntity(e)
    return e
  }

  getWorld() {
    return this.world
  }
}

export { EntityFactory }
