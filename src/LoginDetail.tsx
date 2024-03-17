import { useRef } from "react";

export enum BorderType {
    Top = "top",
    Middle = "",
    Bottom = "bottom"
}

interface ILoginDetail {
    name: string,
    value: string,
    endType: BorderType
}

export default function LoginDetail({ name, value, endType }: ILoginDetail) {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div className={`login-detail ${endType}`} onClick={() => inputRef.current?.focus()}>
            <div className="login-title">{name}</div>
            <input className="login-input" value={value} type="text" ref={inputRef} />
        </div>
    );
}