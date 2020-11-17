import generateEnum from 'helper/generateEnum'

export const ActionEnum = generateEnum([
  'HEARTBEAT',

  'MOUSE_MOVE',
  'MOUSE_PRESSED',

  'KEYBOARD',

  'DIALOG_EXECUTE',
  'DIALOG_CLEAR',
  'DIALOG_CLOSE',
  'DIALOG_SET_STEP',
  'DIALOG_NEXT_STEP',
  'DIALOG_PREV_STEP',

  'TIMER_CREATE',
  'TIMER_START',
  'TIMER_SET',
  'TIMER_SET_DATA',
  'TIMER_PAUSE',
  'TIMER_DELETE',
  'TIMER_UPDATE',
  'TIMER_RESET',

  'SCORE',
])
