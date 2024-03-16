import { useState } from 'react';
import './style.css';
import addIcon from './assets/add.svg';
import trashIcon from './assets/trash.svg';
import googleIcon from './assets/google.ico';



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="header-row">
        <div className='btn'>
          <img src={addIcon} alt="Add" className='icon' />
        </div>
        <div className='btn'>
          <img src={trashIcon} alt="Delete" className='icon' />
        </div>
      </div>
      <ul className='list'>
        <li className='login'>
          <img className='favicon' src={googleIcon}></img>
          <div>
            <div className="title">Google</div>
            <div className="username">someone@gmail.com</div>
          </div>
        </li>
      </ul>
    </>
  );
}

export default App
