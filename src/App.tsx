import { useState } from 'react';
import './style.css';
import addIcon from './assets/add.svg';
import trashIcon from './assets/trash.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="header-row">
        <div className='btn'>
          <img src={addIcon} alt="Add" />
        </div>
        <div className='btn'>
          <img src={trashIcon} alt="Delete" />
        </div>
      </div>
    </>
  );
}

export default App
