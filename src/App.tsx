import { useState } from 'react';
import './style.css';
import addIcon from './assets/add.svg';
import trashIcon from './assets/trash.svg';
import googleIcon from './assets/google.ico';
import facebookIcon from './assets/facebook.ico';

interface Login {
  id: string,
  title: string,
  username: string,
  password: string,
  url: string,
}

function App() {
  const [logins, setLogins] = useState([] as Login[]);

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
        <li className='login'>
          <img className='favicon' src={facebookIcon}></img>
          <div>
            <div className="title">Facebook</div>
            <div className="username">someone@gmail.com</div>
          </div>
        </li>
      </ul>
    </>
  );
}

export default App
