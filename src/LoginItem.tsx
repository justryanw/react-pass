export interface Login {
    id: string,
    title: string,
    username: string,
    password: string,
    url: string,
}

export function LoginItem({ login }: { login: Login }) {
    const { title, username, url } = login;

    let getFavicon = (url: string, size = 256) => {
        return `https://www.google.com/s2/favicons?sz=${size}&domain_url=${url}`;
    }

    return (
        <li className='login'>
            <img className='favicon' src={getFavicon(url)}></img>

            <div>
                <div className="title">{title}</div>
                <div className="username">{username}</div>
            </div>
        </li>
    );
}