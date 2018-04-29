import React from 'react'

const Index = () => (
  <div style={styles.index}>
    <h1>Hello World</h1>
    <p>Click a link to generate a coloured background.</p>
  </div>
)

let styles = {}
styles.index = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  marginTop: '7%',
  textAlign: 'center'
}

export default Index