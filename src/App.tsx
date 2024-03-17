import { useState } from 'react';
import './style.css';
import addIcon from './assets/add.svg';
import trashIcon from './assets/trash.svg';
import { Login, LoginItem } from './LoginItem';

export type DeleteLogin = (id: string) => void;
export type SelectLogin = (id: string) => void;

export default function App() {
  const [logins] = useState([
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
    }, {
      id: crypto.randomUUID(),
      title: "LinkedIn",
      username: "someone@gmail.com",
      url: "https://linkedin.com"
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
    }, {
      id: crypto.randomUUID(),
      title: "LinkedIn",
      username: "someone@gmail.com",
      url: "https://linkedin.com"
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
    }, {
      id: crypto.randomUUID(),
      title: "LinkedIn",
      username: "someone@gmail.com",
      url: "https://linkedin.com"
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
    }, {
      id: crypto.randomUUID(),
      title: "LinkedIn",
      username: "someone@gmail.com",
      url: "https://linkedin.com"
    }
  ] as Login[]);

  const [selectedLogin, setSelectedLogin] = useState(logins[0] as Login | undefined);

  // let deleteLogin: DeleteLogin = (id) => {
  //   setLogins((currentLogins) => currentLogins.filter(login => login.id !== id));
  // }

  let selectLogin: SelectLogin = (id) => {
    setSelectedLogin(() => logins.find(login => login.id === id));
  }

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
      <div className='main-content'>
        <div className='list-wrapper'>
          <ul className='list'>
            {logins.map(login => {
              const selected = selectedLogin ? selectedLogin.id === login.id : false;
              return <LoginItem login={login} key={login.id} selectLogin={selectLogin} selected={selected} />
            })}
          </ul>
        </div>
        <div className='seperator'>
        </div>
        <div className='details'>
        </div>
      </div>
    </>
  );
}
