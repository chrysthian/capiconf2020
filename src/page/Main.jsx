import React from 'react'
import { Row, Col } from 'antd'

const menuItem = (label, type, disabled, callback) => {
  return (
    <Row>
      <Col span={9}></Col>
      <Col span={6}>
        <div
          className="btn from-left"
          onClick={callback}>
          {label}
        </div>
      </Col>
      <Col span={9}></Col>
    </Row>
  )
}

function MainMenu(props) {
  return (
    <span>
      <div className='center vh25 mainBg'>
        <Row className='App-header'>
          <Col span={6}></Col>
          <Col span={12}>CAPICONF YAHOK 2020</Col>
          <Col span={6}></Col>
        </Row>
      </div>
      <div className='vh75 mainBg'>
        {menuItem('Start Game', 'primary', false, () => {
          props.history.push(`/game`)
        })}

        {menuItem('Credits', null, false)}
      </div>
    </span>
  )
}

export default MainMenu
