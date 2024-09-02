import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(100);

  return (
    <>
     <div className='wrapper'>
      <div className="child">123</div>
      <div className="child">456</div>
      <div className="child">789</div>
      <div className="child"></div>
      <div className="child"></div>
      <div className="child">4444444</div>
      <div className="child">890</div>
      <div className="child">999999999999999999999999999999999</div>
     </div>
    </>
  )
}

export default App
