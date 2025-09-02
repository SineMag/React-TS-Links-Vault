import React from 'react'

export default function Flexbox() {
  return (
    <>
   <div className='topSection' style={{
    display:'flex',
    flexDirection: 'row',
    alignItems: 'start',
   }}>
<div>

  {/* yellowRectangle */}
   <div >
  <div className='yellowRectangle' style={{
    backgroundColor:"#F9A73D",
    width: '30vh',
  height: '48vh',
  }}></div>
  </div>

    {/* two lines */}
  <div>
    <div className='lineOne' style={{
      border: '1px solid black',
      borderRadius: '50%',
      width: '30vh',
      height: '30vh',
    }}></div>

    
  <div className='lineTwo'></div>
  </div>
</div>
</div>
    </>
  )
}


//  <div className='main' style={{display:"inline-block" }}>
//       <div className='yellowRectangle' style={{backgroundColor:"yellow", width:"20vh",height:"40vh", display:"inline-block", justifyContent:"center"}}></div>
//         {/* <div className='secondDiv' style={{backgroundColor:"blue", border:'1px solid black', width:"40vh",height:"20vh", display:"inline-block", justifyContent:"center"}}></div> */}

//         <div className='firstDiv' style={{backgroundColor:"green", width:"40vh",height:"20vh", display:"inline-block", justifyContent:"center"}}></div>
//         <div className="dot" style={{backgroundColor:"red", width:"80px",height:"80px", display:"inline-block",borderRadius:"50%" }}></div>
//         <div className="dot" style={{backgroundColor:"green", width:"80px",height:"80px", display:"inline-block",borderRadius:"50%" }}></div>
//     </div>