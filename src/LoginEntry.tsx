import { useRef, useState } from "react";

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

export default function LoginEntry({ name, value, endType }: ILoginDetail) {
    const [entryValue, setEntryValue] = useState(value || "");


    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div className={`login-detail ${endType}`} onClick={() => inputRef.current?.focus()}>
            <div className="login-title">{name}</div>
            <input
                className="login-input"
                value={entryValue}
                onChange={e => setEntryValue(e.target.value)}
                type="text"
                ref={inputRef}
            />
        </div>
    );
}