import Vector3 from 'core/math/Vector3'
import * as PIXI from 'pixi.js'
import ship from 'asset/image/ship.png'
import enemy from 'asset/image/enemy-big.png'

import { store } from 'store'
import { score } from 'saga/score/scoreAction'

const ENEMIES = window.screen.width / 25

export class GameScene {
  constructor() {
    this.container = new PIXI.Container()
    this.elapsedSpriteAnimation = 0
    this.elapsedSeconds = 0
    this.score = 0
    this.ship = undefined
    this.enemy = undefined

    this.enemies = []
  }

  load = (loader, stage, callback) => {
    loader
      .add([ship, enemy])
      .load((loader, resources) => {
        this.loading = false
        this.resources = resources
        this.stage = stage

        if (!this.ship) {
          this.createShip()
          this.createEnemies()
          this.stage.addChild(this.container)
        }
      })

    if (callback)
      callback()
  }

  createShip = () => {
    const sprite = new PIXI.TilingSprite(
      this.resources[ship].texture,
      64,
      64,
    )

    sprite.x = 500
    sprite.y = 500

    this.ship = sprite

    this.container.addChild(sprite)
  }

  createEnemies = () => {
    for (let i = 0, len = ENEMIES; i < len; i++) {
      const sprite = new PIXI.TilingSprite(
        this.resources[enemy].texture,
        64,
        64,
      )

      sprite.x = Math.random() * window.screen.width
      sprite.y = Math.random() * -window.screen.height

      this.enemies.push(sprite)
      this.container.addChild(sprite)
    }

  }

  resetEnemies = () => {
    for (let i = 0, len = ENEMIES; i < len; i++) {
      this.enemies[i].x = Math.random() * window.screen.width
      this.enemies[i].y = Math.random() * -window.screen.height
    }
  }

  update = (ticker, keyboard) => {
    let speed = 300 * (1 / ticker.FPS);

    if (this.elapsedSeconds > 1000 && this.ship) {
      this.elapsedSeconds = 0
      this.score++
      store.dispatch(score(this.score))
    } else {
      this.elapsedSeconds += ticker.elapsedMS
    }

    if (this.elapsedSpriteAnimation > 100 && this.ship) {
      this.ship.tilePosition.y = this.ship.tilePosition.y === 64 ? 0 : 64
      for (let i = 0, len = ENEMIES; i < len; i++) {
        this.enemies[i].tilePosition.x = this.enemies[i].tilePosition.x === 64 ? 0 : 64
      }
      this.elapsedSpriteAnimation = 0
    } else {
      this.elapsedSpriteAnimation += ticker.elapsedMS
    }

    for (let i = 0, len = ENEMIES; i < len; i++) {
      if (this.enemies[i]) {
        this.enemies[i].y += speed

        if (this.enemies[i].y > window.screen.height) {
          this.enemies[i].x = Math.random() * window.screen.width
          this.enemies[i].y = Math.random() * -window.screen.height
        }
      }
    }

    if (this.ship) {
      if (keyboard.pressed.w) {
        this.ship.y -= speed
      }

      if (keyboard.pressed.s) {
        this.ship.y += speed
      }

      if (keyboard.pressed.a) {
        this.ship.x -= speed
      }

      if (keyboard.pressed.d) {
        this.ship.x += speed
      }

      this.checkCollisions()
    }
  }

  reset = () => {
    this.ship.x = 500
    this.ship.y = 500
    this.resetEnemies()
  }

  checkCollisions = () => {
    const shipPos = new Vector3(this.ship.x, this.ship.y, 0)
    const enemyPos = new Vector3()

    for (let i = 0, len = ENEMIES; i < len; i++) {
      enemyPos.set(this.enemies[i].x, this.enemies[i].y, 0)
      if (enemyPos.distanceTo(shipPos) < 48) {
        this.resetEnemies()
        this.score = 0
        store.dispatch(score(this.score))
      }
    }
  }
}
