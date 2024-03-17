import { useRef } from "react";
import { OnLoginFieldChange } from "./LoginDetails";

export enum BorderType {
  Top = "top",
  Middle = "",
  Bottom = "bottom"
}

interface ILoginDetail {
  name: string,
  value: string,
  borderType: BorderType
  onChange: OnLoginFieldChange
}

export function LoginField({ name, value, borderType, onChange }: ILoginDetail) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={`login-detail ${borderType}`} onClick={() => inputRef.current?.focus()}>
      <div className="login-title">{name}</div>
      <input
        className="login-input"
        value={value}
        onChange={e => onChange(name, e.target.value)}
        type="text"
        ref={inputRef}
      />
    </div>
  );
}