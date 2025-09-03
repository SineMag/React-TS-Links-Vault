import './App.css'
import Bottom from './components/Circle.js'
import Middle from './components/Square.js'
import Top from './components/HorizontalRectangle.js'
import Rectangle from './components/Rectangle.js'
import Square from './components/Square.js'
import Circle from './components/Circle.js'
import HorizontalRectangle from './components/HorizontalRectangle.js'

function App() {
  

  return (
    <>
    <div style={{display: 'flex',  justifyContent: 'center'}}>
      
      <div style={{border:'1px solid black'}}>
        
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
          <HorizontalRectangle color='red' />
          <Circle color='blue' />


          </div>
      </div>
      
    </div>
    </>
  )
}

export default App
