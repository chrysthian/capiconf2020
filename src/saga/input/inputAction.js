import { ActionEnum } from 'enum/ActionEnum.js';

export const keyDown = (payload) => ({
    type: ActionEnum.KEYBOARD,
    payload,
})

export const keyUp = (payload) => ({
    type: ActionEnum.KEYBOARD,
    payload,
})

export const mouseMove = (payload) => ({
    type: ActionEnum.MOUSE_MOVE,
    payload,
})

export const mouseDown = (payload) => ({
    type: ActionEnum.MOUSE_PRESSED,
    payload,
})

export const mouseUp = (payload) => ({
    type: ActionEnum.MOUSE_PRESSED,
    payload,
})
