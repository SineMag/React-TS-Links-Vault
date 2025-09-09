import React from 'react'

export default function Searchbar() {
  return (
    <div className='searchbar' style={{
        border:'1px solid #347fc4',
        width: '80%',
        height:'5%',
        marginTop:'10px',
        borderRadius:'15px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'end'
 
    }}>
        <div className='searchButton' style={{
            border: '1px solid black',
            width:'1.3rem',
            height:'1.3rem',
            borderRadius:'50%',
            position:'relative',
            display:'flex',
            justifyContent:'end',
            marginRight:'0px',
            boxShadow:'1px 0px 0 1px'

        }}>

        </div>
    </div>
  )
}
