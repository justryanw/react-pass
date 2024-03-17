import { useState } from 'react';
import './style.css';
import addIcon from './assets/add.svg';
import trashIcon from './assets/trash.svg';
import { LoginItem } from './LoginItem';
import { LoginDetails } from './LoginDetails';

export type DeleteLogin = (id: string) => void;
export type SelectLogin = (id: string) => void;
export type NewLogin = () => void;

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
        ["Title", "Amazon"],
        ["Username", "someone@gmail.com"],
        ["Password", ""],
        ["Url", "https://amazon.com"],
      ])
    }
  ]);

  const [selectedLogin, setSelectedLogin] = useState<Login | undefined>(logins[0]);

  const deleteLogin: DeleteLogin = (id) => {
    const lastIndex = logins.findIndex((login) => login.id === id);
    setLogins((currentLogins) => currentLogins.filter(login => login.id !== id));
    const index = lastIndex + 1 !== logins.length ? lastIndex + 1 : lastIndex - 1;

    setSelectedLogin(logins[index]);
  }

  const newLogin: NewLogin = () => {
    const newLogin = {
      id: crypto.randomUUID(),
      fields: new Map<string, string>([
        ["Title", ""],
        ["Username", ""],
        ["Password", ""],
        ["Url", ""],
      ])
    };

    setLogins((currentLogins) => [...currentLogins, newLogin]);
    setSelectedLogin(newLogin);
  }

  const selectLogin: SelectLogin = (id) => {
    setSelectedLogin(() => logins.find(login => login.id === id));
  }

  return (
    <>
      <div className="header-row">
        <div className='btn' onClick={() => newLogin()}>
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
        <div className='seperator' />
        {selectedLogin ? <LoginDetails login={selectedLogin} key={selectedLogin.id} /> : "no login selected"}
      </div>
    </>
  );
}
