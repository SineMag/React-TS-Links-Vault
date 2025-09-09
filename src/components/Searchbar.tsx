import React from 'react'

export default function Searchbar() {
  return (
    <div className='searchbar' style={{
        border:'1px solid #347fc4',
        width: '40vw',
        height:'3vh',
        marginTop:'10px',
        borderRadius:'15px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'end'
 
    }}>
        <div className='searchButton' style={{
            border: '1px solid black',
            width:'3vw',
            height:'3vh',
            borderRadius:'50%',
            position:'relative',
            display:'flex',
            justifyContent:'end'

        }}>

        </div>
    </div>
  )
}
