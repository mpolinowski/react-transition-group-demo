import React from 'react'

const RGB = ({ match }) => {
  const { params } = match
  return (
    <div style={{
      ...styles.rgb,
      background: `rgb(${params.r}, ${params.g}, ${params.b})`
    }}>rgb({params.r}, {params.g}, {params.b})</div>
  )
}

let styles = {}
styles.rgb = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  color: 'white',
  paddingTop: '20px',
  fontSize: '30px'
}

export default RGB