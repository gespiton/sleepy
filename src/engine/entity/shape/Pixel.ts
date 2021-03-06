import { RenderShape } from '../'
import { Attributes } from '../IEntity'
import { setupCtx } from './utils'

export type PixelProps = { x: number; y: number; attributes?: Attributes }

export class Pixel implements RenderShape {
  position: EntityPosition
  attributes: Attributes
  constructor(args: PixelProps) {
    this.position = { x: args.x, y: args.y }
    this.attributes = args.attributes
  }
  drawSelf(ctx: CanvasRenderingContext2D, position: EntityPosition) {
    if (this.attributes) {
      setupCtx(this.attributes, ctx)
    }
    ctx.fillRect(
      position.x + this.position.x,
      position.y + this.position.y,
      1,
      1
    )
  }
}
