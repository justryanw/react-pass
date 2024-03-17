import { useState } from 'react';
import './style.css';
import addIcon from './assets/add.svg';
import trashIcon from './assets/trash.svg';
import { LoginItem } from './LoginItem';
import { LoginDetails } from './LoginDetails';

export type DeleteLogin = (id: string) => void;
export type SelectLogin = (id: string) => void;

export interface Login {
  id: string,
  fields: Map<string, string>
}

export default function App() {
  const [logins, setLogins] = useState<Login[]>([
    {
      id: crypto.randomUUID(),
      fields: new Map<string, string>([
        ["Title", "Google"],
        ["Username", "someone@gmail.com"],
        ["Password", ""],
        ["Url", "https://google.com"],
      ])
    }, {
      id: crypto.randomUUID(),
      fields: new Map<string, string>([
        ["Title", "Facebook"],
        ["Username", "someone@gmail.com"],
        ["Password", ""],
        ["Url", "https://facebook.com"],
      ])
    }, {
      id: crypto.randomUUID(),
      fields: new Map<string, string>([
        ["Title", "Discord"],
        ["Username", "someone@gmail.com"],
        ["Password", ""],
        ["Url", "https://discord.com"],
      ])
    }, {
      id: crypto.randomUUID(),
      fields: new Map<string, string>([
        ["Title", "Google"],
        ["Username", "someone@gmail.com"],
        ["Password", ""],
        ["Url", "https://google.com"],
      ])
    }, {
      id: crypto.randomUUID(),
      fields: new Map<string, string>([
        ["Title", "Google"],
        ["Username", "someone@gmail.com"],
        ["Password", ""],
        ["Url", "https://google.com"],
      ])
    }, {
      id: crypto.randomUUID(),
      fields: new Map<string, string>([
        ["Title", "Google"],
        ["Username", "someone@gmail.com"],
        ["Password", ""],
        ["Url", "https://google.com"],
      ])
    }, {
      id: crypto.randomUUID(),
      fields: new Map<string, string>([
        ["Title", "Facebook"],
        ["Username", "someone@gmail.com"],
        ["Password", ""],
        ["Url", "https://facebook.com"],
      ])
    }, {
      id: crypto.randomUUID(),
      fields: new Map<string, string>([
        ["Title", "Discord"],
        ["Username", "someone@gmail.com"],
        ["Password", ""],
        ["Url", "https://discord.com"],
      ])
    }, {
      id: crypto.randomUUID(),
      fields: new Map<string, string>([
        ["Title", "Google"],
        ["Username", "someone@gmail.com"],
        ["Password", ""],
        ["Url", "https://google.com"],
      ])
    }, {
      id: crypto.randomUUID(),
      fields: new Map<string, string>([
        ["Title", "Google"],
        ["Username", "someone@gmail.com"],
        ["Password", ""],
        ["Url", "https://google.com"],
      ])
    },{
      id: crypto.randomUUID(),
      fields: new Map<string, string>([
        ["Title", "Google"],
        ["Username", "someone@gmail.com"],
        ["Password", ""],
        ["Url", "https://google.com"],
      ])
    }, {
      id: crypto.randomUUID(),
      fields: new Map<string, string>([
        ["Title", "Facebook"],
        ["Username", "someone@gmail.com"],
        ["Password", ""],
        ["Url", "https://facebook.com"],
      ])
    }, {
      id: crypto.randomUUID(),
      fields: new Map<string, string>([
        ["Title", "Discord"],
        ["Username", "someone@gmail.com"],
        ["Password", ""],
        ["Url", "https://discord.com"],
      ])
    }, {
      id: crypto.randomUUID(),
      fields: new Map<string, string>([
        ["Title", "Google"],
        ["Username", "someone@gmail.com"],
        ["Password", ""],
        ["Url", "https://google.com"],
      ])
    }, {
      id: crypto.randomUUID(),
      fields: new Map<string, string>([
        ["Title", "Google"],
        ["Username", "someone@gmail.com"],
        ["Password", ""],
        ["Url", "https://google.com"],
      ])
    },
  ]);

  const [selectedLogin, setSelectedLogin] = useState<Login | undefined>(logins[0]);

  let deleteLogin: DeleteLogin = (id) => {
    setLogins((currentLogins) => currentLogins.filter(login => login.id !== id));
    setSelectedLogin(() => undefined);
  }

  let selectLogin: SelectLogin = (id) => {
    setSelectedLogin(() => logins.find(login => login.id === id));
  }

  return (
    <>
      <div className="header-row">
        <div className='btn'>
          <img src={addIcon} alt="Add" className='icon' />
        </div>
        <div className='btn' onClick={() => selectedLogin && deleteLogin(selectedLogin.id)} >
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
        {selectedLogin ? <LoginDetails login={selectedLogin} /> : "no login selected"}
      </div>
    </>
  );
}
