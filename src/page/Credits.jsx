import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  padding: 40px;
`

const Credits = (props) => {
  return (
    <div>
      <Container>
        <h1>CapiConf 2020</h1>
        
        <h2>MIT License</h2>

        <p>Copyright (c) 2020 Chrysthian Akihiro</p>

        <p>Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:</p>

        <p>The above copyright notice and this permission notice shall be included in all
        copies or substantial portions of the Software.</p>

        <p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
        SOFTWARE.</p>
      </Container>
      <Container>
        <h2>Copyright 2012 The Press Start 2P Project Authors (cody@zone38.net), with Reserved Font Name "Press Start 2P".</h2>

        <p>This Font Software is licensed under the SIL Open Font License, Version 1.1.</p>
        <p>This is available with a FAQ at: 
          <a href='http://scripts.sil.org/OFL'>http://scripts.sil.org/OFL</a>
        </p>
      </Container>

      <Container>
        <h2>Artwork created by Luis Zuno (@ansimuz)</h2>
        <p> at: <a href='https://ansimuz.itch.io/'>https://ansimuz.itch.io/</a></p>
      </Container>
    </div>
  )
}

export default Credits
