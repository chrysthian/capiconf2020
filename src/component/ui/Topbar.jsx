import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Container = styled.div`
  color: #fff;
  background-color: rgba(100, 100, 100, 0.7);
  width: 100vw;
  height: 50px;
  position: absolute !important;
  text-align: center;
`

function Topbar(props) {
  return (
    <Container>
      Score: {props.score}
    </Container>
  )
}

const mapStateToProps = store => ({
  score: store.score.value
})

export default connect(mapStateToProps, null)(Topbar)
