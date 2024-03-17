import { useRef, useState } from "react";

export enum BorderType {
    Top = "top",
    Middle = "",
    Bottom = "bottom"
}

interface ILoginDetail {
    name: string,
    value: string,
    borderType: BorderType
}

export function LoginField({ name, value, borderType }: ILoginDetail) {
    const [newValue, setNewValue] = useState(value);

    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div className={`login-detail ${borderType}`} onClick={() => inputRef.current?.focus()}>
            <div className="login-title">{name}</div>
            <input
                className="login-input"
                value={newValue}
                onChange={e => setNewValue(e.target.value)}
                type="text"
                ref={inputRef}
            />
        </div>
    );
}