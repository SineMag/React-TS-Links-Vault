import React from 'react'

export default function Rectangle({color}) {
  return (
    <div className='rectangle' style={{
      backgroundColor: color,
      width: '90vh',
      height: '30vh',
      borderRadius: '4%'
    }}>
    </div>
  )
}
