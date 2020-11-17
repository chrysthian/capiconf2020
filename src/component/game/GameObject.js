import Vector3 from 'core/math/Vector3'

export default class GameObject {
  constructor(
    position = new Vector3(),
    direction = new Vector3(),
    scale = new Vector3(),
  ) {
    this.position = position
    this.direction = direction
    this.scale = scale

    this.isVisible = true
    this.isActive = false
  }
}