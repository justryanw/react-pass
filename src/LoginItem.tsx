import { Login, SelectLogin } from "./App";

interface ILoginItem {
    login: Login,
    selectLogin: SelectLogin
    selected: boolean
}

export function LoginItem({ login, selectLogin, selected }: ILoginItem) {
    const { id, fields } = login;
    const { Title, Username, Url } = fields;

    let getFavicon = (url: string, size = 256) => {
        return `https://www.google.com/s2/favicons?sz=${size}&domain_url=${url}`;
    }

    return (
        <li className={`login ${selected ? 'selected' : ''}`} onClick={() => selectLogin(id)}>
            <img className='favicon' src={getFavicon(Url)}></img>
            <div>
                <div className="title">{Title}</div>
                <div className="username">{Username}</div>
            </div>
        </li>
    );
}
