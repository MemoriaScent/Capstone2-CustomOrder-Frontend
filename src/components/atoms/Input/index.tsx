import React from "react";

interface InputProps {
    value?: string; 
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string; 
    type?: string; // input 태그의 타입을 설정하기 위한 prop입니다. 예를 들어 "text", "password" 등이 있습니다.
    className?: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder, type = "text", className }) => {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`px-4 ${className}`} />
    );
}

export default Input;