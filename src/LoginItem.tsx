import { Login, SelectLogin } from "./App";

interface ILoginItem { 
    login: Login,
    selectLogin: SelectLogin
    selected: boolean
}

export function LoginItem({ login, selectLogin, selected }: ILoginItem) {
    const { id, fields } = login;
    const title = fields.get("Title");
    const username = fields.get("Username");
    const url = fields.get("Url");

    let getFavicon = (url: string, size = 256) => {
        return `https://www.google.com/s2/favicons?sz=${size}&domain_url=${url}`;
    }

    return (
        <li className={`login ${selected ? 'selected' : ''}`} onClick={() => selectLogin(id)}>
            {url && <img className='favicon' src={getFavicon(url)}></img>}
            <div>
                {title && <div className="title">{title}</div>}
                {username &&<div className="username">{username}</div>}
            </div>
        </li>
    );
}
