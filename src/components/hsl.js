import React from 'react'

const HSL = ({ match }) => {
  const { params } = match
  return (
    <div style={{
      ...styles.hsl,
      background: `hsl(${params.h}, ${params.s}%, ${params.l}%)`
    }}>hsl({params.h}, {params.s}%, {params.l}%)</div>
  )
}

let styles = {}
styles.hsl = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  color: 'white',
  paddingTop: '20px',
  fontSize: '30px'
}

export default HSL