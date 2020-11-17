import React, {useEffect, useState} from 'react'
import { useTextBuffer } from 'hook/useTextBuffer'
import { typewriter } from 'helper/typewriter'
import { useDispatch, useSelector } from 'react-redux'
import { createTimer, startTimer } from 'saga/timer/timerAction'
import * as timerSelector from 'saga/timer/timerSelector'
import styled from 'styled-components'

const Container = styled.div`
  height: 5em;
  top: calc(100% - 5.5em);
  overflow: hidden;
`

const DialogBox = () => {
  const context = useTextBuffer()
  const dispatch = useDispatch()
  const { text, setCurrentText } = context
  const [timerId, setTimerId] = useState(-1)
  
  // TODO: make some basic timers for core components
  const idleTimers = useSelector(timerSelector.getIdleTimers)

  useEffect( () => {
    dispatch(createTimer({ 
      targetTime: 840,
    }))
  }, [dispatch])
 
  useEffect( () => {
    if(idleTimers[0] !== -1 && timerId === -1){
      setTimerId(idleTimers[0])
      dispatch(startTimer(idleTimers[0]))
    }
  }, [dispatch, idleTimers, timerId])

  const totalTime = useSelector((state) => timerId !== -1 ? state.timer.timers[timerId].totalTime : 0 )

  useEffect( () => {
    setCurrentText( 
      typewriter(
        "Controles: WASD... GO GO GO!",
        totalTime,
        30,
        document.getElementById('dialog-box') //break only on a new line
      )
    )
  }, [setCurrentText, totalTime])

  return (
    <Container className="nes-container is-dark" id="dialog-box">
      {text}
    </Container>
  )
}

export default DialogBox
