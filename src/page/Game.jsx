import React, { useEffect } from 'react'

import GameManager from 'manager/game/GameManager';
import TextBuffer from 'component/ui/TextBuffer'
import DialogBox from 'component/ui/DialogBox'
import Topbar from 'component/ui/Topbar'

import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: absolute;
`

const Game = (props) => {
  useEffect(() => {
    GameManager.init()
   }, [])

  return (
    <div>
      <Topbar />
      <Container>
        <TextBuffer />
        <DialogBox />
      </Container>
    </div>
  )
}

export default Game
