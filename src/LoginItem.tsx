export interface Login {
  id: string,
  title: string,
  username: string,
  password: string,
  url: string,
  icon: string,
}

export function LoginItem({ login }: { login: Login }) {
    const { title, username, icon } = login;
    return (
        <li className='login'>
            <img className='favicon' src={icon}></img>
            <div>
                <div className="title">{title}</div>
                <div className="username">{username}</div>
            </div>
        </li>
    );
}