import { LoginField, BorderType } from "./LoginField";
import { Login, OnSubmit } from "./App";
import { useState } from "react";

interface ILoginDetails {
  login: Login,
  onSubmit: OnSubmit
}

export type OnLoginFieldChange = (key: string, value: string) => void;

export function LoginDetails({ login, onSubmit }: ILoginDetails) {
  const [newLogin, setNewLogin] = useState(login);

  const onChange: OnLoginFieldChange = (key, value) => {
    setNewLogin(({ id, fields }) => {
      let newFields = { ...fields };
      newFields[key] = value;

      return {
        id,
        fields: newFields
      };
    });
  }

  const handleSubmit = () => {
    onSubmit(newLogin);
  };

  return (
    <div className="login-details-page">
      <form className="login-details">
        {
          Object.entries(newLogin.fields).map(([key, value], index, arr) => {
            if (typeof value === 'string') {
              return <LoginField
                key={key}
                name={key}
                value={value}
                borderType={index === 0 ? BorderType.Top : index === arr.length - 1 ? BorderType.Bottom : BorderType.Middle}
                onChange={onChange}
              />
            }
          })
        }
      </form>
      <div className="save-button" onClick={handleSubmit}>Save</div>
    </div>
  );
}