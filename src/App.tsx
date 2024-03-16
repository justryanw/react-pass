import { useState } from 'react';
import './style.css';
import addIcon from './assets/add.svg';
import trashIcon from './assets/trash.svg';
import { Login, LoginItem } from './LoginItem';
import googleIcon from './assets/google.ico';
import facebookIcon from './assets/facebook.ico';


export default function App() {
  const [logins, setLogins] = useState([
    {
      id: crypto.randomUUID(),
      title: "Google",
      username: "someone@gmail.com",
      icon: googleIcon
    }, {
      id: crypto.randomUUID(),
      title: "Facebook",
      username: "someone@gmail.com",
      icon: facebookIcon
    }, {
      id: crypto.randomUUID(),
      title: "Facebook",
      username: "someone@gmail.com",
      icon: facebookIcon
    }
  ] as Login[]);

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
        {logins.map(login => {
          return <LoginItem login={login} key={login.id} />
        })}
      </ul>
    </>
  );
}
