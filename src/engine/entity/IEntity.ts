import { World } from '../world'

export type Attributes = {
  color: string
}

export interface RenderShape {
  drawSelf: (ctx: CanvasRenderingContext2D, position: EntityPosition) => void
}

export type RenderObject = {
  position: EntityPosition
  layer: Layer
  image: RenderShape[]
  collision?: Collision
}

export interface IEntity {
  getRenderObjects: () => RenderObject[]
  getPosition: () => EntityPosition
  setPosition: (position: EntityPosition) => IEntity
  getWorld: () => World
  addEventListener: (arg: EventListenerOption) => number
  removeEventListener: (id: number) => void
  getCollision: () => Collision
}
