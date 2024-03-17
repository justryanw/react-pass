import { Login } from "./LoginItem";

interface ILoginDetails {
    login: Login | undefined
}

export function LoginDetails({ login }: ILoginDetails) {
    if (!login) return ("no login selected");

    const { title } = login;

    return(
        `${title}`
    );
}