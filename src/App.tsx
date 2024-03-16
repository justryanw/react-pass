import { useState } from 'react';
import './style.css';
import addIcon from './assets/add.svg';
import trashIcon from './assets/trash.svg';
import { Login, LoginItem } from './LoginItem';


export default function App() {
  const [logins, setLogins] = useState([
    {
      id: crypto.randomUUID(),
      title: "Google",
      username: "someone@gmail.com",
      url: "https://google.com"
    }, {
      id: crypto.randomUUID(),
      title: "Facebook",
      username: "someone@gmail.com",
      url: "https://facebook.com"
    }, {
      id: crypto.randomUUID(),
      title: "Youtube",
      username: "someone@gmail.com",
      url: "https://youtube.com"
    }, {
      id: crypto.randomUUID(),
      title: "Discord",
      username: "someone@gmail.com",
      url: "https://discord.com"
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
