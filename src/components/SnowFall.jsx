import React from 'react'
import ReactDOM from 'react-dom'
import Snowfall from 'react-snowfall'

function Snow() {
  return (
    <Snowfall
      flakesCount={100}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
      snowflakeCount={50}
      minSize={1}
      maxSize={3}
      speed={0.5}
      wind={0}
    />
  )
}



export default Snowfall;
