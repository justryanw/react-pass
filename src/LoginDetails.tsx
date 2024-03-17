import { LoginField, BorderType } from "./LoginField";
import { Login } from "./App";

interface ILoginDetails {
    login: Login
}

export function LoginDetails({ login }: ILoginDetails) {
    const handleSubmit = () => {

    };

    return (
        <form onSubmit={handleSubmit} key={login.id} className="login-details">
            {Array.from(login.fields.entries()).map(([key, value], index, arr) => {
                return <LoginField
                    key={key}
                    name={key}
                    value={value}
                    borderType={index === 0 ? BorderType.Top : index === arr.length - 1 ? BorderType.Bottom : BorderType.Middle}
                />
            })}
        </form>
    );
}