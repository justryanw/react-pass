import { LoginField, BorderType } from "./LoginField";
import { Login } from "./App";
import { useState } from "react";

interface ILoginDetails {
  login: Login
}

export type OnLoginFieldChange = (key: string, value: string) => void;

export function LoginDetails({ login }: ILoginDetails) {
  const [newLogin, setNewLogin] = useState(login);

  const onChange: OnLoginFieldChange = (key, value) => {
    setNewLogin(({id, fields}) => {
      return {
        id,
        fields: fields.set(key, value)
      };
    });
  }

  const handleSubmit = () => {
    /// grab stuff the fields
  };

  return (
    <form onSubmit={handleSubmit} className="login-details">
      {
        Array.from(newLogin.fields.entries()).map(([key, value], index, arr) => {
          return <LoginField
            key={key}
            name={key}
            value={value}
            borderType={index === 0 ? BorderType.Top : index === arr.length - 1 ? BorderType.Bottom : BorderType.Middle}
            onChange={onChange}
          />
        })
      }
    </form>
  );
}