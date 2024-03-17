import { useRef } from "react";
import { Login } from "./LoginItem";

interface ILoginDetails {
    login: Login | undefined
}

export function LoginDetails({ login }: ILoginDetails) {
    const inputRef = useRef<HTMLInputElement>(null);

    if (!login) return ("no login selected");

    const { title, username, password, url } = login;

    return (
        <form className="login-details">
            <div className="login-detail top" onClick={() => inputRef.current?.focus()}>
                <div className="login-title">Title</div>
                <input className="login-input" value={title} type="text" ref={inputRef} />
            </div>
            <div className="login-detail">
                <div className="login-title">Username</div>
                <input className="login-input" value={username} type="text" />
            </div>
            <div className="login-detail">
                <div className="login-title">Password</div>
                <input className="login-input" value={password} type="text" />
            </div>
            <div className="login-detail bottom">
                <div className="login-title">Url</div>
                <input className="login-input" value={url} type="text" />
            </div>
        </form>
    );
}