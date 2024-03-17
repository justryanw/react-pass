import { SelectLogin } from "./App";

export interface Login {
    id: string,
    title: string,
    username: string,
    password: string,
    url: string,
}

interface ILoginItem { 
    login: Login,
    selectLogin: SelectLogin
    selected: boolean
}

export function LoginItem({ login, selectLogin, selected }: ILoginItem) {
    const { title, username, url, id } = login;

    let getFavicon = (url: string, size = 256) => {
        return `https://www.google.com/s2/favicons?sz=${size}&domain_url=${url}`;
    }

    return (
        <li className={`login ${selected ? 'selected' : ''}`} onClick={() => selectLogin(id)}>
            <img className='favicon' src={getFavicon(url)}></img>

            <div>
                <div className="title">{title}</div>
                <div className="username">{username}</div>
            </div>
        </li>
    );
}