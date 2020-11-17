import { store } from 'store'
import { keyDown, keyUp } from 'saga/input/inputAction'

class InputManager {
  constructor() {

    document.addEventListener('keyup', (event) => {
      this.inputKeyUp(event)
    })

    document.addEventListener('keydown', (event) => {
      this.inputKeyDown(event)
    })

    store.subscribe(() => {
      this.keyboard = store.getState().keyboard
      this.mouse = store.getState().mouse
    })
  }

  inputKeyDown = (event) => {
    if (this.keyboard && this.keyboard.pressed[event.key] !== undefined) {
      this.keyboard.pressed[event.key] = true
      store.dispatch(keyDown(this.keyboard.pressed))
    }
  }

  inputKeyUp = (event) => {
    if (this.keyboard && this.keyboard.pressed[event.key]) {
      this.keyboard.pressed[event.key] = false
      store.dispatch(keyUp(this.keyboard.pressed))
    }
  }

  keyPressed = key => {
    if (this.keyboard) {
      return this.keyboard.pressed[key]
        ? null
        : this.keyboard.pressed[key]
    }
    return null
  }

  mousePosition = () => {
    return this.mouse.position
  }

  buttonPressed = button => {
    if (this.mouse) {
      return this.mouse.pressed[button] === 0
        ? null
        : this.mouse.pressed[button]
    }
    return null
  }
}

export default InputManager
