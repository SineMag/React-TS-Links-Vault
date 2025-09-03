import React from 'react'

export default function Rectangle({color}) {
  return (
    <div className='rectangle' style={{
      backgroundColor: color,
      width: '30vh',
      height: '60vh',
      borderRadius: '5%'
    }}>
    </div>
  )
}
