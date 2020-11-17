import * as PIXI from 'pixi.js'
import { store } from 'store'
import { heartbeat } from 'saga/heartbeat/heartbeatAction'

import AudioManager from 'manager/game/AudioManager'
import InputManager from 'manager/game/InputManager'

import { GameScene } from 'scene/GameScene'

const defaultProps = {
  width: window.innerWidth,
  height: window.innerHeight - 5,
  backgroundColor: 0x000000,
  resolution: window.devicePixelRatio || 1,
  sharedTicker: true,
  autoResize: true,
}

class GameManager {
  constructor(props = defaultProps) {
    this.audioManager = new AudioManager()
    this.inputManager = new InputManager()

    this.loader = PIXI.Loader.shared
    this.loading = true

    this.pixi = new PIXI.Application(props)
    this.graphics = new PIXI.Graphics()
    this.timer = PIXI.Ticker.shared

    this.scene = new GameScene()

    this.timer.add(delta => {
      if (!this.loading) {
        this.update()
      }
    })

  }

  init = () => {
    this.loading = true
    document.body.appendChild(this.pixi.view)

    window.addEventListener('resize', () => {
      this.pixi.renderer.resize(window.innerWidth, window.innerHeight - 5);
    })

    window.addEventListener('hashchange', (e) => {
      if (e.oldURL === 'http://localhost:3000/#/game') {
        const canvas = document.getElementsByTagName("canvas")
        if (canvas.length > 0) {
          this.loader.reset()
          PIXI.utils.clearTextureCache()
          document.body.removeChild(canvas[0])
        }
      }
    })

    this.audioManager.bgm()

    this.load()
  }

  load = () => {
    this.loader.reset()
    this.scene.load(
      this.loader,
      this.pixi.stage,
      () => {
        this.loading = false
      }
    )

  }

  update = () => {
    const payload = {
      elapsedMs: this.timer.elapsedMS,
      fps: this.timer.FPS,
    }

    this.scene.update(this.timer, this.inputManager.keyboard)
    store.dispatch(heartbeat(payload))
  }
}

const Singleton = (() => {
  let instance

  return {
    getInstance: function () {
      if (!instance) {
        instance = new GameManager()
      }
      return instance
    }
  }
})()

export default Singleton.getInstance()
