import LoginEntry, { BorderType } from "./LoginEntry";
import { Login } from "./LoginItem";

interface ILoginDetails {
    login: Login | undefined
}

export function LoginDetails({ login }: ILoginDetails) {
    if (!login) return ("no login selected");
    const { title, username, password, url } = login;

    return (
        <form key={login.id} className="login-details">
            <LoginEntry name={"Title"} value={title} endType={BorderType.Top} />
            <LoginEntry name={"Username"} value={username} endType={BorderType.Middle} />
            <LoginEntry name={"Password"} value={password} endType={BorderType.Middle} />
            <LoginEntry name={"Url"} value={url} endType={BorderType.Bottom} />
        </form>
    );
}