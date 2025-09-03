import React from 'react'

export default function Square({color}) {
  return (
    <div className='square' style={{
      backgroundColor: color,
      width: '30vh',
      height: '30vh',
      borderRadius: '5%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
    </div>
  )
}
