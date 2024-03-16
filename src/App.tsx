import { useState } from 'react'
import './style.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="header-row">
        <div className='btn'>+</div>
        <div className='btn'>-</div>
      </div>
    </>
  );
}

export default App
