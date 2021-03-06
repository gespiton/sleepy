import { Renderer, IRenderer } from '../renderer'
import { InputDispatcher, Listener } from '../input_dispatcher'
import { CollisionDetector } from '../collision_detector'
import { IEntity, IEntityFactory, EntityFactory } from '../entity'

export type WorldStatus = 'playing' | 'stop' | 'pause'

class World {
  private entities: IEntity[]
  private renderer: IRenderer
  private inputDispatcher: InputDispatcher
  private inputSource: HTMLElement
  private status: WorldStatus
  private canvas: HTMLCanvasElement
  collisionDetector: CollisionDetector

  entityFactory: IEntityFactory
  millionSecondesSinceStart: number
  dimension: { width: number; height: number }
  constructor(inputSource: HTMLElement, canvas: HTMLCanvasElement) {
    this.inputSource = inputSource
    this.canvas = canvas
    this.renderer = new Renderer(this)
    this.inputDispatcher = InputDispatcher.initialize(this)
    this.collisionDetector = new CollisionDetector()
    this.entityFactory = new EntityFactory(this)
    this.entities = []
  }

  getEntities() {
    return this.entities
  }

  getInputSource() {
    return this.inputSource
  }

  getCanvas() {
    return this.canvas
  }

  addEntity(entity: IEntity) {
    this.entities.push(entity)
  }

  removeEntity(entity: IEntity) {
    this.entities = this.entities.filter((i) => i !== entity)
  }

  addEventListener(listen: Listener) {
    return this.inputDispatcher.addListener(listen)
  }

  removeEventListener(id: number) {
    return this.inputDispatcher.removeListener(id)
  }

  start() {
    requestAnimationFrame(() => {
      this.collisionDetector.detectCollision()
      this.renderer.render()
      this.start()
    })
  }

  pause() {}

  stop() {}
}

export { World }
