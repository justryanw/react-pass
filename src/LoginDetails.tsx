import { LoginField, BorderType } from "./LoginField";
import { Login } from "./App";

interface ILoginDetails {
    login: Login
}

export function LoginDetails({ login }: ILoginDetails) {

    return (
        <form key={login.id} className="login-details">
            {Array.from(login.fields.entries()).map(([key, value], index, arr) => {
                return <LoginField
                    name={key}
                    value={value}
                    endType={index === 0 ? BorderType.Top : index === arr.length - 1 ? BorderType.Bottom : BorderType.Middle}
                />
            })}
        </form>
    );
}