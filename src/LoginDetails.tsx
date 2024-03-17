import LoginDetail, { BorderType } from "./LoginDetail";
import { Login } from "./LoginItem";

interface ILoginDetails {
    login: Login | undefined
}

export function LoginDetails({ login }: ILoginDetails) {
    if (!login) return ("no login selected");
    const { title, username, password, url } = login;

    return (
        <form className="login-details">
            <LoginDetail name={"Title"} value={title} endType={BorderType.Top} />
            <LoginDetail name={"Username"} value={username} endType={BorderType.Middle} />
            <LoginDetail name={"Password"} value={password} endType={BorderType.Middle} />
            <LoginDetail name={"Url"} value={url} endType={BorderType.Bottom} />
        </form>
    );
}