import React from 'react'

export default function Circle({color}) {
  return (
    <div className='circle' style={{
      backgroundColor: color,
      width: '30vh',
      height: '30vh',
      borderRadius: '50%'
    }}>
    </div>
  )
}


