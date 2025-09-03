import './App.css'
import Bottom from './components/Circle.js'
import Middle from './components/Square.js'
import Top from './components/HorizontalRectangle.js'
import Rectangle from './components/Rectangle.js'
import Square from './components/Square.js'
import Circle from './components/Circle.js'
import HorizontalRectangle from './components/HorizontalRectangle.js'
import LargestBar from './components/LargestBar.js'

function App() {
  

  return (
    <>
    <div >
      <div style={{border:'1px solid black', display:'flex', flexDirection:'column'}}>
        
        <Rectangle color="#F9A73D"  />
        <div style={{display: 'flex' }}>
          <Circle color="red" />
          <Square color="#D9A0D9" />
          <HorizontalRectangle color='blue' />
        </div>
        <div style={{ display: 'flex' }}>
          <HorizontalRectangle color="green" />
          <Circle color='#D9A0D9' />
          <Circle color='green' />
        </div>


            <div style={{display: 'flex'}} >
          <HorizontalRectangle color='blue' />
          <Circle color='#B6FF70' />
          <HorizontalRectangle color='#F9A73D' />
    </div>
    <div style={{display: 'flex'}} >
          <Circle color='#62C2E8' />
          <LargestBar color='red' style={{width: '90%'}} />
          <Circle color='blue' />


          </div>
      </div>
      
    </div>
    </>
  )
}

export default App
